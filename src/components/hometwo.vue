<template>
  <div id="hometwo">
    <!-- {{ areaID }} -->
    <main>
      <div class="home one">
        <div class="title">
          <span>管道</span>
          <span>本周</span>
        </div>
        <div class="contentnum"></div>
        <div class="bottom">
          <div>
            <img src="../assets/img/qxgcl_icon_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_5.png" alt="" />
            <span class="bottom-num">{{ gd1 }}</span>
            <span>井室</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_2_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_2_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_5.png" alt="" />
            <span class="bottom-num">{{ gd2 }}</span>
            <span>井盖</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_1_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_1_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_5.png" alt="" />
            <span class="bottom-num">{{ gd3 }}</span>
            <span>化粪池</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_3_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_3_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_5.png" alt="" />
            <span class="bottom-num">{{ gd4 }}</span>
            <span>隔油池</span>
          </div>
        </div>
        <div class="contentnumweek">{{ gd }}</div>
      </div>
      <div class="home two">
        <div class="title">
          <span>管道</span>
          <span>本月</span>
        </div>
        <div class="contentnum"></div>
        <div class="bottom">
          <div>
            <img src="../assets/img/qxgcl_icon_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_5.png" alt="" />
            <span class="bottom-num">{{ gdm1 }}</span>
            <span>井室</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_2_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_2_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_5.png" alt="" />
            <span class="bottom-num">{{ gdm2 }}</span>
            <span>井盖</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_1_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_1_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_5.png" alt="" />
            <span class="bottom-num">{{ gdm3 }}</span>
            <span>化粪池</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_3_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_3_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_5.png" alt="" />
            <span class="bottom-num">{{ gdm4 }}</span>
            <span>隔油池</span>
          </div>
        </div>
        <div class="contentnumweek">{{ gdm }}</div>
      </div>
      <div class="home three">
        <div class="title">
          <span>管道</span>
          <span>本季度</span>
        </div>
        <div class="contentnum"></div>
        <div class="bottom">
          <div>
            <img src="../assets/img/qxgcl_icon_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_5.png" alt="" />
            <span class="bottom-num">{{ gdy1 }}</span>
            <span>井室</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_2_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_2_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_2_5.png" alt="" />
            <span class="bottom-num">{{ gdy2 }}</span>
            <span>井盖</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_1_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_1_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_1_5.png" alt="" />
            <span class="bottom-num">{{ gdy3 }}</span>
            <span>化粪池</span>
          </div>
          <div>
            <img src="../assets/img/qxgcl_icon_3_1.png" alt="" />
            <img class="yuna" src="../assets/img/qxgcl_icon_3_2.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_3.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_4.png" alt="" />
            <img class="icon" src="../assets/img/qxgcl_icon_3_5.png" alt="" />
            <span class="bottom-num">{{ gdy4 }}</span>
            <span>隔油池</span>
          </div>
        </div>
        <div class="contentnumweek">{{ gdy }}</div>
      </div>
      <div class="center planone">
        <div class="planone-tit">
          <span>抢修来源</span>
          <span>抢修工程量/个/千米</span>
        </div>
        <div class="center-title">
          <div>{{ centery1 }}</div>
          <div>{{ centery2 }}</div>
          <div>{{ centery3 }}</div>
          <div>{{ centery4 }}</div>
        </div>
        <div class="center-name">
          <div>数字城管</div>
          <div>社区保修</div>
          <div>民生110</div>
          <div>其他</div>
        </div>

        <div class="center-bottom">
          <div class="top">
            <div class="center-btm">
              <div>{{ gdc }}</div>
              <div></div>
              <span>管道</span>
            </div>
            <div class="center-btm ble">
              <div>{{ jgc }}</div>
              <div></div>
              <span>井盖</span>
            </div>
            <div class="center-btm">
              <div>{{ gycc }}</div>
              <div></div>
              <span>隔油池</span>
            </div>
          </div>
          <div class="btm">
            <div class="center-btm clr">
              <div>{{ jsc }}</div>
              <div></div>
              <span>井室</span>
            </div>
            <div class="center-btm clr">
              <div>{{ hfcc }}</div>
              <div></div>
              <span>化粪池</span>
            </div>
          </div>
        </div>
      </div>
      <div class="center plantwo">
        <div class="plantwo-tit">
          <ul>
            <li>序号</li>
            <li>名称</li>
            <li>片区</li>
            <li>状态</li>
            <li>创建时间</li>
          </ul>
        </div>
        <div class="plantwo-cont">
          <vue-seamless-scroll
            style="height: 100%"
            :data="list"
            :key="roundlist"
          >
            <div>
              <ul v-for="(item, index) in list" :key="index">
                <li>{{ index + 1 }}</li>
                <li>{{ item.ROADNAME }}</li>
                <li>{{ item.AREANAME }}</li>
                <li>
                  {{
                    item.STATUS == -1
                      ? "等待审核"
                      : item.STATUS == 0
                      ? "未接收"
                      : item.STATUS == 1
                      ? "已接受"
                      : item.STATUS == 2
                      ? "到达现场"
                      : item.STATUS == 3
                      ? "维修中"
                      : item.STATUS == 4
                      ? "维修结束"
                      : item.STATUS == 5
                      ? "申请复核"
                      : item.STATUS == 6
                      ? "复核不通过"
                      : item.STATUS == 7
                      ? "复核通过"
                      : item.STATUS == 8
                      ? "销单"
                      : "暂无"
                  }}
                </li>
                <li>{{ item.CREATETIME }}</li>
              </ul>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="right rightone">
        <div class="rightone-tit">
          <span>本周</span>
          <span>单位/个</span>
        </div>
        <div class="rightone-con">
          <div class="round">
            <div class="snow" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img1.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top1.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom1.png"
              alt=""
            />
            <b class="con-numkey">{{ week1 }}</b>

            <span class="con-name">中区</span>
          </div>
          <div class="round">
            <div class="snow snow2" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img2.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top2.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom2.png"
              alt=""
            />
            <b class="con-numkey">{{ week2 }}</b>

            <span class="con-name">南区</span>
          </div>
          <div class="round">
            <div class="snow snow3" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img3.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top3.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom3.png"
              alt=""
            />
            <b class="con-numkey">{{ week3 }}</b>

            <span class="con-name">北区</span>
          </div>
          <div class="round">
            <div class="snow snow4" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img4.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top4.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom4.png"
              alt=""
            />
            <b class="con-numkey">{{ weekall }}</b>
            <span class="con-name">合计</span>
          </div>
        </div>
      </div>
      <div class="right righttwo">
        <div class="rightone-tit">
          <span>本月</span>
          <span>单位/个</span>
        </div>
        <div class="rightone-con">
          <div class="round">
            <div class="snow snow5" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img1.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top1.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom1.png"
              alt=""
            />
            <b class="con-numkey">{{ year1 }}</b>

            <span class="con-name">中区</span>
          </div>
          <div class="round">
            <div class="snow snow6" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img2.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top2.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom2.png"
              alt=""
            />
            <b class="con-numkey">{{ year2 }}</b>

            <span class="con-name">南区</span>
          </div>
          <div class="round">
            <div class="snow snow7" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img3.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top3.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom3.png"
              alt=""
            />
            <b class="con-numkey">{{ year3 }}</b>

            <span class="con-name">北区</span>
          </div>
          <div class="round">
            <div class="snow snow8" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img4.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top4.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom4.png"
              alt=""
            />
            <b class="con-numkey">{{ yearall }}</b>
            <span class="con-name">合计</span>
          </div>
        </div>
      </div>
      <div class="right rightthree">
        <div class="rightone-tit">
          <span>本季度</span>
          <span>单位/个</span>
        </div>
        <div class="rightone-con">
          <div class="round">
            <div class="snow snow9" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img1.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top1.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom1.png"
              alt=""
            />
            <b class="con-numkey">{{ jidu1 }}</b>

            <span class="con-name">中区</span>
          </div>
          <div class="round">
            <div class="snow snow10" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img2.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top2.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom2.png"
              alt=""
            />
            <b class="con-numkey">{{ jidu2 }}</b>

            <span class="con-name">南区</span>
          </div>
          <div class="round">
            <div class="snow snow11" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img3.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top3.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom3.png"
              alt=""
            />
            <b class="con-numkey">{{ jidu3 }}</b>

            <span class="con-name">北区</span>
          </div>
          <div class="round">
            <div class="snow snow12" count="1500"></div>
            <img class="house" src="../assets/img/ellipse_img4.png" alt="" />
            <img
              class="con-tou"
              src="../assets/img/ellipse_img_top4.png"
              alt=""
            />
            <img
              class="con-wei"
              src="../assets/img/ellipse_img_bottom4.png"
              alt=""
            />
            <b class="con-numkey">{{ jiduall }}</b>
            <span class="con-name">合计</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import store from "@/store";
