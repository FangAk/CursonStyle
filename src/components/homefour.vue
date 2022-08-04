<template >
  <div id="map">
    <div id="containermap"></div>
    <header></header>
    <div class="hearder-left TopCurrentTime">{{ timevalue }}</div>
    <div class="hearder-right">
      <ul>
        <li @click="detail('yrw')">有任务 {{ yrw }}</li>
        <li @click="detail('wrw')">无任务 {{ wrw }}</li>
        <li @click="detail('lx')">离线 {{ lx }}</li>
      </ul>
    </div>
    <div class="mapleft">
      <div class="title_bg">
        <span class="name">养护计量</span>
      </div>
      <div class="left-cont">
        <div class="left-title"><span>单位/km</span> <span>本周</span></div>
        <div ref="leftechart" class="leftechart"></div>
      </div>
      <div class="title_bg title_bg2">
        <span class="name">抢修计量</span>
      </div>
      <div class="left-cont">
        <div class="left-title"><span>单位/个</span> <span>本周</span></div>
        <div class="lefttwo">
          <div @click="detail2('中区')" class="contkey">
            <div class="lft1 lft">{{ list2a }}</div>
            <div class="leftname1">中区</div>
          </div>
          <div @click="detail2('南区')" class="contkey">
            <div class="lft2 lft">{{ list2b }}</div>
            <div class="leftname2">南区</div>
          </div>
          <div @click="detail2('北区')" class="contkey">
            <div class="lft3 lft">{{ list2c }}</div>
            <div class="leftname3">北区</div>
          </div>
        </div>
      </div>
      <div class="title_bg title_bg3">
        <span class="name">巡查计量</span>
      </div>
      <div class="left-title"><span>单位/次</span> <span>本周</span></div>
      <div class="right-btm">
        <div @click="detail3('中区')" class="list_item1 list">
          <span>{{ list3a }}</span>
          <span>中区</span>
        </div>
        <div @click="detail3('南区')" class="list_item2 list">
          <span>{{ list3b }}</span> <span>南区</span>
        </div>
        <div @click="detail3('北区')" class="list_item3 list">
          <span>{{ list3c }}</span> <span>北区</span>
        </div>
      </div>
    </div>
    <div class="mapright">
      <div class="title_bg title_bgright">
        <span class="nametwo">事件上报</span>
      </div>
      <div class="left-title left-titleright"><span>单位/个</span></div>
      <div ref="score" class="right-btmll"></div>
      <div class="title_bg title_bgright title_bgright2">
        <span class="nametwo">硬件设备</span>
      </div>
      <div class="left-title left-titleright"><span>单位/个</span></div>
      <div class="right-cen">
        <div @click="detail('水质仪')" class="right-cenall">
          <img src="../assets/img/sbszy-icon.png" alt="" />
          <div>
            <span>水质仪</span>
            <span class="szy">{{ rhtnum1 }}</span>
          </div>
        </div>
        <div @click="detail('液位计')" class="right-cenall">
          <img src="../assets/img/sbywj-icon.png" alt="" />
          <div>
            <span>液位计</span>
            <span class="ywj">{{ rhtnum2 }}</span>
          </div>
        </div>
        <div @click="detail('流量计')" class="right-cenall">
          <img src="../assets/img/sbllj-icon.png" alt="" />
          <div>
            <span>流量计</span>
            <span class="llj">{{ rhtnum3 }}</span>
          </div>
        </div>
        <div @click="detail('智慧井盖')" class="right-cenall">
          <img src="../assets/img/sbzhjg-icon.png" alt="" />
          <div>
            <span>智慧井盖</span>
            <span class="zhjg">{{ rhtnum4 }}</span>
          </div>
        </div>
      </div>
      <div class="title_bg title_bgright title_bgright3">
        <span class="nametwo">预警调度</span>
      </div>
      <div class="all-bym">
        <img
          v-if="warninglist.length == 0"
          src="../assets/img/yjdd_notdata.png"
          alt=""
        />
        <div class="warning" v-else>
          <div class="warning-lft">
            <ul>
              <li
                @click="warningkey(item)"
                v-for="(item, index) in warninglist"
                :key="index"
              >
                <span>{{ item.RECORDTIME }}</span>
                <span>{{ item.EQUIPMENTNAME }}</span>
                <span>异常</span>
              </li>
            </ul>
          </div>
          <div @click="warningkey(warninglist[0])" class="warning-rit">
            <img
              style="height: 30%; width: 99%"
              src="../assets/img/YJDD.png"
              alt=""
            />
            <div>
              <span>{{ warninglist[0].EQUIPMENTNAME }}</span>
              <span class="yc">{{ warninglist[0].EQUIPMENTTYPE }}异常</span>
              <span>{{ warninglist[0].RECORDTIME }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <div v-show="open" class="zhe">
      <div class="open-map">
        <div class="open-tit">
          <img src="../assets/img/YHJL_icon.png" alt="" /> <span>养护计量</span>
        </div>
        <i @click="close" class="el-icon-close"></i>
        <div class="open-cont">
          <div class="open-tt">
            <ul>
              <li>结束时间</li>
              <li>片区</li>
              <li>长度 (米)</li>
            </ul>
          </div>
          <div class="temp-list">
            <ul>
              <li v-for="(item, index) in tableData" :key="index">
                <span>{{ item.FINISHTIME }}</span>
                <span>{{ item.AREANAME }}</span> <span>{{ item.AMOUNT }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-show="open2" class="zhe">
      <div class="open-map">
        <div class="open-tit">
          <img src="../assets/img/QXJL_icon.png" alt="" /> <span>抢修计量</span>
        </div>
        <i @click="close2" class="el-icon-close"></i>
        <div class="open-cont">
          <div class="open-tt">
            <ul>
              <li>任务名称</li>
              <li>审核状态</li>
              <li>备注</li>
            </ul>
          </div>
          <div class="temp-list">
            <ul>
              <li v-for="(item, index) in tableData2" :key="index">
                <span>{{ item.ROADNAME }}</span>
                <span>{{
                  item.STATUS == "0"
                    ? "未接收"
                    : item.STATUS == "-1"
                    ? "一级审核通过"
                    : item.STATUS == "-2"
                    ? "等待审核"
                    : item.STATUS == "-3"
                    ? "审核不通过"
                    : item.STATUS == "1"
                    ? "已接收"
                    : item.STATUS == "2"
                    ? "到达现场"
                    : item.STATUS == "3"
                    ? "维修中"
                    : item.STATUS == "4"
                    ? "维修结束"
                    : item.STATUS == "5"
                    ? "申请复核"
                    : item.STATUS == "6"
                    ? "复核不通过"
                    : item.STATUS == "7"
                    ? "销单"
                    : ""
                }}</span>
                <span>{{ item.TASKDES }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-show="open3" class="zhe">
      <div class="open-map">
        <div class="open-tit">
          <img src="../assets/img/XCJL_icon.png" alt="" /> <span>巡查计量</span>
        </div>
        <i @click="close3" class="el-icon-close"></i>
        <div class="open-cont">
          <div class="open-tt">
            <ul>
              <li>名称</li>
              <li>巡查人</li>
              <li>日期</li>
            </ul>
          </div>
          <div class="temp-list">
            <ul>
              <li v-for="(item, index) in tableData3" :key="index">
                <span>{{ item.NAME }}</span>
                <span>{{ item.ASNAME }}</span>
                <span>{{ item.STARTTIME }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-show="open4" class="zhe">
      <div class="open-map">
        <div class="open-tit">
          <img src="../assets/img/CJDF_icon.png" alt="" /> <span>事件上报</span>
        </div>
        <i @click="close4" class="el-icon-close"></i>
        <div class="open-cont">
          <div class="open-tt">
            <ul>
              <li>道路和小区名</li>
              <li>上报人</li>
              <li>来源</li>
              <li>事件描述</li>
            </ul>
          </div>
          <div class="temp-list">
            <ul>
              <li v-for="(item, index) in tableData4" :key="index">
                <span :title="item.ROADNAME">{{ item.ROADNAME }}</span>
                <span :title="item.UPLOADPERSONNAME">{{
                  item.UPLOADPERSONNAME
                }}</span>
                <span :title="item.SOURCE">{{ item.SOURCE }}</span>
                <span :title="item.EVENTDES">{{ item.EVENTDES }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 地图弹窗 -->
    <div v-show="zxicon" class="zhe">
      <div class="zxicon">
        <i class="zxclose el-icon-close" @click="zxclose"></i>
        <div class="zx-tit">
          <ul>
            <li>
              <img src="../assets/img/rw_table_icon4.png" alt="" />
              <span>签到人员</span>
            </li>
            <li>
              <img src="../assets/img/rw_table_icon2.png" alt="" />
              <span>所属片区</span>
            </li>
            <li>
              <img src="../assets/img/rw_table_icon3.png" alt="" />
              <span>角色名称</span>
            </li>
            <li>
              <img src="../assets/img/rw_table_icon1.png" alt="" />
              <span>当前任务</span>
            </li>
          </ul>
        </div>
        <div class="zx-tittwo">
          <ul>
            <li>{{ name }}</li>
            <li>{{ pq }}</li>
            <li>{{ juese }}</li>
            <li>{{ renwu }}</li>
          </ul>
        </div>
        <div class="zx-content">
          <div v-for="(item, index) in yrwarr" class="zx-all">
            <div class="zx-left">
              <img src="../assets/img/rw_icon2.png" alt="" />
              <span class="zx-num">{{
                index + 1 < 10 ? "0" + Number(index + 1) : index + 1
              }}</span>
            </div>
            <div class="zx-right">
              <div class="zx-r">
                <span>{{ item.time }}</span>
                <p>
                  <span>{{ item.date }}</span
                  ><span>{{ item.week }}</span>
                </p>
              </div>
              <div class="zx-l">
                <el-image
                  v-for="(val, idx) in item.picture"
                  v-if="val"
                  :key="idx"
                  error="暂无"
                  class="img"
                  :src="val"
                  :preview-src-list="srcList"
                ></el-image>

                <i
                  @click="iconleft(item.picture, $event)"
                  v-if="item.picture"
                  class="el-icon-arrow-left"
                ></i>
                <i
                  @click="iconright(item.picture, $event)"
                  v-if="item.picture"
                  class="el-icon-arrow-right"
                ></i>
              </div>
            </div>
          </div>
          <img class="work" src="../assets/img/rw_icon1.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 地图对应四个弹窗 -->
    <div v-show="panszy" class="zhe">
      <div class="open-map">
        <i @click="szyclose" class="el-icon-close"></i>
        <div class="allow">
          <div class="s-title">
            <img src="../assets/img/SZYXQ_icon.png" alt="" />
            <span>水质仪详情</span>
          </div>
          <div class="ss-cont">
            <div class="ss-content-tit">
              <span
                :style="changeval == 0 ? 'background:#fff;' : ''"
                @click="change(0)"
                ><img src="../assets/img/lljxx_select.png" alt="" />
                详细信息</span
              >
              <span
                :style="changeval == 1 ? 'background:#fff;' : ''"
                @click="change(1)"
                ><img src="../assets/img/llqx_blue.png" alt="" /> 历史曲线</span
              >
            </div>
            <div v-show="changeval == 0" class="listall">
              <div class="listall-left">
                <ul>
                  <li v-for="(item, index) in cahngeleft" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
              <div class="listall-right">
                <ul>
                  <li v-for="(item, index) in cahngeright" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div v-show="changeval == 1" class="listallechart">
              <div class="block">
                <span class="demonstration">时间 :</span>
                <el-date-picker
                  style="margin: 0 1vw"
                  v-model="value1"
                  align="left"
                  size="small"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                  format="yyyy-MM-dd"
                >
                </el-date-picker>
                <input type="date" name="" value="" />
                <el-button @click="date(0)" size="small" type="primary"
                  >查询</el-button
                >
              </div>
              <div ref="listall" class="ech"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="panywj" class="zhe">
      <div class="open-map">
        <i @click="ywjclose" class="el-icon-close"></i>
        <div class="allow">
          <div class="s-title">
            <img src="../assets/img/SZYXQ_icon.png" alt="" />
            <span>液位计详情</span>
          </div>
          <div class="ss-cont">
            <div class="ss-content-tit">
              <span
                :style="changeval == 0 ? 'background:#fff;' : ''"
                @click="change(0)"
                ><img src="../assets/img/lljxx_select.png" alt="" />
                详细信息</span
              >
              <span
                :style="changeval == 1 ? 'background:#fff;' : ''"
                @click="change(1)"
                ><img src="../assets/img/llqx_blue.png" alt="" /> 历史曲线</span
              >
            </div>
            <div v-show="changeval == 0" class="listall">
              <div class="listall-left">
                <ul>
                  <li v-for="(item, index) in cahngeleft" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
              <div class="listall-right">
                <ul>
                  <li v-for="(item, index) in cahngeright" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div v-show="changeval == 1" class="listallechart">
              <div class="block">
                <span class="demonstration">时间 :</span>
                <el-date-picker
                  style="margin: 0 1vw"
                  v-model="value1"
                  align="left"
                  size="small"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                  format="yyyy-MM-dd"
                >
                </el-date-picker>
                <el-button @click="date(1)" size="small" type="primary"
                  >查询</el-button
                >
              </div>
              <div ref="listalltwo" class="ech"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="panllj" class="zhe">
      <div class="open-map">
        <i @click="lljclose" class="el-icon-close"></i>
        <div class="allow">
          <div class="s-title">
            <img src="../assets/img/SZYXQ_icon.png" alt="" />
            <span>流量计详情</span>
          </div>
          <div class="ss-cont">
            <div class="ss-content-tit">
              <span
                :style="changeval == 0 ? 'background:#fff;' : ''"
                @click="change(0)"
                ><img src="../assets/img/lljxx_select.png" alt="" />
                详细信息</span
              >
              <span
                :style="changeval == 1 ? 'background:#fff;' : ''"
                @click="change(1)"
                ><img src="../assets/img/llqx_blue.png" alt="" /> 历史曲线</span
              >
            </div>
            <div v-show="changeval == 0" class="listall">
              <div class="listall-left">
                <ul>
                  <li v-for="(item, index) in cahngeleft" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
              <div class="listall-right">
                <ul>
                  <li v-for="(item, index) in cahngeright" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div v-show="changeval == 1" class="listallechart">
              <div class="block">
                <span class="demonstration">时间 :</span>
                <el-date-picker
                  style="margin: 0 1vw"
                  v-model="value1"
                  align="right"
                  size="small"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                >
                </el-date-picker>
                <el-button @click="date(2)" size="small" type="primary"
                  >查询</el-button
                >
              </div>
              <div ref="listallthree" class="ech"></div>
            </div>
            <div v-show="changeval == 1" class="listall" ref=""></div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="panjg" class="zhe">
      <div class="open-map">
        <i @click="jgclose" class="el-icon-close"></i>
        <div class="allow">
          <div class="s-title">
            <img src="../assets/img/SZYXQ_icon.png" alt="" />
            <span>智慧井盖详情</span>
          </div>
          <div class="ss-cont">
            <div class="ss-content-tit">
              <span
                :style="changeval == 0 ? 'background:#fff;' : ''"
                @click="change(0)"
                ><img src="../assets/img/lljxx_select.png" alt="" />
                详细信息</span
              >
            </div>
            <div class="listall">
              <div class="listall-left">
                <ul>
                  <li v-for="(item, index) in cahngeleft" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
              <div class="listall-right">
                <ul>
                  <li v-for="(item, index) in cahngeright" :key="index">
                    <span>{{ item.name }}</span
                    ><span>{{ item.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="panwaar" class="zhe">
      <div class="open-map open-two">
        <i @click="warningclose" class="el-icon-close"></i>
        <div class="allow">
          <div class="s-title">
            <img src="../assets/img/YJDD_TCicon.png" alt="" />
            <span>预警调度</span>
          </div>
          <div class="ss-cont warn-cont">
            <div class="yjdd">
              <ul>
                <li>
                  <span>设备名称:</span><span>{{ warn.name }}</span>
                </li>
                <li>
                  <span>预警问题:</span><span>{{ warn.yjwt }}</span>
                </li>
                <li>
                  <span>预警时间:</span><span>{{ warn.yjtime }}</span>
                </li>
                <li>
                  <span>调度公司:</span
                  ><span style="width: 7vw">
                    <el-select
                      class="select"
                      size="small"
                      v-model="valaa"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in Companyid"
                        :key="item.COMPANYNAME"
                        :label="item.COMPANYNAME"
                        :value="item.COMPANYID"
                      >
                      </el-option> </el-select
                  ></span>
                </li>
                <li>
                  <span>调度片区:</span
                  ><span style="width: 7vw">
                    <el-select
                      class="select"
                      size="small"
                      v-model="valbb"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in Areaid"
                        :key="item.AREANAME"
                        :label="item.AREANAME"
                        :value="item.AREAID"
                      >
                      </el-option> </el-select
                  ></span>
                </li>
                <li>
                  <span>计划开始时间:</span
                  ><span>
                    <!-- <el-date-picker
                      class="select"
                      style="margin: 0 1vw"
                      v-model="valueaa"
                      align="left"
                      size="small"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker -->
                    <input type="date" v-model="valueaa" name="" value="" />
                  </span>
                </li>
                <li>
                  <span>计划结束时间:</span
                  ><span>
                    <!-- <el-date-picker
                      class="select"
                      style="margin: 0 1vw"
                      v-model="valuebb"
                      align="left"
                      size="small"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker -->
                    <input type="date" v-model="valuebb" name="" value="" />
                  </span>
                </li>
              </ul>
            </div>
            <div class="btm-warn">
              <el-button @click="warningclose" size="small">取消</el-button>
              <el-button @click="ok" size="small" type="primary"
                >确定</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import MapLoader from "../map/map";
import store from "../store/index";
import { citesData } from "../map/data";
import {
  AreaSegmentation,
  rygj_Company,
  MaintenancePlan,
  YHPipeDialog,
  RepairMeteringLog,
  RepairMeteringDialog,
  XCMeteringDialog,
  InspectMeasurementLog,
  EventsReported,
  EventsReportedDialog,
  HardwareDevices,
  LocationInfo,
  TaskInfoDialog,
  child_F2,
  WarningScheduling,
  SZYInfoDialog,
  YWJInfoDialog,
  LLJInfoDialog,
  ZHJGInfoDialog,
  SZYDataDialog,
  YWJDataDialog,
  LLJDataDialog,
  Company,
  Area,
  UpdateWaterLevel,
  EquipmentInfo,
} from "../ajax/index";
import { getAccounts } from "../ajax/mobile";
import * as echarts from "echarts";
export default {
  data() {
    return {
      selectkey: 0,
      valueaa: "",
      valuebb: "",
      valaa: "",
      valbb: "",
      warn: {},
      llid: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一月前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: this.$moment().format("YYYY/MM/DD "),
      cahngeleft: [],
      cahngeright: [],
      areaid: [],
      panszy: false,
      panywj: false,
      panllj: false,
      panjg: false,
      panwaar: false,
      srcList: [],
      url: "",
      name: "",
      pq: "",
      juese: "",
      renwu: "",
      tableData4: [],
      tableData3: [],
      tableData2: [],
      open: false,
      open2: false,
      open3: false,
      open4: false,
      zxicon: false,
      tableData: [],
      map: null,
      timevalue: "",
      polygonPath: [[], [], [], []],
      polygon1: null,
      textBox_i: null,
      compid: [],
      list: [],
      yrw: 0,
      wrw: 0,
      lx: 0,
      markerlist: [],
      icon: require("../assets/img/zxicon.png"),
      icon2: require("../assets/img/bzxicon.png"),
      icon3: require("../assets/img/zx_notsigns_icon.png"),
      yrwlist: [],
      wrwlist: [],
      lxlist: [],
      start: this.$moment(
        this.$moment().week(this.$moment().week()).startOf("week").valueOf()
      ).format("YYYY/MM/DD"),
      end: this.$moment().format("YYYY/MM/DD "),
      arr1: [],
      list2a: 0,
      list2b: 0,
      list2c: 0,
      list3a: 0,
      list3b: 0,
      list3c: 0,
      rhtnum1: 0,
      rhtnum2: 0,
      rhtnum3: 0,
      rhtnum4: 0,
      Icon: null,
      Iconwarning: null,
      infoWindow: null,
      data1: [
        { name: "待处理", value: 0 },
        { name: "进行中", value: 0 },
        { name: "已完成", value: 0 },
      ],
      yrwarr: [
        {
          time: "",
          week: "",
          picture: [],
        },
      ],
      warninglist: [],
      changeval: 0,
      echartlist: [],
      echartlisttwo: [],
      echartlistthree: [],
      echartlistfour: [],
      Companyid: [],
      Areaid: [],
      ADDRESS_str: "",
      lon: "",
      lat: "",
      ROADNAME_str: "",
      layer: null,
    };
  },
  created() {
    // console.log(citesData.filter(v=>v.name=="苏州"));
    this.areaid = [];
    child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
      eval(res.d).forEach((item) => {
        this.areaid.push(item.AREAID);
      });
      this.echartsj();
    });
    this.renyunan();
    this.online();
    //数据
    this.warning();
    this.list1();
    this.list2();
    this.list3();
    this.rightnum();
    Company().then((res) => {
      this.Companyid = eval(res.d);

      console.log(this.Companyid);
    });
    Area().then((res) => {
      this.Areaid = eval(res.d);
    });
  },
  mounted() {
    setInterval(() => {
      this.time();
    }, 1000);
    this.initAMap();
  },
  computed: {
    obj() {
      return store.state.list;
    },
  },
  watch: {
    yrwarr(val) {
      val.map((item) => {
        item.picture.map((val, idx) => {
          if (val.indexOf("jpg")) {
            this.srcList.push(val);
          } else if (val == "") {
            item.picture.splice(idx, 1);
          }
        });
      });
      console.log(this.yrwarr);
    },
    obj: function (val) {
      if (
        (val[3].indexOf("block") != -1 && val[0].indexOf("none") != -1) ||
        val[3].indexOf("block") != -1
      ) {
        this.areaid = [];
        this.warning();
        child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.areaid.push(item.AREAID);
          });
          this.echartsj();
        });
        this.initAMap();
        this.renyunan();
        this.online();
        //数据
        this.list1();
        this.list2();
        this.list3();
        this.echartsj();

        setInterval(() => {
          this.time();
        }, 1000);
      }
    },
  },
  methods: {
    iconleft(list, e) {
      var dom = [];
      dom = Array.from(e.target.parentNode.children);
      dom.pop();
      dom.pop();
      if (list.length > 3) {
        dom.forEach((item) => {
          item.style.transform = "translateX(0px)";
        });
      }
    },
    iconright(list, e) {
      var dom = [];
      dom = Array.from(e.target.parentNode.children);
      dom.pop();
      dom.pop();
      if (list.length > 3) {
        dom.forEach((item) => {
          item.style.transform = "translateX(-244px)";
        });
      }
    },

    ok() {
      let time1 = this.valueaa;
      let time2 = this.valuebb;
      if (
        this.valueaa == "" ||
        this.valuebb == "" ||
        this.valaa == "" ||
        this.valuebb == ""
      ) {
        this.$message({
          message: "请选择完整",
          type: "warning",
          duration: 1000,
        });
      } else {
        AMap.convertFrom(
          [this.lon, this.lat],
          "gps",
          function (status, result) {
            if (result.info === "ok") {
              this.lon = result.locations[0].lng;
              this.lat = result.locations[0].lat;
              UpdateWaterLevel({
                TASKDES_str: "",
                UserID: this.Data.companyid.ID,
                StartTime: time1,
                EndTime: time2,
                ADDRESS_str: thi.ADDRESS_str,
                Lat: this.lat,
                Lon: this.lon,
                ROADNAME_str: this.ROADNAME_str,
                TASKCOMPANY: this.valaa,
                CREATEMODE: "",
                Type: "智慧井盖",
                Equipmentid: this.warn.id,
                yjdate: "",
              }).then((res) => {
                if (eval(res.d > 0)) {
                  this.$message({
                    message: "派发成功",
                    type: "success",
                  });
                  this.warning();
                }
              });
            } else {
              UpdateWaterLevel({
                TASKDES_str: "",
                UserID: this.Data.companyid.ID,
                StartTime: time1,
                EndTime: time2,
                ADDRESS_str: thi.ADDRESS_str,
                Lat: this.lat,
                Lon: this.lon,
                ROADNAME_str: this.ROADNAME_str,
                TASKCOMPANY: this.valaa,
                CREATEMODE: "",
                Type: "液位计",
                Equipmentid: this.warn.id,
                yjdate: "",
              }).then((res) => {
                if (eval(res.d > 0)) {
                  this.$message({
                    message: "派发成功",
                    type: "success",
                  });
                  this.warning();
                }
              });
            }
          }
        );
      }
    },
    warningkey(val) {
      console.log(val);

      this.valaa = "请选择";
      this.valbb = "请选择";
      this.warn = {
        name: val.EQUIPMENTNAME,
        yjwt: val.CONTENT,
        yjtime: val.RECORDTIME,
        id: val.EQUIPMENTID,
      };
      EquipmentInfo({
        Equipmentid: val.EQUIPMENTID,
      }).then((res) => {
        let list = eval(res.d);
        this.ADDRESS_str = list[0].ADDRESS;
        this.lon = list[0].SWX;
        this.lat = list[0].SWY;
        this.ROADNAME_str = list[0].EQUIPID + list[0].TYPE;
      });
      this.panwaar = true;
    },
    SZYDataDialog(val) {
      SZYDataDialog({
        StartTime: val,
        Endtime: val,
        Equipmentid: this.llid,
      }).then((res) => {
        this.echartlist = eval(res.d);
        this.dtecharts();
      });
    },
    YWJDataDialog(val) {
      YWJDataDialog({
        StartTime: val,
        Endtime: val,
        Equipmentid: this.llid,
      }).then((res) => {
        this.echartlist = eval(res.d);
        this.dtechartstwo();
      });
    },
    LLJDataDialog(val) {
      LLJDataDialog({
        StartTime: val,
        Endtime: val,
        Equipmentid: this.llid,
      }).then((res) => {
        this.echartlist = eval(res.d);
        this.dtechartsthree();
      });
    },

    date(idx) {
      let yy = new Date(this.value1).getFullYear();
      let mm = new Date(this.value1).getMonth() + 1;
      let dd = new Date(this.value1).getDate();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }
      let time = yy + "/" + mm + "/" + dd;
      if (idx == 0) {
        this.SZYDataDialog(time);
      } else if (idx == 1) {
        this.YWJDataDialog(time);
      } else {
        this.LLJDataDialog(time);
      }
    },
    dtecharts() {
      echarts.dispose(this.$refs.listall);
      var mychart = echarts.init(this.$refs.listall);
      var option = (option = {
        tooltip: {
          trigger: "axis",
          show: true,
        },
        legend: {
          show: true,
          icon: "circle",
          top: 40,
          textStyle: {
            fontSize: 12,
            color: "#efe6e6",
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "35%",
          bottom: "6%",
          containLabel: true,
        },
        xAxis: {
          //设置坐标轴字体颜色和宽度
          type: "category",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#efe6e6",
            },
          },
          axisTick: {
            show: false,
          },
          data: this.getkey(this.echartlist, "UPDATETIME"),
          offset: 2,
        },
        yAxis: {
          axisLine: {
            show: false,
            lineStyle: {
              color: "#efe6e6",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "solid", // y轴分割线类型
              color: "#ded8d861",
            },
          },
        },
        series: [
          {
            name: "COD",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                width: 3,
                color: "#fb7636",
              },
            },
            itemStyle: {
              color: "#fb7636",
              borderColor: "#fff",
              borderWidth: 2,
            },

            data: this.getkey(this.echartlist, "COD"),
          },
          {
            name: "电导率(uS)",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                width: 3,
                color: "#24b314",
              },
            },
            itemStyle: {
              color: "#24b314",
              borderColor: "#fff",
              borderWidth: 2,
            },

            data: this.getkey(this.echartlist, "COND"),
          },
          {
            name: "溶解氧",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                width: 3,
                color: "#027ad7",
              },
            },
            itemStyle: {
              color: "#027ad7",
              borderColor: "#fff",
              borderWidth: 2,
            },

            data: this.getkey(this.echartlist, "DOVAL"),
          },
          {
            name: "温度",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                width: 3,
                color: "#8452e7",
              },
            },
            itemStyle: {
              color: "#8452e7",
              borderColor: "#fff",
              borderWidth: 2,
            },

            data: this.getkey(this.echartlist, "TEMP"),
          },
          {
            name: "浊度",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                width: 3,
                color: "#000",
              },
            },
            itemStyle: {
              color: "#000",
              borderColor: "#fff",
              borderWidth: 2,
            },

            data: this.getkey(this.echartlist, "ZS"),
          },
          {
            name: "PH",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                width: 3,
                color: "#00ae9d",
              },
            },
            itemStyle: {
              color: "#00ae9d",
              borderColor: "#fff",
              borderWidth: 2,
            },

            data: this.getkey(this.echartlist, "PH"),
          },
        ],
      });
      mychart.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          mychart.resize();
        },
        false
      );
    },
    dtechartstwo() {
      console.log(this.echartlisttwo);
      echarts.dispose(this.$refs.listalltwo);
      var mychart = echarts.init(this.$refs.listalltwo);
      var max = this.getkey(this.echartlisttwo, "WATERLEVEL").reduce(function (
        a,
        b
      ) {
        return Math.max(a, b);
      },
      -1);
      var ratehigh = 1 - this.echartlisttwo[0]["WARNVALUE"] / max;
      if (ratehigh < 0) {
        ratehigh = 0;
      }

      var option = {
        tooltip: {
          trigger: "axis",
          position: function (pos, params, dom, rect, size) {
            //return [pt[0], '10%'];
            var obj = { top: 60 };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return obj;
          },
          textStyle: {
            align: "left",
          },
          formatter: "{b}<br>{c}米",
        },
        grid: {
          left: "5%",
          right: "3%",
          bottom: "20%",
        },

        legend: {
          show: false,
          top: "1%",
          textStyle: {
            fontSize: 17,
            color: "#efe6e6",
          },
          itemHeight: 19,
          itemWidth: 32,
          icon: "roundRect",
          borderWidth: 1,
          shadowBlur: 0.5,
          borderRadius: [3, 3, 3, 3],
          borderColor: "rgba(255, 255, 255, 1)",
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          title: {
            text: "时 间",
          },
          axisLine: {
            lineStyle: {
              color: "#efe6e6",
            },
          },
          data: this.getkey(this.echartlisttwo, "SAMPLETIME"),
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          //max: 5,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#efe6e6",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "solid", // y轴分割线类型
              color: "#ded8d861",
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
          },
        ],
        //将线分成两段
        visualMap: {
          show: false,
          dimension: 1,
          pieces: [
            {
              gte: 0,
              lte: this.echartlisttwo[0]["WARNVALUE"],
              color: "#4286f4",
            },
            {
              gte: this.echartlisttwo[0]["WARNVALUE"],
              lte: 5,
              color: "#000000",
            },
          ],
        },
        series: [
          {
            type: "line",
            lineStyle: { width: 1.656 },
            showSymbol: false,
            animation: false,
            hoverAnimation: false,
            data: this.getkey(this.echartlisttwo, "WATERLEVEL"),
            areaStyle: {
              origin: "start",
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "#FFD1D1" },
                  { offset: ratehigh, color: "#ff6367" },
                  { offset: ratehigh + 0.001, color: "transparent" },
                ],
              },
            },
            /*
             * 标记的两条虚线
             */
            markLine: {
              symbol: "none",
              silent: true,
              lineStyle: { normal: { type: "dashed" } },
              label: { position: "start" },
              data: [
                {
                  yAxis: this.echartlisttwo[0]["WARNVALUE"],
                  lineStyle: { width: 1.656, color: "#ff6367" },
                  label: { show: false },
                },
                {
                  yAxis: this.echartlisttwo[0]["NODEDEPTH"],
                  lineStyle: { width: 1.656, color: "#FFB300" },
                  label: { show: false },
                },
              ],
            },
            markPoint: {
              silent: true,
              data: [
                {
                  yAxis: this.echartlisttwo[0]["WARNVALUE"],
                  x: "100%",
                  y:
                    100 -
                    (parseFloat(this.echartlisttwo[0]["WARNVALUE"]) /
                      (parseInt(max) + 3)) *
                      100 +
                    "%",
                  symbolSize: 0.1,
                  label: {
                    textStyle: { color: "#ffffff" },
                    padding: [10, 8, 8, 8],
                    fontSize: 10,
                    fontWeight: 150,
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 72, 74, 1)",
                    position: "left",

                    formatter:
                      "预警液位：" + this.echartlisttwo[0]["WARNVALUE"] + "米",
                  },
                },
                {
                  yAxis: this.echartlisttwo[0]["NODEDEPTH"],
                  x: "100%",
                  y:
                    90 -
                    (parseFloat(this.echartlisttwo[0]["NODEDEPTH"]) /
                      (parseInt(max) + 3)) *
                      90 +
                    "%",
                  symbolSize: 0.1,
                  label: {
                    textStyle: { color: "#ffffff" },
                    padding: [10, 8, 8, 8],
                    fontSize: 10,
                    fontWeight: 150,
                    borderRadius: 8,
                    backgroundColor: "#FFB300",
                    position: "left",

                    formatter:
                      "井深：" +
                      parseFloat(this.echartlisttwo[0]["NODEDEPTH"]).toFixed(
                        2
                      ) +
                      "米",
                  },
                },
              ],
            },
          },
        ],
      };
      mychart.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          mychart.resize();
        },
        false
      );
    },
    dtechartsthree() {
      echarts.dispose(this.$refs.listallthree);
      var mychart = echarts.init(this.$refs.listallthree);
      var option = {
        tooltip: {
          trigger: "axis",
          position: function (pos, params, dom, rect, size) {
            //return [pt[0], '10%'];
            var obj = { top: 60 };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return obj;
          },

          textStyle: {
            align: "left",
          },
          formatter: "{b}<br>{c}米",
        },
        grid: {
          left: "5%",
          right: "3%",
          bottom: "20%",
        },
        legend: {
          show: true,
          top: "3%",
          left: "50%",
          textStyle: {
            fontSize: 12,
            //float: left
            color: "#efe6e6",
          },
          itemHeight: 15,
          itemWidth: 22,
          icon: "roundRect",
          borderWidth: 1,
          shadowBlur: 0.5,
          borderRadius: [3, 3, 3, 3],
          borderColor: "rgba(255, 255, 255, 1)",
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          title: {
            text: "时 间",
          },
          //设置坐标轴字体颜色和宽度
          axisLine: {
            lineStyle: {
              color: "#efe6e6",
            },
          },
          data: this.getkey(this.echartlistthree, "CREATE_TIME"),
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#efe6e6",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "solid", // y轴分割线类型
              color: "#ded8d861",
            },
          },
          boundaryGap: [0, "100%"],
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
          },
        ],
        series: [
          {
            name: "水位",
            type: "line",
            smooth: true,
            //symbol: 'none',
            sampling: "average",
            itemStyle: {
              normal: {
                color: "#ff4683",
              },
            },
            data: this.getkey(this.echartlistthree, "WATER_LEVEL"),
          },
        ],
      };
      mychart.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          mychart.resize();
        },
        false
      );
    },
    change(val) {
      this.changeval = val;
      if (val == 1) {
        setTimeout(() => {
          this.dtecharts();
          this.dtechartstwo();
          this.dtechartsthree();
        }, 500);
      }
    },
    warning() {
      WarningScheduling().then((res) => {
        this.warninglist = eval(res.d);
        console.log(this.warninglist);
      });
    },
    echartsj() {
      EventsReported({
        StartTime: this.start,
        Endtime: this.end,
        AreaIDs: this.areaid.join(","),
      }).then((res) => {
        for (var i = 0; i < eval(res.d).length; i++) {
          if (parseInt(eval(res.d)[i].STATUS) == 0) {
            this.data1[0].value = parseInt(eval(res.d)[i].SSUM) + parseInt(2);
          }
          if (parseInt(eval(res.d)[i].STATUS) == 1) {
            this.data1[1].value = parseInt(eval(res.d)[i].SSUM) + parseInt(2);
          }
          if (parseInt(eval(res.d)[i].STATUS) == 2) {
            this.data1[2].value = parseInt(eval(res.d)[i].SSUM) + parseInt(2);
          }
        }
        this.Samplingscore();
      });
    },
    getkey(array, keyName) {
      if (Object.prototype.toString.call(array) == "[object Array]") {
        return array.map((item) => item[keyName]);
      }
    },
    close() {
      this.open = false;
    },
    close2() {
      this.open2 = false;
    },
    close3() {
      this.open3 = false;
    },
    close4() {
      this.open4 = false;
    },
    zxclose() {
      this.zxicon = false;
    },
    szyclose() {
      this.panszy = false;
    },
    ywjclose() {
      this.panywj = false;
    },
    lljclose() {
      this.panllj = false;
    },
    jgclose() {
      this.panjg = false;
    },
    warningclose() {
      this.panwaar = false;
    },
    rightnum() {
      HardwareDevices().then((res) => {
        eval(res.d).forEach((item) => {
          if (item.EQUIPMENTTYPE == "水质仪") {
            this.rhtnum1 = item.EQUIPMENT;
          } else if (item.EQUIPMENTTYPE == "液位计") {
            this.rhtnum2 = item.EQUIPMENT;
          } else if (item.EQUIPMENTTYPE == "流量计") {
            this.rhtnum3 = item.EQUIPMENT;
          } else if (item.EQUIPMENTTYPE == "智慧井盖") {
            this.rhtnum4 = item.EQUIPMENT;
          }
        });
      });
    },
    time() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var isnDay = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      );
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      var timestr =
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        h +
        ":" +
        m +
        ":" +
        s +
        " " +
        isnDay[date.getDay()];
      this.timevalue = timestr;
    },

    renyunan() {
      this.compid = [];
      rygj_Company({ COMPANYID: this.Data.companyid.COMPANYID2 }).then(
        (res) => {
          eval(res.d).forEach((item) => {
            this.compid.push(item.COMPANYID);
          });
        }
      );
    },
    online() {
      getAccounts({ companyIDs: this.compid.join(",") }).then((res) => {
        this.lx = 0;
        this.yrw = 0;
        this.wrw = 0;
        this.lxlist = [];
        this.yrwlist = [];
        this.wrwlist = [];
        this.list = res.data;
        this.list.forEach((item) => {
          if (item.online) {
            if (item.signs.length == 0 || item.signs[0].typeCode >= 2) {
              this.wrw++;
              this.wrwlist.push(item);
            } else {
              this.yrw++;
              this.yrwlist.push(item);
            }
          } else {
            this.lx++;
            this.lxlist.push(item);
          }
        });
      });
    },
    initAMap() {
      this.map = new AMap.Map("containermap", {
        zoom: 13, // 级别
        // showLabel: false, //不显示地图文字标记

        mapStyle: "amap://styles/darkblue", // 设置颜色底层
        center: [120.976451, 31.372958], // 中心点坐标
        viewMode: "3D", // 使用3D视图
        pitch: 55,
        resizeEnable: true,
        // features: ["bg", "road", "building", "point"], // 地图要显示的元素
      });
      this.layer = new AMap.LabelsLayer({
        map: this.map,
        zooms: [3, 20],
        zIndex: 1000,
        collision: false,
        allowCollision: false,
        animation: false,
      });
      this.map.add(this.layer);
      this.mapadd();
    },
    mapadd() {
      this.polygonPath = [[], [], [], []];
      AreaSegmentation({ areaName: "'中区1','中区2','南区','北区'" }).then(
        (res) => {
          eval(res.d)
            .filter((v) => v.AREANAME == "中区1")
            .forEach((item) => {
              this.polygonPath[0].push([item.LON, item.LAT]);
            });
          eval(res.d)
            .filter((v) => v.AREANAME == "中区2")
            .forEach((item) => {
              this.polygonPath[1].push([item.LON, item.LAT]);
            });
          eval(res.d)
            .filter((v) => v.AREANAME == "南区")
            .forEach((item) => {
              this.polygonPath[2].push([item.LON, item.LAT]);
            });
          eval(res.d)
            .filter((v) => v.AREANAME == "北区")
            .forEach((item) => {
              this.polygonPath[3].push([item.LON, item.LAT]);
            });
          var colorsPoly = ["#1c7469", "#384272", "#1c567e", "#7e4c0c"];
          for (var i = 0; i < this.polygonPath.length; i++) {
            this.polygon1 = new AMap.Polygon({
              map: this.map,
              zoom: 99,
              path: this.polygonPath[i],
              strokeColor: "#2F54EB", //边框线颜色
              strokeOpacity: 1, //边框线透明度
              strokeWeight: 3, //边框线宽
              fillColor: colorsPoly[3], //填充色
              fillOpacity: 0, //填充透明度
            });
          }
          var Pointarea = [
            {
              Areaname: "中区",
              Lonlat: new AMap.LngLat(120.993248, 31.342268),
            },
            {
              Areaname: "北区",
              Lonlat: new AMap.LngLat(120.962947, 31.394173),
            },
            {
              Areaname: "南区",
              Lonlat: new AMap.LngLat(120.984534, 31.366035),
            },
          ];
          for (var i = 0; i < Pointarea.length; i++) {
            this.textBox_i = new AMap.Text({
              map: this.map,
              offset: new AMap.Pixel(-20, -40),
              style: {
                "background-color": "rgba(245,245,245,0)",
                border: "none",
                padding: "10px 20px",
                "font-size": "20px",
                "font-weight": "bold",
                //'color': '#919fff'
                color: "#fff",
              },
            });
            this.textBox_i.setPosition(Pointarea[i].Lonlat);
            this.textBox_i.setText(Pointarea[i].Areaname);
            this.map.add(this.polygon1);
          }
          this.detail("yrw");
        }
      );
    },
    closeInfoWindow() {
      this.map.clearInfoWindow(this.polygon1);
    },

    detail(val) {
      this.map.setZoomAndCenter(13, [120.976451, 31.372958]);
      this.closeInfoWindowtwo();
      this.map.remove(this.markerlist);
      this.markerlist = [];
      switch (val) {
        case "yrw":
          this.yrwlist.map((val, index) => {
            let icon = new AMap.Icon({
              size: new AMap.Size(40, 40),
              image: this.icon,
            });
            let marker = new AMap.Marker({
              position: new AMap.LngLat(Number(val.lon), Number(val.lat)),

              offset: new AMap.Pixel(-20, -30),
              icon: icon,
              title: val.realName,
            });
            marker.info = val;
            marker.index = index;
            marker.on("click", this.yrwclick);
            this.markerlist.push(marker);
          });
          this.map.add(this.markerlist);

          break;
        case "wrw":
          this.wrwlist.map((val, index) => {
            let icon = new AMap.Icon({
              size: new AMap.Size(40, 40),
              image: this.icon3,
              // imageSize: new AMap.Size(40, 40),
              // imageOffset: new AMap.Pixel(-20, -20),
            });
            let marker = new AMap.Marker({
              position: new AMap.LngLat(Number(val.lon), Number(val.lat)),

              offset: new AMap.Pixel(-20, -30),
              icon: icon,
              title: val.realName,
            });
            marker.info = val;
            marker.index = index;
            marker.on("click", this.wrwclick);
            this.markerlist.push(marker);
          });
          this.map.add(this.markerlist);

          break;
        case "lx":
          this.lxlist.map((val, index) => {
            let icon = new AMap.Icon({
              size: new AMap.Size(40, 40),
              image: this.icon2,
            });
            let marker = new AMap.Marker({
              position: new AMap.LngLat(Number(val.lon), Number(val.lat)),

              offset: new AMap.Pixel(-20, -30),
              icon: icon,
              title: val.realName,
            });
            marker.info = val;
            marker.index = index;
            marker.on("click", this.lxclick);
            this.markerlist.push(marker);
          });
          this.map.add(this.markerlist);

          break;
        case "水质仪":
          this.Icon = require("../assets/szy-icon.png");
          this.Iconwarning = require("../assets/szy-icon-red.png");

          LocationInfo({
            Type: val,
          }).then((res) => {
            eval(res.d).map((value, index) => {
              let icon = new AMap.Icon({
                size: new AMap.Size(50, 50),
                image: value.STATUS == 1 ? this.Icon : this.Iconwarning,
              });
              let marker = new AMap.Marker({
                position: new AMap.LngLat(Number(value.LON), Number(value.LAT)),

                offset: new AMap.Pixel(-20, -30),
                icon: icon,
                title: value.EQUIPMENTNAME,
              });
              marker.info = value;
              marker.index = index;
              marker.on("click", this.szyclick);
              this.markerlist.push(marker);
            });
            this.map.add(this.markerlist);
          });
          break;
        case "液位计":
          this.Icon = require("../assets/ywj-icon.png");
          this.Iconwarning = require("../assets/ywj-icon-red.png");
          LocationInfo({
            Type: val,
          }).then((res) => {
            eval(res.d).map((value, index) => {
              let icon = new AMap.Icon({
                size: new AMap.Size(50, 50),
                image: value.STATUS == 1 ? this.Icon : this.Iconwarning,
              });
              let marker = new AMap.Marker({
                position: new AMap.LngLat(Number(value.LON), Number(value.LAT)),

                offset: new AMap.Pixel(-20, -30),
                icon: icon,
                title: value.EQUIPMENTNAME,
              });
              marker.info = value;
              marker.index = index;
              marker.on("click", this.ywjclick);
              this.markerlist.push(marker);
            });
            this.map.add(this.markerlist);
          });
          break;
        case "流量计":
          this.Icon = require("../assets/llj-icon.png");
          this.Iconwarning = require("../assets/llj-icon-red.png");
          LocationInfo({
            Type: val,
          }).then((res) => {
            eval(res.d).map((value, index) => {
              let icon = new AMap.Icon({
                size: new AMap.Size(50, 50),
                image: value.STATUS == 1 ? this.Icon : this.Iconwarning,
              });
              let marker = new AMap.Marker({
                position: new AMap.LngLat(Number(value.LON), Number(value.LAT)),

                offset: new AMap.Pixel(-20, -30),
                icon: icon,
                title: value.EQUIPMENTNAME,
              });
              marker.info = value;
              marker.index = index;
              marker.on("click", this.lljclick);
              this.markerlist.push(marker);
            });
            this.map.add(this.markerlist);
          });
          break;
        case "智慧井盖":
          this.Icon = require("../assets/zhjg-icon.png");
          this.Iconwarning = require("../assets/zhjg-icon-red.png");
          LocationInfo({
            Type: val,
          }).then((res) => {
            eval(res.d).map((value, index) => {
              let icon = new AMap.Icon({
                size: new AMap.Size(50, 50),
                image: value.STATUS == 1 ? this.Icon : this.Iconwarning,
              });
              let marker = new AMap.Marker({
                position: new AMap.LngLat(Number(value.LON), Number(value.LAT)),

                offset: new AMap.Pixel(-20, -30),
                icon: icon,
                title: value.EQUIPMENTNAME,
              });
              marker.info = value;
              marker.index = index;
              marker.on("click", this.jgclick);
              this.markerlist.push(marker);
            });
            this.map.add(this.markerlist);
          });
          break;
        default:
          this.markerlist = [];
          this.map.add(this.markerlist);

          break;
      }
    },
    yrwclick(val) {
      console.log(val);
      this.yrwarr = [];
      var list = [];
      let e = val.target.info;
      this.srcList = [];
      this.name = e.realName;
      this.pq = e.areaName;
      this.juese = e.userRole;
      this.renwu = e.signs[0].taskName;

      var isnDay = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      );
      this.zxicon = true;
      TaskInfoDialog({
        Uploadperson: e.id,
      }).then((res) => {
        list = eval(res.d);
        this.yrwarr.unshift({
          time: e.signs[e.signs.length - 1].signInTime.split(" ")[1],
          date: e.signs[e.signs.length - 1].signInTime
            .split(" ")[0]
            .substring(5),
          week: isnDay[
            new Date(e.signs[e.signs.length - 1].signInTime).getDay()
          ],
          picture: [
            e.signs[e.signs.length - 1].signInPicture.split(";")[0]
              ? "http://58.210.32.10:9020/picture/" +
                e.signs[e.signs.length - 1].signInPicture.split(";")[0]
              : "",
            e.signs[e.signs.length - 1].signInPicture.split(";")[1]
              ? "http://58.210.32.10:9020/picture/" +
                e.signs[e.signs.length - 1].signInPicture.split(";")[1]
              : "",
          ],
        });

        if (list != null || list != undefined) {
          list.forEach((item) => {
            this.yrwarr.push({
              time: item.UPLOADTIME.split(" ")[1],
              date: item.UPLOADTIME.split(" ")[0]
                .substring(5)
                .replace("/", "-"),
              week: isnDay[new Date(item.UPLOADTIME).getDay()],
              picture: [
                item.FRONTPICTURE.split(";")[0]
                  ? "http://58.210.32.10:9020/picture/" +
                    item.FRONTPICTURE.split(";")[0]
                  : "",
                item.FRONTPICTURE.split(";")[1]
                  ? "http://58.210.32.10:9020/picture/" +
                    item.FRONTPICTURE.split(";")[1]
                  : "",

                item.LATEPICTURE.split(";")[0]
                  ? "http://58.210.32.10:9020/picture/" +
                    item.LATEPICTURE.split(";")[0]
                  : "",

                item.LATEPICTURE.split(";")[1]
                  ? "http://58.210.32.10:9020/picture/" +
                    item.LATEPICTURE.split(";")[1]
                  : "",
                ,
              ],
            });
          });
        }
        if (e.signs[0].signOutTime != null) {
          this.yrwarr.push({
            time: e.signs[0].signOutTime.split(" ")[1],
            date: e.signs[0].signOutTime.split(" ")[0].substring(5),
            week: isnDay[new Date(e.signs[0].signOutTime).getDay()],
            picture: [
              e.signs[0].signOutPicture.split(";")[0]
                ? "http://58.210.32.10:9020/picture/" +
                  e.signs[0].signOutPicture.split(";")[0]
                : "",
              e.signs[0].signOutPicture.split(";")[1]
                ? "http://58.210.32.10:9020/picture/" +
                  e.signs[0].signOutPicture.split(";")[1]
                : "",
            ],
          });
        } else {
          this.yrwarr.push({
            time: "未签退",
          });
        }
        // this.yrwarr.map((item) => {
        //   if (item.picture) {
        //     console.log(item.picture);
        //     item.picture.forEach((val, idx) => {
        //       if (val.indexOf("jpg") != -1) {
        //         this.srcList.push(val);
        //       }
        //       if (val.indexOf("jpg") == -1) {
        //         item.picture.splice(idx, 1);
        //       }
        //     });
        //   }
        // });
      });
    },
    wrwclick(e) {
      let templon = e.target.info.lon;
      let templat = e.target.info.lat;
      this.map.setZoomAndCenter(13, [templon, templat]);
      let title = e.target.info.realName + `<span>/暂无任务</span>`,
        content = [];
      content.push("所属片区：" + e.target.info.areaName);
      content.push("人员权限：" + e.target.info.userRole);
      this.infoWindow = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: this.createInfoWindow(title, content.join("<br/>")),
        position: new AMap.LngLat(templon, templat),
        offset: new AMap.Pixel(50, -25),
      });
      this.infoWindow.open(this.map);
    },
    lxclick(e) {
      let templon = e.target.info.lon;
      let templat = e.target.info.lat;
      this.map.setZoomAndCenter(13, [templon, templat]);
      let title = e.target.info.realName,
        content = [];
      content.push("所属片区：" + e.target.info.areaName);
      content.push("人员权限：" + e.target.info.userRole);
      // latestTime
      let temptime = e.target.info.latestTime;

      let temptimeArr = temptime.split(" ");
      content.push("离线时间：" + temptimeArr[0]);
      content.push(temptimeArr[1]);
      this.infoWindow = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: this.createInfoWindow(title, content.join("<br/>")),
        position: new AMap.LngLat(templon, templat),
        offset: new AMap.Pixel(50, -25),
      });
      this.infoWindow.open(this.map);
    },
    szyclick(val) {
      this.changeval = 0;
      (this.value = this.$moment().format("YYYY/MM/DD ")),
        (this.llid = val.target.info.EQUIPMENTID);
      SZYInfoDialog({
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        let key = eval(res.d);
        this.cahngeleft = [
          {
            name: "设备名称",
            value: key[0].CAPTION,
          },
          {
            name: "设备类型",
            value: key[0].CLIENTTYPE,
          },
          {
            name: "设备状态",
            value: key[0].STATUS == 1 ? "正常" : "异常",
          },
          {
            name: "电量",
            value: key[0].QUANTITY,
          },
        ];
        this.cahngeright = [
          {
            name: "设备组名称",
            value: key[0].GROUPNAME,
          },
          {
            name: "硬件版本号",
            value: key[0].VERSION,
          },
          {
            name: "安装时间",
            value: key[0].INSTALLATIONTIME,
          },
          {
            name: "维保日期",
            value: key[0].MAINTENANCEDATE,
          },
        ];
      });
      SZYDataDialog({
        StartTime: this.value1,
        Endtime: this.value1,
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        this.echartlist = eval(res.d);
      });
      this.panszy = true;
    },
    ywjclick(val) {
      (this.value = this.$moment().format("YYYY/MM/DD ")), (this.changeval = 0);
      this.llid = val.target.info.EQUIPMENTID;
      YWJInfoDialog({
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        let key = eval(res.d);
        console.log(key);
        this.cahngeleft = [
          {
            name: "设备编号",
            value: key[0].EQUIPID,
          },
          {
            name: "安装井深",
            value: key[0].NODEDEPTH + "米",
          },
          {
            name: "实时液位",
            value: key[0].WATERLEVEL + "米",
          },
          {
            name: "检测时间",
            value: key[0].SAMPLETIME,
          },
        ];
        this.cahngeright = [
          {
            name: "设备名称",
            value: key[0].PROJECTNAME,
          },
          {
            name: "报警液位",
            value: key[0].ALARMVALU ? key[0].ALARMVALU + "米" : "0米",
          },
          {
            name: "预警液位",
            value: key[0].WARNVALUE ? key[0].WARNVALUE + "米" : "0米",
          },
        ];
      });
      YWJDataDialog({
        StartTime: this.value1,
        Endtime: this.value1,
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        this.echartlisttwo = eval(res.d);
      });
      this.panywj = true;
    },
    lljclick(val) {
      (this.value = this.$moment().format("YYYY/MM/DD ")), (this.changeval = 0);
      this.llid = val.target.info.EQUIPMENTID;
      LLJInfoDialog({
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        let key = eval(res.d);
        console.log(key);
        this.cahngeleft = [
          {
            name: "设备编号",
            value: key[0].EQUIPMENTID,
          },
          {
            name: "流速",
            value: key[0].VELOCITY + "(m/s)",
          },
          {
            name: "水位",
            value: key[0].WATER_LEVEL + "(m)",
          },
          {
            name: "电压",
            value: key[0].VOLTAGE + "(v)",
          },
        ];
        this.cahngeright = [
          {
            name: "设备名称",
            value: key[0].EQUIPMENTNAME,
          },
          {
            name: "流量",
            value: key[0].FLOW ? key[0].FLOW + "(m³/h)" : "0(m³/h)",
          },
          {
            name: "流量累计值",
            value: key[0].SUM,
          },
          {
            name: "更新时间",
            value: key[0].CREATE_TIME,
          },
        ];
      });
      LLJDataDialog({
        StartTime: this.value1,
        Endtime: this.value1,
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        this.echartlistthree = eval(res.d);
      });
      this.panllj = true;
    },
    jgclick(val) {
      this.changeval = 0;

      console.log(val.target.info);
      ZHJGInfoDialog({
        Equipmentid: val.target.info.EQUIPMENTID,
      }).then((res) => {
        let key = eval(res.d);
        console.log(key);
        this.cahngeleft = [
          {
            name: "设备编号",
            value: key[0].IMEI,
          },
          {
            name: "水浸状态",
            value: key[0].WATER_LEVEL_STATE == "1" ? "浸水" : "正常",
          },
          {
            name: "打开状态",
            value:
              key[0].MANHOLE_COVER_POSITION_STATE == "0" ? "未打开" : "已打开",
          },
          {
            name: "报警状态",
            value: key[0].SENSOR_STATUS == 0 ? "正常" : "报警",
          },
          {
            name: "气体类型",
            value: key[0].VIB_FREQ,
          },
        ];
        this.cahngeright = [
          {
            name: "温度",
            value: key[0].TEMPERATURE + "(℃)",
          },
          {
            name: "电压",
            value: key[0].BATTERY_VOLTAGE
              ? Number(key[0].BATTERY_VOLTAGE).toFixed(2) + "(V)"
              : "0(V)",
          },
          {
            name: "倾角",
            value: key[0].WARNVALUE ? key[0].WARNVALUE + "米" : "0米",
          },
          {
            name: "气体浓度",
            value: key[0].GAS_TYPE,
          },
          {
            name: "震动次数",
            value: key[0].GAS_CONCENTRATION,
          },
        ];
        this.panjg = true;
      });
    },
    detail2(val) {
      RepairMeteringDialog({
        Endtime: this.end,
        StartTime: this.start,
        Equipmentid: val,
      }).then((res) => {
        this.tableData2 = eval(res.d);

        if (this.tableData2 != undefined) {
          this.open2 = true;
        } else {
          this.$message({
            message: "暂无数据",
            type: "warning",
          });
        }
      });
    },
    detail3(val) {
      XCMeteringDialog({
        Endtime: this.end,
        StartTime: this.start,
        Equipmentid: val,
      }).then((res) => {
        this.tableData3 = eval(res.d);
        console.log(this.tableData3);
        if (this.tableData3 != undefined) {
          this.open3 = true;
        } else {
          this.$message({
            message: "暂无数据",
            type: "warning",
          });
        }
      });
    },
    list1() {
      MaintenancePlan({
        Endtime: this.end,
        StartTime: this.start,
      }).then((res) => {
        this.arr1 = eval(res.d);
        let list = this.arr1.filter((val) => {
          return val.AREANAME.indexOf("区") != -1;
        });
        list.forEach((item) => {
          item.PIPENUM = (parseInt(item.PIPENUM) / 1000).toFixed(2);
        });
        list.sort((a, b) => {
          const arr = ["中区", "南区", "北区"];
          return arr.indexOf(a.AREANAME) - arr.indexOf(b.AREANAME);
        });
        console.log(list);
        this.list1chart(list);
      });
    },
    list2() {
      RepairMeteringLog({
        StartTime: this.start,
        Endtime: this.end,
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.AREANAME == "中区") {
            this.list2a = item.TASKNUM;
          } else if (item.AREANAME == "南区") {
            this.list2b = item.TASKNUM;
          } else if (item.AREANAME == "北区") {
            this.list2c = item.TASKNUM;
          }
        });
      });
    },
    list3() {
      InspectMeasurementLog({
        StartTime: this.start,
        Endtime: this.end,
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.AREANAME == "中区") {
            this.list3a = item.STREETNUM;
          } else if (item.AREANAME == "南区") {
            this.list3b = item.STREETNUM;
          } else if (item.AREANAME == "北区") {
            this.list3c = item.STREETNUM;
          }
        });
      });
    },

    lft(val) {
      this.open = true;
      YHPipeDialog({
        Endtime: this.end,
        StartTime: this.start,
        Equipmentid: val,
      }).then((res) => {
        this.tableData = eval(res.d);
      });
    },
    rft(val) {
      this.open4 = true;
      EventsReportedDialog({
        Type: val == "待处理" ? "0" : val == "进行中" ? "1" : "2",
      }).then((res) => {
        this.tableData4 = eval(res.d);
      });
    },
    list1chart(data) {
      echarts.init(this.$refs.leftechart).dispose();
      var myChart1 = echarts.init(this.$refs.leftechart);
      var color1 = ["#6DCDE6", "#4366f3", "#8651F4", "#E23AF5"];
      var color0 = ["#38A0D6", "#1D43F3", "#4721CA", "#9837DD"];

      var rgbacolor1 = [
        "rgba(109,205,230,0.2)",
        "rgba(29,67,243,0.2)",
        "rgba(134,81,244,0.2)",
        "rgba(226,58,245,0.2)",
      ];
      var rgbacolor0 = [
        "rgba(109,205,230,0.4)",
        "rgba(29,67,243,0.4)",
        "rgba(134,81,244,0.4)",
        "rgba(226,58,245,0.4)",
      ];
      var maxpipe = 0;
      var bardata1 = [];
      var bardata2 = [];
      var maxpipe_arr = [];

      var data2 = [];
      for (var i = 0; i < data.length; i++) {
        if (parseFloat(data[i].PIPENUM) > maxpipe) {
          maxpipe = data[i].PIPENUM;
        }
      }
      if (maxpipe == 0) {
        maxpipe = 1;
      } else {
        maxpipe = parseFloat(maxpipe) + parseFloat(maxpipe) * 0.3;
      }
      for (var i = 0; i < data.length; i++) {
        bardata1.push({
          name: data[i].AREANAME,
          value: data[i].PIPENUM,
          //"trueVal": "98",
          itemStyle: {
            normal: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: color0[i],
                  },
                  {
                    offset: 1,
                    color: color1[i],
                  },
                ],
              },
            },
          },
        });

        bardata2.push({
          name: data[i].AREANAME,
          value: maxpipe,
          //"trueVal": "98",
          itemStyle: {
            normal: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: rgbacolor1[i],
                  },
                  {
                    offset: 1,
                    color: rgbacolor1[i],
                  },
                ],
              },
            },
          },
        });

        if (parseFloat(data[i].PIPENUM) != 0) {
          data2.push({
            name: data[i].AREANAME,
            value: data[i].PIPENUM,
          });
        } else {
          data2.push({
            name: data[i].AREANAME,
            value: "",
          });
        }

        maxpipe_arr.push({
          name: data[i].AREANAME,
          value: maxpipe,
        });
      }

      console.log(data2, bardata2, bardata1);
      var option = {
        textStyle: {
          color: "#c0c3cd",
          fontSize: 14,
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {
              backgroundColor: "#031245",
            },
            restore: {},
          },
          iconStyle: {
            borderColor: "#c0c3cd",
          },
        },
        legend: {
          top: 10,
          itemWidth: 8,
          itemHeight: 8,
          icon: "circle",
          left: "center",
          padding: 0,
          textStyle: {
            color: "#c0c3cd",
            fontSize: 14,
            padding: [2, 0, 0, 0],
          },
        },
        color: [
          "#63caff",
          "#49beff",
          "#03387a",
          "#03387a",
          "#03387a",
          "#6c93ee",
        ],
        grid: {
          containLabel: true,
          left: "2%",
          right: "2%",
          bottom: "2%",
          top: "10%",
        },
        xAxis: {
          nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 12,
          },
          axisLabel: {
            color: "#28f6fb",
            fontSize: 12,
            interval: 0,
          },
          axisTick: {
            lineStyle: {
              color: "#384267",
              width: 1,
            },
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#384267",
              width: 1,
              type: "dashed",
            },
            show: false,
          },
          data: ["中区", "南区", "北区"],
          type: "category",
        },
        yAxis: {
          nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 15,
          },
          axisLabel: {
            color: "#c0c3cd",
            fontSize: 15,
            show: false,
          },
          axisTick: {
            lineStyle: {
              color: "#384267",
              width: 1,
            },
            show: false,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#384267",
              type: "dashed",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#384267",
              width: 1,
              type: "dashed",
            },
            show: false,
          },
          name: "",
        },
        series: [
          {
            data: bardata1,
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 25,

            label: {
              show: true,
              position: "top",

              formatter: function (e) {
                return "{a" + e.dataIndex + "|" + e.value + "}";
              },
              rich: {
                a0: {
                  color: color0[0],
                  fontSize: 12,
                  fontWeight: 1000,
                },
                a1: {
                  color: color0[1],
                  fontSize: 12,
                  fontWeight: 1000,
                },
                a2: {
                  color: color1[2],
                  fontSize: 12,
                  fontWeight: 1000,
                },
                a3: {
                  color: color0[3],
                  fontSize: 12,
                  fontWeight: 1000,
                },
              },
              offset: [0, -5],
            },
          },
          {
            data: [0, 0, 0, 0],
            type: "pictorialBar",
            barMaxWidth: "25",
            symbol: "diamond",
            zlevel: 2,
            symbolOffset: [0, "50%"],
            symbolSize: [25, 10],
            itemStyle: {
              normal: {
                color: function (params) {
                  return color1[params.dataIndex];
                },
              },
            },
          },
          {
            data: data2,
            type: "pictorialBar",
            barMaxWidth: "25",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [25, 10],
            zlevel: 2,
            itemStyle: {
              normal: {
                color: function (params) {
                  return color1[params.dataIndex];
                },
              },
            },
          },
          {
            data: bardata2,
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 25,
            barGap: "-100%",
            zlevel: -1,
          },
          {
            data: maxpipe_arr,
            type: "pictorialBar",
            barMaxWidth: "25",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [25, 10],
            zlevel: -1,
            itemStyle: {
              normal: {
                color: function (params) {
                  return rgbacolor0[params.dataIndex];
                },
              },
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          show: false,
        },
      };
      myChart1.setOption(option);
      var that = this;
      myChart1.on("click", function (params) {
        let name = params.name;
        that.lft(name);
      });
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },
    Samplingscore() {
      echarts.init(this.$refs.score).dispose();
      var that = this;
      var myChart1 = echarts.init(this.$refs.score);
      var sColor = ["#5FCC35", "#EBC994", "#61DADF"];
      var colors = [
        {
          type: "linear",
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#597A47",
            },
            {
              offset: 0.5,
              color: "#5FCC35",
            },
            {
              offset: 0.5,
              color: "#5B9243",
            },
          ],
        },

        {
          type: "linear",
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#EBC994",
            },
            {
              offset: 0.5,
              color: "#F6EFE3",
            },
            {
              offset: 0.5,
              color: "#EED4AB",
            },
          ],
        },
        {
          type: "linear",
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#3C9298",
            },
            {
              offset: 0.5,
              color: "#61DADF",
            },
            {
              offset: 0.5,
              color: "#50BFC7",
            },
          ],
        },
      ];
      const nums = this.data1.map((v) => v.value);
      const max = Math.max(...nums);
      var option = {
        grid: {
          top: "10%",
          bottom: "50%",
        },
        xAxis: {
          data: this.getkey(this.data1, "name"),
          axisLine: {
            show: false,
            lineStyle: {
              color: "#3eb2e8",
            },
          },
          axisTick: {
            show: false,
          },
          //坐标值标注
          axisLabel: {
            show: true,
            textStyle: {
              color: "#61DADF",
              fontSize: 12,
            },
            margin: 60,
          },
        },
        yAxis: {
          //坐标轴
          show: false,
          axisLine: {
            show: false,
          },
          //坐标值标注
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          //分格线
          splitLine: {
            lineStyle: {
              color: "#4784e8",
            },
          },
        },
        series: [
          {
            name: "hill",
            type: "pictorialBar",
            barCategoryGap: 15,
            symbol: "triangle",
            symbolSize: [10, 10],
            itemStyle: {
              normal: {
                color: function (params) {
                  return colors[params.dataIndex % 3];
                },
              },
            },
            label: {
              show: true,
              position: "top",
              align: "center",
              formatter: function (e) {
                return "{a" + e.dataIndex + "|" + parseInt(e.value - 1) + "}";
              },
              rich: {
                a0: {
                  color: sColor[0],
                  fontSize: 15,
                },
                a1: {
                  color: sColor[1],
                  fontSize: 15,
                },
                a2: {
                  color: sColor[2],
                  fontSize: 15,
                  height: -30,
                },
              },
              offset: [0, -2],
            },
            data: this.getkey(this.data1, "value"),
            z: 10,
          },
          {
            z: 2,
            type: "pictorialBar",
            data: [max, max, max],
            symbol: "triangle",
            symbolOffset: [0, "20%"],
            symbolSize: function (params, idx) {
              let I = (that.data1[idx.dataIndex].value / max) * 100;
              return [50, I < 30 ? 30 + "%" : I + "%"];
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return colors[params.dataIndex % 3];
                },
              },
            },
          },
          {
            z: 3,
            name: "glyph",
            type: "pictorialBar",
            barGap: "-100%",
            symbolPosition: "end",
            symbolSize: 50,
            symbolOffset: [0, "10%"],
          },
        ],
      };
      myChart1.setOption(option);
      myChart1.on("click", function (params) {
        var name = params.name;
        that.rft(name);
      });
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },
    createInfoWindow(title, content) {
      let info = document.createElement("div");
      info.className = "custom-info input-card content-window-card";

      //可以通过下面的方式修改自定义窗体的宽高
      // info.style.border = "2px solid #3590C8";
      info.style.borderBottom = "none";
      info.style.color = "#FFFFFF";
      // 定义顶部标题
      let top = document.createElement("div");
      let titleD = document.createElement("div");
      let closeX = document.createElement("img");
      top.className = "info-top";
      titleD.innerHTML = title;
      closeX.src = require("../assets/closepop.png");
      closeX.onclick = this.closeInfoWindowtwo;

      top.appendChild(titleD);
      top.appendChild(closeX);
      info.appendChild(top);

      // 定义中部内容
      let middle = document.createElement("div");
      middle.className = "info-middle";
      middle.style.backgroundColor = "#0C1F7EC4";
      middle.innerHTML = content;
      info.appendChild(middle);

      // 定义任务内容
      // let task = document.createElement("div");
      // task.className = "info-task";
      // task.innerHTML = "暂无任务";
      // task.style.textAlign = "right";
      // task.style.height = "22px";
      // task.style.lineHeight = "19px";
      // task.style.backgroundColor = "#0c1f7ec4";
      // task.style.fontSize = "12px";
      // task.style.fontWeight = "300";
      // task.style.borderTop = "1px dashed #3590c8";
      // task.style.borderLeft = "2px solid #3590c8";
      // task.style.borderRight = "2px solid #3590c8";
      // info.appendChild(task);

      // 定义底部内容
      let bottom = document.createElement("div");
      bottom.className = "info-bottom";
      bottom.style.position = "relative";
      bottom.style.top = "-2px";
      bottom.style.margin = "0 auto";
      let sharp = document.createElement("img");
      sharp.src = require("../assets/dt_tc_icon.png");
      sharp.style.width = "100%";
      bottom.appendChild(sharp);
      info.appendChild(bottom);
      return info;
    },
    // 关闭信息窗体

    closeInfoWindowtwo() {
      this.map.clearInfoWindow();
    },
  },
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100vh;
  position: relative;
}
#containermap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#containermap >>> .amap-logo,
#containermap >>> .amap-copyright {
  display: none !important;
}
header {
  width: 100%;
  height: 13vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/img/head_img.png") no-repeat;
  background-size: 100%;
  z-index: 20;
}
.hearder-right,
.hearder-left {
  width: 15vw;
  height: 5vh;
  line-height: 5vh;
  font-size: 1vw;
  z-index: 99;
  color: #fff;
}
.hearder-left {
  position: absolute;
  top: 0;
  left: 0;
}
.hearder-right {
  font-size: 0.8vw;
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 5vw;
}
.hearder-right ul {
  display: flex;
  justify-content: space-around;
}
.hearder-right ul li {
  cursor: pointer;
  position: relative;
}
.hearder-right ul li::after {
  display: inline-block;
  content: "";
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  position: absolute;
  left: -1vw;
  top: 50%;
  transform: translateY(-50%);
}
.hearder-right ul li:nth-child(1)::after {
  background: #6dd400;
}
.hearder-right ul li:nth-child(2)::after {
  background: #f7b500;
}
.hearder-right ul li:nth-child(3)::after {
  background: #c6c6c6;
}
.mapleft,
.mapright {
  width: 18vw;
  height: 95vh;
  position: absolute;
  top: 5vh;
  background: #000001;
  padding: 0 1vw;
}
.mapleft {
  left: 0;
}
.mapright {
  right: 0;
}
.title_bg {
  width: 100%;
  height: 4vh;
  background: url("../assets/img/title_bg.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 4vh;
  text-align: left;
  color: #0090c8;
  font-size: 0.9vw;
  font-weight: bolder;
  position: relative;
}
.name {
  position: absolute;
  top: 0.5vh;
}
.nametwo {
  position: absolute;
  top: 0.5vh;
  right: 0.5vw;
}
.left-cont {
  width: 100%;
  height: 25vh;
}
.left-title {
  display: flex;
  color: #07b4f7;
  font-size: 0.5vw;
  height: 3vh;
  line-height: 3vh;
  flex-direction: row;
  justify-content: space-between;
}
.left-title span:nth-child(2) {
  font-size: 0.8vw;
}
.left-titleright {
  display: flex;
  justify-content: flex-end;
  height: 3vh;
}
.left-title span:nth-child(2) {
  margin-right: 8.5vw;
}
.leftechart {
  width: 100%;
  height: 23vh;
}
.zhe {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(57, 52, 53, 0.5);
  z-index: 99;
}
.open-map {
  width: 40vw;
  height: 55vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("../assets/img/dialog_bg.png") no-repeat;
  background-size: 100% 100%;
}
.open-tit {
  height: 15%;
  color: #fff;
  display: flex;
  font-size: 1.5vw;
  align-items: center;
  position: relative;
  padding: 1vw 1vw 0 1vw;
}
.open-tit span {
  margin-left: 0.5vw;
  font-weight: bolder;
}
.open-tit img {
  width: 2vw;
}

.el-icon-close {
  color: #fff;
  position: absolute;
  right: 0.5vw;
  top: 1vh;
  cursor: pointer;
  font-size: 1.5vw;
}
.el-icon-close:hover {
  color: #1186d3;
}
.open-cont {
  width: 95%;
  height: 70%;
  padding: 0 1vw 0 1vw;
}
.open-tt {
  color: #fff;
  line-height: 5vh;
  background: #2c5598;
  height: 5vh;
  font-weight: bolder;
  color: #0096ff;
}
.open-tt ul {
  display: flex;
}
.open-tt ul li,
.temp-list ul li span {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.open-tt ul li {
  text-align: left;
}
.open-tt ul li:nth-child(1),
.temp-list ul li span:nth-child(1) {
  flex: 1;
  padding-left: 1vw;
}
.temp-list ul li {
  color: #fff;
  display: flex;
  height: 5vh;
  line-height: 5vh;
  background: #1c4387;
  text-align: left;
}

.temp-list ul li:nth-child(2n) {
  background: #1e3e7c;
}
.temp-list ul li:hover {
  background: #04286d;
}
.temp-list {
  width: 100%;
  height: 100%;
  overflow: auto;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
  /* background-color: #f5f5f5; */
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
  /* background-color: #f5f5f5; */
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: inset;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: #fff;
}
.title_bg2 {
  margin-top: 2vh;
}
.title_bg3 {
  margin-top: 0vh;
}
.lefttwo {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.contkey {
  width: 30%;
  height: 14vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.contkey:hover .lft,
.right-btm div:hover,
.right-cenall:hover,
.warning .warning-lft ul li:hover span {
  transform: scale(1.2);
}
.warning .warning-rit:hover {
  transform: scale(1.1);
}
.lefttwo .lft {
  width: 90%;
  height: 10vh;
  background-repeat: no-repeat;
  background-size: 100%;
  transition: all 0.5s;
  line-height: 9vh;
  font-size: 1.5vw;
}
.lefttwo .lft1 {
  background-image: url("../assets/img/qxjl_bg1.png");
  color: rgba(68, 215, 182, 1);
}
.lefttwo .lft2 {
  background-image: url("../assets/img/qxjl_bg2.png");
  color: rgba(0, 145, 255, 1);
}
.lefttwo .lft3 {
  background-image: url("../assets/img/qxjl_bg3.png");
  color: rgba(98, 54, 255, 1);
}
.leftname1 {
  height: 3vh;
  line-height: 3vh;
  width: 4vw;
  font-size: 0.8vw;
  box-shadow: inset 0px -2px 5px 0px rgb(68 215 182 / 60%),
    inset -2px 0px 5px 0px rgb(68 215 182 / 60%),
    inset 2px 0px 5px 0px rgb(68 215 182 / 60%),
    inset 0px 2px 5px 0px rgb(68 215 182 / 60%);
}
.leftname2 {
  width: 4vw;
  height: 3vh;
  line-height: 3vh;

  font-size: 0.8vw;
  box-shadow: inset 0px -2px 5px 0px rgb(0 145 255 / 60%),
    inset -2px 0px 5px 0px rgb(0 145 255 / 60%),
    inset 2px 0px 5px 0px rgb(0 145 255 / 60%),
    inset 0px 2px 5px 0px rgb(0 145 255 / 60%);
}
.leftname3 {
  width: 4vw;

  height: 3vh;
  line-height: 3vh;
  font-size: 0.8vw;
  box-shadow: inset 0px -2px 5px 0px rgb(98 54 255 / 60%),
    inset -2px 0px 5px 0px rgb(98 54 255 / 60%),
    inset 2px 0px 5px 0px rgb(98 54 255 / 60%),
    inset 0px 2px 5px 0px rgb(98 54 255 / 60%);
}
.right-btm {
  background: url("../assets/img/xcjl_bg.png") no-repeat;
  background-size: 90%;
  background-position: center 8vh;
  width: 100%;
  height: 20vh;
  color: #fff;
  font-size: 1vw;
}
.right-btm div {
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;
}
.bym {
  background-repeat: no-repeat;
}
.bym1 {
  background: url("../assets/img/xcjl1.png");
}
.bym2 {
  background: url("../assets/img/xcjl2.png");
}
.bym3 {
  background: url("../assets/img/xcjl3.png");
}
.right-btm {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-btm div {
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 1vw;
}
.list_item1 {
  width: 4vw !important;
  background-image: url("../assets/img/xcjl1.png");
}
.list_item2 {
  background-image: url("../assets/img/xcjl2.png");
  width: 4vw !important;
}
.list_item3 {
  background-image: url("../assets/img/xcjl3.png");
  width: 4vw !important;
}
.title_bgright {
  background-image: url("../assets/img/title_bg_right.png");
}
.right-btmll {
  width: 100%;
  height: 20vh;
  background: url("../assets/img/CJDF.png") no-repeat;
  background-position: center 8vh;
  background-size: 90%;
}

/* /xcjl_bg */
.title_bgright2 {
  margin-top: 1vh;
}
.title_bgright3 {
  margin-top: 1vh;
}
.right-cen {
  width: 100%;
  height: 25vh;
  background: url("../assets/img/yjsb_bg.png") no-repeat;
  background-position: center;
  background-size: 80%;
  display: flex;
  flex-wrap: wrap;
}
.right-cenall {
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: all 1s;
  cursor: pointer;
}
.right-cenall img {
  width: 35%;
}
.right-cenall div {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.right-cenall div span:nth-child(1) {
  color: #fff;
  font-size: 0.8vw;
}
.szy,
.ywj,
.llj,
.zhjg {
  font-size: 1.8vw;
  font-weight: 100;
}
.szy {
  color: #6dfafb;
}
.ywj {
  color: #508a8b;
}
.llj {
  color: #b84be0;
}
.zhjg {
  color: #326ff6;
}
.all-bym {
  width: 100%;
  height: 20vh;
}
.all-bym img {
  width: 8vw;
  height: 100%;
}

/* //infowindo
 */
.content-window-card {
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
}
::v-deep .content-window-card {
  text-align: left;
  width: 12vw;
}
.custom-info {
  color: #fff;
  /* border: 2px solid #3590c8; */
}

::v-deep div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #0c1f7ec4;
  border: 2px solid #3590c8;
  border-bottom: 1px solid #3590c8;
}

::v-deep div.info-top div {
  display: inline-block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

::v-deep div.info-top img {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 11px;
  height: 11px;
  transition-duration: 0.25s;
  cursor: pointer;
}

div.info-top img:hover {
  box-shadow: 0px 0px 5px #000;
}

::v-deep div.info-middle {
  font-weight: 300;
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
  border-left: 2px solid #3590c8;
  border-right: 2px solid #3590c8;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
}

div.info-bottom img {
  position: relative;
  z-index: 104;
}

.info-middle img {
  float: left;
  margin-right: 6px;
}
.zxicon {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35vw;
  height: 70vh;
  background: url("../assets/img/dialog_bg.png") no-repeat;
  background-size: 100% 100%;
}
.zxclose {
  cursor: pointer;
  float: right;
  font-size: 1.2vw;
}
.zxclose:hover {
  color: #1186d3;
}
.zx-tit {
  height: 4vh;
  line-height: 4vh;
  width: 100%;
  margin-top: 3.5vh;
  color: #43dff9;
  font-size: 1vw;
  background: #2d81c6;
}
.zx-tittwo {
  height: 4vh;
  line-height: 4vh;
  width: 100%;
  margin-top: 0vh;
  color: #fff;
  background: #385ea6;
}
.zx-tittwo ul {
  display: flex;
}
.zx-tittwo li {
  width: 9vw;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8vw;
  white-space: nowrap;
}
.zx-tit ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  overflow: hidden;
}
.zx-tit ul li {
  display: flex;
  align-items: center;
}
.zx-tit ul li span {
  width: 5vw;
}
.zx-num {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translate(-38%, -50%);
}
.zx-content {
  width: 100%;
  height: 58vh;
  position: relative;
  overflow-y: auto;
}
.zx-all {
  display: flex;

  align-items: center;
}
.work {
  position: absolute;
  top: 0;
  left: 6.52vw;
  width: 2vw;
}

.zx-left {
  position: relative;

  width: 27%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3vh;
}
.zx-left img {
  width: 4vw;
  margin-right: 1vw;
}
.zx-left::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7vw;
  width: 1vw;
  height: 1vw;
  background: #25d6da;
  border-radius: 50%;
}
.zx-left::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7.5vw;
  width: 0.1vw;
  height: 125%;
  background: #25d6da;
}
.zx-right {
  width: 70%;
  height: 14vh;
  display: flex;
  color: #b6b9bf;
  font-size: 1.3vw;
  align-items: center;
  background: #345492;
  border: 1px solid #2aabd2;
  text-align: left;
}

.zx-right span:nth-child(1) {
  margin: 2vh 0;
}
.zx-right p {
  font-size: 1vw;
}
.zx-right p span:nth-child(1) {
  margin-right: 0.5vw;
}
.zx-r {
  width: 35%;
  height: 100%;
  display: flex;
  padding-left: 0.5vw;
  flex-direction: column;
  align-items: flex-start;
}
.zx-l {
  width: 55%;
  height: 100%;
  white-space: nowrap;
  line-height: 24vh;
  overflow: hidden;
  position: relative;
}
.el-icon-arrow-left,
.el-icon-arrow-right {
  cursor: pointer;
  position: absolute;
  color: #fff;
  top: 50%;
  z-index: 99;
  transform: translateY(-50%);
}
.el-icon-arrow-left {
  left: 0vw;
}
.el-icon-arrow-right {
  right: -0.1vw;
}
.zx-l .img:nth-child(1) {
  margin-left: 1vw;
}
.zx-l .img {
  width: 5vw;
  margin: 0 0.6vw;
  height: 11vh;
  cursor: pointer;
  display: inline-block;
  transition: all 0.5s;
  /* transform: translateX(-117px); */
}
.warning {
  width: 100%;
  height: 25vh;
  display: flex;
}
.warning .warning-lft {
  width: 60%;
  height: 100%;
  overflow-y: auto;
}
.warning .warning-lft::-webkit-scrollbar {
  display: none;
}
.warning .warning-rit {
  width: 40%;
  height: 100%;
}
.warning .warning-lft ul {
  display: flex;
  flex-direction: column;
}
.warning .warning-lft ul li {
  margin: 0.5vh 0;
  height: 4vh;
  line-height: 4vh;
  display: flex;
  background: linear-gradient(
    to left,
    rgba(3, 11, 63, 0.5),
    rgba(221, 69, 70, 0.5)
  );
  color: #f1e7e7;
  font-size: 0.5vw;
  cursor: pointer;
  border-left: 1px solid #fff;
  width: 90%;
  position: relative;
  padding-left: 0.5vw;
}
.warning .warning-lft ul li::after {
  content: "";
  width: 1.5vw;
  height: 1.5vw;
  position: absolute;
  z-index: 99;
  border-radius: 50%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: url("http://58.210.32.10:9020/KSYY/dist/img/YJDD_icon.png")
    no-repeat;
  background-size: 100% 100%;
}
.warning .warning-lft ul li::before {
  content: "";
  width: 1px;
  height: 150%;
  position: absolute;
  z-index: 99;
  right: 0.7vw;
  top: 0;
  background: rgba(252, 254, 255, 0.2);
}
.warning .warning-lft ul li span {
  width: 5vw;
  overflow: hidden;
  text-overflow: ellipsis;
}
.warning .warning-rit {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1vh;
  cursor: pointer;
  transition: all 0.5s;
}
.warning-rit img {
  animation: add 1s infinite linear;
}
@keyframes add {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
.warning .warning-rit div {
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bolder;
}
.yc {
  color: rgb(255, 33, 80);
}
.allow {
  width: 90%;
  height: 100%;
  padding: 2vw;
}
.s-title {
  margin-top: 1vh;
  font-size: 1.2vw;
}
.s-title span {
  margin-left: 0.5vw;
}
.ss-cont {
  width: 100%;
  height: 75%;
}
.s-title,
.ss-content-tit {
  width: 100%;

  color: #fff;
  display: flex;
  align-items: center;
}
.ss-content-tit img {
  width: 1vw;
}
.ss-content-tit {
  height: 4vh;
  margin: 1.5vh 0;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  color: #197bcf;
}
.ss-content-tit span {
  width: 6vw;
  height: 100%;
  margin-right: 0.5vw;
  align-items: center;
  justify-content: space-around;
  display: flex;
  border-radius: 4px 4px 0px 0px;
}
.ss-content-tit span:hover {
  background: #fff;
}
.s-title img {
  width: 2vw;
}
.listall {
  width: 100%;
  height: 100%;
  display: flex;
  color: #efe6e6;
}
.listall div {
  width: 50%;
  height: 100%;
}
.listall div ul {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 0.8vw;
  flex-direction: column;
  justify-content: space-evenly;
}
.listall div ul li {
  width: 100%;
  display: flex;
}
.listall div ul li span {
  width: 50%;
  text-align: left;
}
.listallechart {
  width: 100%;
  text-align: left;
  color: #fff;
}
.ech {
  width: 100%;
  height: 30vh;
}
.zx-l >>> .el-carousel__container {
  height: 100%;
}
.open-two {
  width: 25vw;
  height: 45vh;
  top: 45%;
}
.yjdd {
  color: #fff;
  font-size: 0.8vw;
}
.yjdd ul li span:nth-child(2) {
  margin: 0 0.8vw;
}
.yjdd ul li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 4vh;
  list-style: 4vh;
}
.select >>> .el-input__inner {
  background: transparent;
  border: none;
  color: #fff;
}
.warn-cont {
  padding-top: 2vh;
}
.btm-warn {
  float: right;
}
.btm-warn >>> .el-button--small {
  padding: 9px 9px;
}
.btm-warn button:nth-child(1) {
  background-color: transparent;
}
.btm-warn button {
  width: 3vw;
  color: #fff;
}
.el-date-editor.el-input {
  width: 140px;
}
.el-select-dropdown__item {
  background: #04286d;
  border-color: #04286d;
  color: #fff;
}

.el-select-dropdown__item:hover {
  background: transparent;
  color: #072f7e;
}
/* .el-date-picker__header >>> .el-icon-arrow-left:before {
  margin: 0 0.5vw;
} */
input[type="date"] {
  border: none;
  color: #fff;
  outline: none;
  background: transparent;
}
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>