import {
  YearToRepairTable,
  RushRepairRuantity,
  child_F2,
  YearToRepair,
  YearToRepair2,
  RepairTask,
} from "../ajax";
export default {
  props: {
    value: {
      type: String,
      default: "中环内",
    },
    areaID: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      roundlist: 0,
      id: [],
      week: this.$moment(
        this.$moment().week(this.$moment().week()).startOf("week").valueOf()
      ).format("YYYY/MM/DD"),
      list: [],
      //本周
      gd: "000000",
      gd1: 0,
      gd2: 0,
      gd3: 0,
      gd4: 0,
      //本月
      gdm: "000000",
      gdm1: 0,
      gdm2: 0,
      gdm3: 0,
      gdm4: 0,
      //本年
      gdy: "000000",
      gdy1: 0,
      gdy2: 0,
      gdy3: 0,
      gdy4: 0,
      //今年
      centery1: 0,
      centery2: 0,
      centery3: 0,
      centery4: 0,
      gdc: 0,
      jsc: 0,
      jgc: 0,
      hfcc: 0,
      gycc: 0,

      //right
      week1: 0,
      week2: 0,
      week3: 0,
      weekall: 0,
      year1: 0,
      year2: 0,
      year3: 0,
      yearall: 0,
      jidu1: 0,
      jidu2: 0,
      jidu3: 0,
      jiduall: 0,
    };
  },
  computed: {
    obj() {
      return store.state.list;
    },
  },
  watch: {
    obj(val) {
      if (val[1].indexOf("block") != -1) {
        store.state.pan = 0;
        this.arr();
        this.left1();
        this.center();
        this.right1();
      }
    },
    areaID() {
      setTimeout(() => {
        this.arr();
        this.left1();
        this.center();
        this.right1();
        this.roundlist += 1;
      }, 1000);
    },
  },
  created() {
    child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
      eval(res.d).forEach((item) => {
        this.id.push(item.AREAID);
      });
      this.arr();
      this.left1();
      this.center();
      this.right1();
    });
  },

  methods: {
    arr() {
      YearToRepairTable({
        StartTime: this.week,
        Endtime: this.$moment().format("YYYY/MM/DD "),
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        this.list = eval(res.d);
      });
    },
    left1() {
      RushRepairRuantity({
        Time: "本周",
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.GDCD.length == 0) {
            this.gd = "000000";
          } else if (item.GDCD.length == 1) {
            this.gd = "00000" + item.GDCD;
          } else if (item.GDCD.length == 2) {
            this.gd = "0000" + item.GDCD;
          } else if (item.GDCD.length == 3) {
            this.gd = "000" + item.GDCD;
          } else if (item.GDCD.length == 4) {
            this.gd = "00" + item.GDCD;
          } else if (item.GDCD.length == 5) {
            this.gd = "0" + item.GDCD;
          } else if (item.GDCD.length == 6) {
            this.gd = item.GDCD;
          }

          this.gd4 = item.GYC ? item.GYC : 0;
          this.gd3 = item.HFC ? item.HFC : 0;
          this.gd2 = item.JG ? item.JG : 0;
          this.gd1 = item.JSZS ? item.JSZS : 0;
        });
      });
      RushRepairRuantity({
        Time: "本月",
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.GDCD.length == 0) {
            this.gdm = "000000";
          } else if (item.GDCD.length == 1) {
            this.gdm = "00000" + item.GDCD;
          } else if (item.GDCD.length == 2) {
            this.gdm = "0000" + item.GDCD;
          } else if (item.GDCD.length == 3) {
            this.gdm = "000" + item.GDCD;
          } else if (item.GDCD.length == 4) {
            this.gdm = "00" + item.GDCD;
          } else if (item.GDCD.length == 5) {
            this.gdm = "0" + item.GDCD;
          } else if (item.GDCD.length == 6) {
            this.gdm = item.GDCD;
          }

          this.gdm4 = item.GYC ? item.GYC : 0;
          this.gdm3 = item.HFC ? item.HFC : 0;
          this.gdm2 = item.JG ? item.JG : 0;
          this.gdm1 = item.JSZS ? item.JSZS : 0;
        });
      });
      RushRepairRuantity({
        Time: "本季度",
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.GDCD.length == 0) {
            this.gdy = "000000";
          } else if (item.GDCD.length == 1) {
            this.gdy = "00000" + item.GDCD;
          } else if (item.GDCD.length == 2) {
            this.gdy = "0000" + item.GDCD;
          } else if (item.GDCD.length == 3) {
            this.gdy = "000" + item.GDCD;
          } else if (item.GDCD.length == 4) {
            this.gdy = "00" + item.GDCD;
          } else if (item.GDCD.length == 5) {
            this.gdy = "0" + item.GDCD;
          } else if (item.GDCD.length == 6) {
            this.gdy = item.GDCD;
          }

          this.gdy4 = item.GYC ? item.GYC : 0;
          this.gdy3 = item.HFC ? item.HFC : 0;
          this.gdy2 = item.JG ? item.JG : 0;
          this.gdy1 = item.JSZS ? item.JSZS : 0;
        });
      });
    },
    center() {
      this.centery1 = 0;
      this.centery2 = 0;
      this.centery3 = 0;
      this.centery4 = 0;
      YearToRepair({
        StartTime: this.$moment().format("YYYY") + "/01/01",
        Endtime: this.$moment().format("YYYY") + "/12/31",
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.SOURCE.indexOf("数字城管") != -1) {
            this.centery1 += Number(item.QXSUM);
          } else if (item.SOURCE.indexOf("社区报修") != -1) {
            this.centery2 += Number(item.QXSUM);
          } else if (item.SOURCE.indexOf("民生") != -1) {
            this.centery3 += Number(item.QXSUM);
          } else if (item.SOURCE.indexOf("其他") != -1) {
            this.centery4 += Number(item.QXSUM);
          }
        });
      });
      YearToRepair2({
        Time: "今年",
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          this.gdc = item.PIPELINELENGTH;
          this.jsc = item.WELLNUMBER;
          this.jgc = item.WELLCOVERNUMBER;
          this.hfcc = item.SEPTICTANKNUMBER;
          this.gycc = item.GREASETRAPNUMBER;
        });
      });
    },
    right1() {
      RepairTask({
        StartTime: this.week,
        Endtime: this.$moment().format("YYYY/MM/DD "),
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.AREANAME == "中区") {
            this.week1 = item.JS;
          } else if (item.AREANAME == "南区") {
            this.week2 = item.JS;
          } else if (item.AREANAME == "北区") {
            this.week3 = item.JS;
          }
        });
        this.weekall =
          Number(this.week1) + Number(this.week2) + Number(this.week3);
      });
      //本月
      RepairTask({
        StartTime: this.$moment().startOf("month").format("YYYY-MM-DD"),
        Endtime: this.$moment().format("YYYY/MM/DD "),
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.AREANAME == "中区") {
            this.year1 = item.JS;
          } else if (item.AREANAME == "南区") {
            this.year2 = item.JS;
          } else if (item.AREANAME == "北区") {
            this.year3 = item.JS;
          }
        });
        this.yearall =
          Number(this.year1) + Number(this.year2) + Number(this.year3);
      });
      //本季度
      RepairTask({
        StartTime: this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD"),
        Endtime: this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD"),
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.AREANAME == "中区") {
            this.jidu1 = item.JS;
          } else if (item.AREANAME == "南区") {
            this.jidu2 = item.JS;
          } else if (item.AREANAME == "北区") {
            this.jidu3 = item.JS;
          }
        });
        this.jiduall =
          Number(this.jidu1) + Number(this.jidu2) + Number(this.jidu3);
      });
    },
  },
};
</script>
<style scoped>
#hometwo {
  background: url("../assets/DataPage3.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;

  overflow: hidden;
}
main {
  width: 100%;
  margin: 13vh auto auto auto;
  position: relative;
}

.home {
  width: 24vw;
  height: 12vw;
  position: absolute;
  left: 2%;
}
.center {
  width: 43vw;
  height: 17vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.right {
  width: 24vw;
  height: 12vw;
  position: absolute;
  right: 2%;
  padding: 0.5vw;
}
.one,
.rightone {
  /* background: blue; */
  top: 0;
}
.two,
.righttwo {
  top: 29.5vh;
}
.three,
.rightthree {
  top: 59.5vh;
}
.planone {
  top: 5vh;
}
.plantwo {
  /* background: red; */
  width: 40vw;
  top: 48.5vh;
}
.title {
  margin-left: 1vw;
  text-align: left;
  color: #06adef;
  height: 4vh;
  line-height: 4vh;
}
.title span:nth-child(2) {
  position: relative;
  left: 40%;
}
.contentnum {
  background: url("../assets/YYJG_QXGCL_GD_2.png") no-repeat;
  background-size: 100% 100%;
  width: 90%;
  height: 6vh;
  margin-left: 1vw;
  position: relative;
}
.bottom {
  width: 100%;
  height: 13vh;
  margin-left: 0.5vw;
  margin-top: 1vh;
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  color: #fff;
  align-items: center;
}
.bottom div {
  margin: 0 5% 0 0;
  width: 15%;
  height: 65%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.bottom div img {
  width: 4vw;
  height: 3vw;
}
.bottom-num {
  position: absolute;
  font-size: 1.3vw;
  top: -35%;
  left: 55%;
  transform: translate(-50%);
}
.bottom div .icon {
  position: absolute;
  top: -17%;
  left: 55%;
  transform: translate(-50%);
  animation: img_3 3s linear infinite;
  transition: all 1s;
}
.yuna {
  animation: img_2 3s linear infinite;
  position: absolute;
  top: -17%;
  left: 55%;
  transform: translate(-50%);
  transition: all 1s;
}
@keyframes img_2 {
  from {
    top: -25%;
    opacity: 1;
  }

  to {
    top: 0%;
    opacity: 0;
  }
}

@keyframes img_3 {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
/* background */
.center-title {
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1.5vh 0;
}
.center-name {
  width: 100%;
  font-size: 0.8vw;
  display: flex;
  color: #12dace;
  align-items: center;
  justify-content: space-evenly;
}
.center-name > div {
  width: 8.2vw;
}
.center-title div {
  width: 8.2vw;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.center-title div:nth-child(1),
.center-title div:nth-child(3) {
  background-image: url("../assets/img/yyjg_jnqxs_ls.png");
}
.center-title div:nth-child(2),
.center-title div:nth-child(4) {
  background-image: url("../assets/img/yyjg_jnqxs_hs.png");
}
.center-bottom {
  width: 100%;
  height: 18vh;
}
.center-bottom .top {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.center-bottom .btm {
  width: 100%;
  height: 30%;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.center-btm {
  width: 7vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.center-btm div {
  background-size: 100% 100%;
  color: #fff;
  font-size: 1vw;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: space-around;
}
.center-btm div:nth-child(1) {
  width: 5vw;
  height: 5vw;
  top: 1vh;
  position: relative;

  background-image: url("../assets/img/jnxqsbq_icon_v.png");
}
.center-btm div:nth-child(2) {
  width: 6vw;
  height: 3vh;
  background-image: url("../assets/img/jnxqxbg_icon_v.png");
}

.ble div:nth-child(1) {
  background-image: url("../assets/img/jnxqsbq_icon_l.png");
}
.ble div:nth-child(2) {
  background-image: url("../assets/img/jnxqxbg_icon_l.png");
}
.clr div:nth-child(1) {
  background-image: url("../assets/img/jnxqsbq_icon_z.png");
}
.clr div:nth-child(2) {
  background-image: url("../assets/img/jnxqzbg_icon_z.png");
}

.rightone-tit span {
  color: #027bd9;
}
.rightone-tit {
  text-align: right;
}
.rightone-tit span:nth-child(1) {
  position: relative;
  right: 30%;
}
.rightone-con {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.rightone-con div {
  width: 3.6vw;
  height: 60%;
  border-radius: 0 0 100% 100%/0 0 30% 30%;
}
.rightone-con div:nth-child(1) {
  background: rgba(90, 65, 213, 0.66);
}
.rightone-con div:nth-child(2) {
  background: rgba(63, 188, 223, 0.39);
}
.rightone-con div:nth-child(3) {
  background: rgba(166, 82, 45, 0.52);
}
.rightone-con div:nth-child(4) {
  background: rgba(34, 143, 12, 0.39);
}
.snow {
  background: transparent !important;
}
.round {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.round {
  background-size: 100% 100%;
}
.con-tou,
.con-wei {
  width: 4vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.con-tou {
  top: -2vh;
}
.con-wei {
  bottom: -1vh;
}
.house {
  position: relative;
  z-index: 99;
  bottom: 1vh;
  width: 2vw;
}
.round span {
  width: 4vw;
  position: absolute;
  bottom: -4vh;
  color: #fff;
  font-size: 0.8vw;
  left: 50%;
  transform: translateX(-50%);
}

/* center -btm */
.plantwo-tit {
  margin: 1vh 0;
}
.plantwo-tit ul {
  width: 100%;
  height: 4vh;
  line-height: 4vh;
  display: flex;
  align-items: center;
}
.plantwo-tit ul li:nth-child(1) {
  flex: 1;
  background: #164883;
  color: #1f7dd4;
}
.plantwo-tit ul li:nth-child(2) {
  background: #2b6d85;
  color: #88a4aa;
}
.plantwo-tit ul li:nth-child(3) {
  background: #444d61;
  color: #ad9d4c;
}
.plantwo-tit ul li:nth-child(4) {
  background: #5c3538;
  color: #64d8c3;
}
.plantwo-tit ul li:nth-child(5) {
  background: #725d20;
  color: #db8040;
}
.plantwo-cont ul li:nth-child(1) {
  flex: 1;
}
.plantwo-tit ul li,
.plantwo-cont ul li {
  flex: 2;
  height: 4vh;
  line-height: 4vh;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.plantwo-cont {
  color: #fff;
  width: 100%;
  height: 29vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  font-size: 0.9vw;
}
.plantwo-cont ul {
  display: flex;
}
.plantwo-cont::-webkit-scrollbar {
  /*隐藏滚动条*/
  display: none;
}
/* 雪花 */

/* leftnum */
.contentnumweek {
  position: absolute;
  top: 5vh;
  width: 85%;
  height: 6vh;
  margin-left: 1.2vw;
  color: yellow;
  font-size: 1.8vw;
  font-weight: bolder;
  letter-spacing: 1.2em;
}
.con-numkey {
  position: absolute;
  top: -4vh;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.5vw;
  font-weight: 100;
}

img {
  display: block;
  width: 100%;
}
@keyframes snow {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 500px 500px, 1000px 500px;
  }
}
.planone-tit {
  display: flex;
  color: #07b4f7;
  justify-content: space-between;
  align-items: center;
}
.planone-tit {
  padding: 0 1vw;
}
</style>
