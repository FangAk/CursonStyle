<template>
  <div id="home">
    <div v-show="home" id="center-home">
      <div id="left">
        <div ref="yyjg_gwyh1" class="gwa"></div>
        <span
          style="
            position: absolute;
            top: 13.5vh;
            left: 3vw;
            z-index: 1000;
            font-size: 12px;
            color: rgb(7, 168, 234);
          "
          >单位/km</span
        >
        <span
          style="
            position: absolute;
            top: 13.5vh;
            left: 13vw;
            z-index: 1000;
            font-size: 0.8vw;
            color: rgb(7, 168, 234);
          "
          >本周</span
        >
        <div class="gwb">
          <div
            style="
              margin: 0px;
              height: 20%;
              display: flex;
              align-items: center;
              position: relative;
              top: 1.8vh;

              align-content: center;
            "
            class="title"
          >
            <span style="color: #07a8ea; font-size: 12px; margin: 0.5vw 0.5vw"
              >单位/km</span
            >
            <span
              style="
                fontweight: '100';
                color: #07a8ea;
                transform: translateX(7.2vw);
                font-size: 0.8vw;
              "
              >本月</span
            >
          </div>

          <img
            style="position: relative; top: 5vh; left: -1vw; width: 63%"
            src="../assets/gwyh_end.png"
            alt=""
          />
          <div class="roat">
            <div v-show="panpqone" class="rounttwo">
              <div class="planettwo gwbatwo">
                <span> {{ allname[0] }}</span> <span> {{ zq }}</span>
              </div>
              <div class="planettwo gwbbtwo">
                <span> {{ allname[1] }}</span> <span> {{ nq }}</span>
              </div>
              <div class="planettwo gwbctwo">
                <span> {{ allname[2] }}</span> <span> {{ bq }}</span>
              </div>

              <img
                class="planet2two gw-cion1two"
                src="../assets/gwyhbg.png"
                alt=""
              />
              <img
                class="planet2two gw-cion2two"
                src="../assets/gwyhbg.png"
                alt=""
              />
              <img
                class="planet2two gw-cion3two"
                src="../assets/gwyhbg.png"
                alt=""
              />
            </div>
            <div v-show="panpqtwo" class="rount">
              <div class="planet gwba">
                <span> {{ allname[0] }}</span> <span> {{ num1 }}</span>
              </div>
              <div class="planet gwbb">
                <span> {{ allname[1] }}</span> <span> {{ num2 }}</span>
              </div>
              <div class="planet gwbc">
                <span> {{ allname[2] }}</span> <span> {{ num3 }}</span>
              </div>

              <div class="planet gwbd">
                <span> {{ allname[3] }}</span> <span> {{ num4 }}</span>
              </div>
              <img class="planet2 gw-cion1" src="../assets/gwyhbg.png" alt="" />
              <img class="planet2 gw-cion2" src="../assets/gwyhbg.png" alt="" />
              <img class="planet2 gw-cion3" src="../assets/gwyhbg.png" alt="" />
              <img class="planet2 gw-cion4" src="../assets/gwyhbg.png" alt="" />
            </div>
          </div>
        </div>
        <div class="gwc">
          <div ref="yyjg_gwyh3" class="yyjg_gwyh3"></div>
          <span
            style="
              position: absolute;
              top: 1vh;
              left: 10vw;
              z-index: 1000;
              font-size: 0.8vw;
              color: rgb(7, 168, 234);
            "
            >本季度</span
          >
        </div>
      </div>
      <div id="center">
        <div class="center-title">
          <li>
            <img src="../assets/yhzl1.png" alt="" /><span
              ><b>雨水管网(千米)</b
              ><b style="color: #6ba5ff">{{ ysgw }}</b></span
            >
          </li>
          <li>
            <img src="../assets/yhzl2.png" alt="" /><span
              ><b>污水管网(千米)</b
              ><b style="color: #b59173">{{ wsgw }}</b></span
            >
          </li>
          <li>
            <img src="../assets/yhzl3.png" alt="" /><span
              ><b>雨水井室(个)</b
              ><b style="color: #6ba5ff"> {{ ysjs }}</b></span
            >
          </li>
          <li>
            <img src="../assets/yhzl4.png" alt="" /><span
              ><b>污水井室(个)</b><b style="color: #b59173">{{ wsjs }}</b></span
            >
          </li>
        </div>
        <div class="center-img">
          <img
            v-if="centerimg"
            style="width: 100%"
            src="../assets/PipeBg.png"
            alt=""
          />
          <img v-else style="width: 100%" src="../assets/PipeBg2.png" alt="" />
        </div>

        <div ref="map" class="center-map"></div>
      </div>

      <div id="right">
        <div class="jsa">
          <ul>
            <li>
              <img src="../assets/ysjcj_icon.png" alt="" />
              <span>
                <b>{{ ysj }}</b
                ><br />
                雨水井</span
              >
            </li>
            <li>
              <img src="../assets/wsjcj_icon.png" alt="" />
              <span>
                <b>{{ wsj }}</b
                ><br />
                污水井</span
              >
            </li>
            <li>
              <img src="../assets/ysssj_icon.png" alt="" />
              <span>
                <b>{{ yl }}</b
                ><br />
                雨篦</span
              >
            </li>
          </ul>
          <ul>
            <li>
              <img src="../assets/hfc_icon.png" alt="" />
              <span>
                <b>{{ hfc }}</b
                ><br />
                化粪池</span
              >
            </li>
            <li>
              <img src="../assets/gyc_icon.png" alt="" />
              <span>
                <b>{{ gyc }}</b
                ><br />
                隔油池</span
              >
            </li>
          </ul>
          <b class="dw">单位/个</b>
          <span class="week">本周</span>
        </div>
        <div class="jsb">
          <b class="dw dwtwo">单位/个</b>
          <span style="margin-top: 0.5vw" class="week">本月</span>
          <div class="yuan" ref="jsb" style="width: 50%; height: 70%"></div>
          <div ref="jsbxian" style="width: 50%; height: 90%"></div>
          <div class="jsnum">
            <span>清掏 {{ qt }}</span> <span>无需清掏 {{ wxqt }}</span>
          </div>
        </div>
        <div class="adad">
          <div ref="jsc" class="jsc"></div>
          <span style="margin-top: 1.5vw" class="week">本季度</span>
        </div>
      </div>
    </div>
    <div class="btn-sele">
      <el-select @change="sele" v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="backhome" @click="backhome">
      <img
        style="width: 1vw"
        src="../assets/img/signout_icon.png"
        alt=""
      /><span>退出</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
import * as echarts from "echarts";
import datt from "../assets/Json/ZHM_L.json";
import datta from "../assets/Json/ZP.json";
import dattb from "../assets/Json/ZP_new.json";
import {
  NetworkMaintenance_one,
  NetworkMaintenance_Three,
  MapPoint_Wsc,
  MapPoint_Wsc2,
  child_F2,
  child_F,
  WellMaintenance_one,
  WellMaintenance_two,
  MapWellSum,
  MapPipeSum,
  PipeSum,
  WellSum,
  NetworkMaintenance_two,
  GetYear,
  WellMaintenanceRight_two,
  WellMaintenance_Three,
} from "../ajax/index.js";
export default {
  name: "Home",
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
      allnamekey: [
        {
          name: "",
          value: 1,
        },
        {
          name: "",
          value: 1,
        },
      ],
      img1: require("../assets/Jsyh1.png"),
      img2: require("../assets/Jsyh2.png"),
      img3: require("../assets/Jsyh3.png"),
      img4: require("../assets/Jsyh4.png"),
      js3data: [],
      js3num: [],
      qt: 0,
      wxqt: 0,
      count: 0,
      jsdataright: [],
      jsdata: [],
      centerimg: true,
      zq: 0,
      nq: 0,
      bq: 0,
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      panpqone: true,
      panpqtwo: false,
      home: true,
      hometwo: false,
      background: {
        backgroundColor: "#d8dbe1",
      },
      txt11: 0,
      txt21: 0,
      txt12: 0,
      txt22: 0,
      txt13: 0,
      txt23: 0,
      ysgw: 0,
      wsgw: 0,
      ysjs: 0,
      wsjs: 0,
      ysj: 0,
      wsj: 0,
      yl: 0,
      hfc: 0,
      gyc: 0,
      gw1data: [],
      gw3data: [],
      gw3datavalue: [],

      // value: "中环内",
      options2: [],
      value2: "2022",
      dataa: [],
      datab: [],
      flowData: [],
      LableData: [
        {
          name: "北区",
          coords: [
            [28317.591492444844, 75247.73912203545],
            [31828.591592444844, 75247.73912203545],
          ], // 线条位置[开始位置，结束位置]
          value: [0, 0],
        },
        {
          name: "中区",
          coords: [
            [28828.611200000974, 70075.44400000013],
            [31828.611200000974, 70075.44400000013],
          ], // 线条位置[开始位置，结束位置]
          value: [0, 0],
        },
      ],
      LableData1: [
        {
          name: "南区",
          coords: [
            [24637.304600003394, 72546.09210000187],
            [20039.98300000254, 72546.09230000187],
          ], // 线条位置[开始位置，结束位置]
          value: [0, 0],
        },
        {
          name: "中区1",
          coords: [
            [22637.98380000254, 68766.5539000053],
            [20039.98300000254, 68766.5549000053],
          ], // 线条位置[开始位置，结束位置]
          value: [0, 0],
        },
      ],
      areaid: [],
      kstime: "",
      endtime: "",
      year: "2022",
      allname: [],
    };
  },

  created() {
    GetYear().then((res) => {
      eval(res.d).forEach((item) => {
        this.options2.push({
          value: item.FINISHTIME,
          label: item.FINISHTIME,
        });
      });
      this.year = this.options2[this.options2.length - 1].value;
    });
    this.parendid();
    this.gwyh2();
  },

  computed: {
    obj() {
      return store.state.list;
    },
  },

  mounted() {
    setTimeout(() => {
      this.map();
    }, 1500);
  },
  watch: {
    obj(val) {
      if (val[0].indexOf("block") != -1) {
        store.state.pan = 2;
        this.parendid();
        if (this.value == "中环内") {
          this.panpqone = true;
          this.panpqtwo = false;
          this.centerimg = true;
        } else if (this.value == "张浦") {
          this.panpqone = false;
          this.panpqtwo = true;
          this.centerimg = false;
        }
      }
    },
    value(val) {
      this.value = val;
      this.parendid();
      if (val == "中环内") {
        this.panpqone = true;
        this.panpqtwo = false;
        this.centerimg = true;
      } else if (val == "张浦") {
        this.panpqone = false;
        this.panpqtwo = true;
        this.centerimg = false;
      }
    },
  },
  methods: {
    backhome() {
      console.log("dd");
    },
    getkey(array, keyName) {
      if (Object.prototype.toString.call(array) == "[object Array]") {
        return array.map((item) => {
          return item[keyName];
        });
      }
    },

    parendid() {
      this.allname = [];
      this.areaid = [];
      if (this.value == "中环内") {
        child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.areaid.push(item.AREAID);
          });
          this.js2();
          this.js3();
          this.mapdata();
          this.mapdatatwo();
          this.mapnum();
          this.cenyernum();
          this.centernum2();
          setTimeout(() => {
            this.map();
          }, 1000);
        });
        child_F({ PID: this.Data.arr[0].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.allname.push(item.AREANAME);
          });

          this.gwyh1();
          this.gwyh3();
        });
      } else {
        child_F2({ PID: this.Data.arr[1].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.areaid.push(item.AREAID);
          });
          this.js2();
          this.js3();
          this.mapdata();
          this.mapdatatwo();
          this.mapnum();
          this.cenyernum();
          this.centernum2();
          setTimeout(() => {
            this.map();
          }, 1000);
        });
        child_F({ PID: this.Data.arr[1].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.allname.push(item.AREANAME);
          });
          this.allname.splice(this.allname.indexOf("南港大市"), 1);
          this.gwyh1();
          this.gwyh3();
        });
      }
    },
    //center 数量
    cenyernum() {
      this.wsgw = 0;
      this.ysgw = 0;
      PipeSum({
        StartTime: this.year + "/01/01",
        Endtime: this.year + "/12/31",
        AreaID: this.areaid.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.PIPETYPE == "污水管道") {
            this.wsgw = (parseInt(item.PIPESUM) / 1000).toFixed(2)
              ? (parseInt(item.PIPESUM) / 1000).toFixed(2)
              : 0;
          }
          if (item.PIPETYPE == "雨水管道") {
            this.ysgw = (parseInt(item.PIPESUM) / 1000).toFixed(2)
              ? (parseInt(item.PIPESUM) / 1000).toFixed(2)
              : 0;
          }
        });
      });
    },
    centernum2() {
      this.ysjs = 0;
      this.wsjs = 0;

      WellMaintenance_one({
        StartTime: this.$moment(
          this.$moment().week(this.$moment().week()).startOf("week").valueOf()
        ).format("YYYY/MM/DD"),
        Endtime: this.$moment().format("YYYY/MM/DD "),
        AreaID: this.areaid.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.WELLTYPE.indexOf("雨水") != -1) {
            this.ysj = item.COUNT;
          } else if (item.WELLTYPE.indexOf("污水") != -1) {
            this.wsj = item.COUNT;
          } else if (item.WELLTYPE.indexOf("雨篦") != -1) {
            this.yl = item.COUNT;
          } else if (item.WELLTYPE.indexOf("油") != -1) {
            this.gyc = item.COUNT;
          } else if (item.WELLTYPE.indexOf("化") != -1) {
            this.hfc = item.COUNT;
          }
        });
      });
      WellSum({
        StartTime: this.year + "/01/01",
        Endtime: this.year + "/12/31",
        AreaID: this.areaid.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (
            item.WELLTYPE == "污水检查井" ||
            item.WELLTYPE == "隔油池" ||
            item.WELLTYPE == "化粪池"
          ) {
            this.wsjs += parseInt(item.WELLSUM);
          }
          if (item.WELLTYPE == "雨水检查井" || item.WELLTYPE == "雨篦") {
            this.ysjs += parseInt(item.WELLSUM);
          }
        });
      });
    },

    sele(val) {
      this.year = val;
      this.cenyernum();

      this.centernum2();
      this.mapnum();
      setTimeout(() => {
        this.map();
      }, 1000);
    },
    mapnum() {
      MapPipeSum({
        StartTime: this.year + "/01/01",
        Endtime: this.year + "/12/31",
        AreaID: this.areaid.join(","),
      }).then((res) => {
        if (this.value == "中环内") {
          this.LableData = [
            {
              name: "北区",
              coords: [
                [28317.591492444844, 75247.73912203545],
                [31828.591592444844, 75247.73912203545],
              ], // 线条位置[开始位置，结束位置]
              value: [0, 0],
            },
            {
              name: "中区",
              coords: [
                [28828.611200000974, 70075.44400000013],
                [31828.611200000974, 70075.44400000013],
              ], // 线条位置[开始位置，结束位置]
              value: [0, 0],
            },
          ];
          this.LableData1 = [
            {
              name: "南区",
              coords: [
                [24637.304600003394, 72546.09210000187],
                [20039.98300000254, 72546.09230000187],
              ], // 线条位置[开始位置，结束位置]
              value: [0, 0],
            },
            {
              name: "中区1",
              coords: [
                [22637.98380000254, 68766.5539000053],
                [20039.98300000254, 68766.5549000053],
              ], // 线条位置[开始位置，结束位置]
              value: [0, 0],
            },
          ];
        } else if (this.value == "张浦") {
          if (this.year == "2022") {
            this.LableData = [
              {
                name: "镇东",
                coords: [
                  [28017.591492444844, 63241.788],
                  [31828.591592444844, 63241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
              {
                name: "大市",
                coords: [
                  [24017.591492444844, 56241.788],
                  [31828.591592444844, 56241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
            ];
            this.LableData1 = [
              {
                name: "南港",
                coords: [
                  [20539.304600003394, 56241.788],
                  [14039.98300000254, 56241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
              {
                name: "镇西",
                coords: [
                  [23637.98380000254, 64241.788],
                  [14039.98300000254, 64241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
            ];
          } else if (this.year == "2021") {
            this.LableData = [
              {
                name: "镇东",
                coords: [
                  [28017.591492444844, 63241.788],
                  [31828.591592444844, 63241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
            ];

            this.LableData1 = [
              {
                name: "镇西",
                coords: [
                  [23637.98380000254, 64241.788],
                  [14039.98300000254, 64241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
              {
                name: "南港大市",
                coords: [
                  [21539.304600003394, 56241.788],
                  [14039.98300000254, 56241.788],
                ], // 线条位置[开始位置，结束位置]
                value: [0, 0],
              },
            ];
          }
        }
        eval(res.d).forEach((item) => {
          this.LableData.forEach((item2) => {
            if (item.AREANAME == item2.name) {
              item2.value[0] = (item.PIPESUM / 1000).toFixed(0);
            }
          });
        });
        eval(res.d).forEach((item) => {
          this.LableData1.forEach((item2) => {
            if (item.AREANAME == item2.name) {
              item2.value[0] = (item.PIPESUM / 1000).toFixed(0);
            }
          });
        });
      });
      MapWellSum({
        StartTime: this.year + "/01/01",
        Endtime: this.year + "/12/31",
        AreaID: this.areaid.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          this.LableData.forEach((item2) => {
            if (item.AREANAME == item2.name) {
              item2.value[1] = item.WELLSUM;
            }
          });
        });
        eval(res.d).forEach((item) => {
          this.LableData1.forEach((item2) => {
            if (item.AREANAME == item2.name) {
              item2.value[1] = item.WELLSUM;
            }
          });
        });
      });
    },

    js2() {
      this.jsdataright = [];
      //本月
      let yesterday = this.$moment().startOf("month").format("YYYY/MM/DD");
      let endTime = this.$moment().format("YYYY/MM/DD");
      WellMaintenanceRight_two({
        StartTime: yesterday,
        Endtime: endTime,
        AreaID: this.areaid.join(","),
      }).then((res) => {
        // this.jsdataright = eval(res.d);
        this.allname.forEach((item) => {
          this.jsdataright.push({
            companyTypeName: item,
            totalNumber: 0,
          });
        });
        eval(res.d).forEach((item) => {
          this.jsdataright.forEach((val) => {
            if (item.AREANAME == val.companyTypeName) {
              val.totalNumber = item.WELLNUM;
            }
          });
        });
        this.js2xian();
      });
      WellMaintenance_two({
        StartTime: yesterday,
        Endtime: endTime,
        AreaID: this.areaid.join(","),
      }).then((res) => {
        this.jsdata = eval(res.d);
        this.jsdata.forEach((item) => {
          if (item.NEEDCLEAN == "0") {
            this.qt = item.WELLNUM;
          }
          if (item.NEEDCLEAN == "1") {
            this.wxqt = item.WELLNUM;
          }
        });
        this.count = parseInt(this.qt) + parseInt(this.wxqt);
        this.js2echarts();
      });
    },
    js3() {
      let yesterday = this.$moment(
        this.$moment()
          .quarter(this.$moment().quarter())
          .startOf("quarter")
          .valueOf()
      ).format("YYYY/MM/DD");
      let endTime = this.$moment(
        this.$moment()
          .quarter(this.$moment().quarter())
          .endOf("quarter")
          .valueOf()
      ).format("YYYY/MM/DD");
      WellMaintenance_Three({
        StartTime: yesterday,
        Endtime: endTime,
        AreaID: this.areaid.join(","),
      }).then((res) => {
        this.js3data = eval(res.d);
        if (this.value == "中环内") {
          this.js3num = [
            {
              name: "中区",
              value: "",
            },
            {
              name: "南区",
              value: "",
            },
            {
              name: "北区",
              value: "",
            },
          ];
        } else {
          this.js3num = [
            {
              name: "镇东",
              value: "",
            },
            {
              name: "镇西",
              value: "",
            },
            {
              name: "南港",
              value: "",
            },
            {
              name: "大市",
              value: "",
            },
          ];
        }
        this.js3data.forEach((item) => {
          this.js3num.forEach((val) => {
            if (item.AREANAME == val.name) {
              val.value = Number(item.WELLSUM);
            }
          });
        });

        this.js3echarts();
      });
    },
    //上面是数据
    js2echarts() {
      echarts.dispose(this.$refs.jsb);
      var myChart1 = echarts.init(this.$refs.jsb);
      var count = parseInt(200) + parseInt(100);
      var yiqingyu = 0;
      if (this.count == 0) {
        yiqingyu = 100;
      } else {
        yiqingyu = (parseInt(100) / count) * 100;
      }
      var labelData = [];
      for (var i = 0; i <= 100; ++i) {
        labelData.push({
          value: 1,
          name: i,
          itemStyle: {
            normal: {
              color: "rgba(0,209,228,0)",
            },
          },
        });
      }
      for (var i = 0; i < labelData.length; ++i) {
        if (labelData[i].name <= parseInt(yiqingyu)) {
          labelData[i].itemStyle = {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#0ff",
                },
                {
                  offset: 1,
                  color: "#5467df",
                },
              ]),
            },
          };
        }
      }
      var option = {
        grid: {
          left: "0%",
          right: "15%",
          bottom: "5%",
          top: "30%",
          containLabel: true,
        },
        title: [
          {
            text: this.count,
            x: "48%",
            y: "30%",
            textAlign: "center",
            textStyle: {
              fontSize: "18px",
              fontWeight: "1000",
              color: "#0FF",
              textAlign: "center",
            },
          },
          {
            text: "养护总数",
            x: "48%",
            y: "55%",
            textAlign: "center",
            textStyle: {
              fontSize: ".8vw",
              fontWeight: "400",
              color: "#0FF",
              textAlign: "center",
            },
          },
        ],

        polar: {
          radius: ["90%", "85%"],
          center: ["50%", "50%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 30,
            showBackground: true,
            backgroundStyle: {
              color: "#2e2856",
            },
            data: [parseInt(yiqingyu)],
            coordinateSystem: "polar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#585fe1",
                  },
                  {
                    offset: 1,
                    color: "#0ff",
                  },
                ]),
              },
            },
          },
          {
            hoverAnimation: false,
            type: "pie",
            z: 2,
            data: labelData,
            radius: ["75%", "70%"],
            top: "0%",
            zlevel: -2,
            itemStyle: {
              normal: {
                // borderColor: '#180f2a',
                borderColor: "#2e2856",
                borderWidth: 2,
              },
            },
            label: {
              normal: {
                position: "inside",
                show: false,
              },
            },
          },
        ],
      };
      myChart1.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },
    js2xian() {
      echarts.dispose(this.$refs.jsbxian);
      var myChart1 = echarts.init(this.$refs.jsbxian);

      let dataName = [];
      let data1 = [];
      let defaultData = [];
      let maxData = 0;
      this.jsdataright.forEach((item) => {
        dataName.push(item.companyTypeName);
        data1.push(item.totalNumber);
        if (maxData < Number(item.totalNumber)) {
          maxData = item.totalNumber;
        }
      });
      for (let i = 0; i < data1.length; i++) {
        defaultData.push(maxData);
      }
      var colorList = [
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
        "#28f9fe",
      ];
      // var defaultData = [800, 800, 800, 800]
      var option = {
        grid: {
          left: "0%",
          right: "15%",
          bottom: "5%",
          top: "10%",
          containLabel: true,
        },

        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,

            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: 14,
              },
              formatter: function (value) {
                value =
                  value.length > 7 ? value.substring(0, 7) + "..." : value;
                return value;
              },
            },
            data: dataName,
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: 14,
              },
              formatter: function (value) {
                return value;
              },
            },
            data: data1,
          },
        ],
        series: [
          {
            name: "数量",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 30, 30, 0],
                color: (params) => {
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(54,69,129,1)",
                    },
                    {
                      offset: 0.8,
                      color: colorList[params.dataIndex],
                    },
                    {
                      offset: 1,
                      color: "rgba(255,255,255,0.8)",
                    },
                  ]);
                },
              },
            },
            barWidth: 8,
            data: data1,
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 8,
            barGap: "-100%",
            data: defaultData,
            itemStyle: {
              normal: {
                color: "#764ec6",
                barBorderRadius: [0, 30, 30, 0],
              },
            },
          },
        ],
      };

      myChart1.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },
    js3echarts() {
      echarts.dispose(this.$refs.jsc);
      var myChart1 = echarts.init(this.$refs.jsc);
      var icon0 = [
        "image://" + this.img1,
        "image://" + this.img2,
        "image://" + this.img3,
        "image://" + this.img4,
      ];

      var dataImg = [];
      for (var i = 0; i < this.js3num.length; i++) {
        dataImg.push({
          value: this.js3num[i].value,
          symbol: icon0[i],
        });
      }
      var option = {
        title: {
          text: "单位/个",
          textStyle: {
            align: "center",
            color: "rgb(7, 168, 234) ",
            fontWeight: "400",
            fontSize: 12,
          },
          top: "6%",
          right: "3%",
        },
        grid: {
          left: "1%",
          top: "30%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.allname,
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
            axisLabel: {
              margin: 14,
              color: "#e2e9ff",
              textStyle: {
                fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              show: false,
              formatter: "{value}",
              color: "#e2e9ff",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",

            data: this.getkey(this.js3num, "value"),
            barWidth: "5",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#2059E5", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#00123D", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              show: true,
              position: "top",
              distance: 6,
              padding: 6,
              color: "#FFF",
              fontSize: 14,
              formatter: "{c}",
            },
          },
          {
            name: "",
            type: "pictorialBar",
            z: 1,
            symbolPosition: "end",
            symbolSize: [80, 40],
            symbolOffset: [0, -40],
            itemStyle: {
              shadowColor: "rgba(0,0,0,.3)",
              shadowBlur: 10,
              shadowOffsetY: 1,
              shadowOffsetX: 1,
            },
            data: dataImg,
          },
        ],
      };
      myChart1.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },

    mapdata() {
      (this.datab = []), (this.dataa = []);
      MapPoint_Wsc({ Patarea: this.value }).then((res) => {
        eval(res.d).forEach((item) => {
          if (parseInt(item.SLEVEL) == 0) {
            if (item.REFNAME != "港东污水厂") {
              this.dataa.push({
                name: item.REFNAME.replace("处理", ""),
                value: [item.X, item.Y],
              });
            }
          }
          if (item.SLEVEL == 1) {
            this.datab.push({ name: item.REFNAME, value: [item.X, item.Y] });
          }
        });
      });
    },
    mapdatatwo() {
      this.flowData = [];
      var ColorArr = [
        "#0091FF",
        "#6DD400",
        "#28F9FE",
        "#F7B500",
        "#32C5FF",
        "#6236FF",
      ];
      var abc = 0;
      MapPoint_Wsc2({ Patarea: this.value }).then((res) => {
        eval(res.d).forEach((item, index) => {
          if (abc > ColorArr.length) {
            abc = 0;
          }
          if (index == 0) {
            this.flowData.push({
              fromName: item.CNAME,
              name: item.PNAME,
              coords: [
                [item.CRX, item.CRY],
                [item.PRX, item.PRY],
              ],
              value: 100,
              lineStyle: { color: ColorArr[abc] },
            });
          } else {
            abc++;
            this.flowData.push({
              fromName: item.CNAME,
              name: item.PNAME,
              coords: [
                [item.CRX, item.CRY],
                [item.PRX, item.PRY],
              ],
              value: 100,
              lineStyle: { color: ColorArr[abc] },
            });
          }
        });
        console.log(this.flowData);
      });
    },
    gwyh1() {
      this.gw1data = [];
      let yesterday = this.$moment(
        this.$moment().week(this.$moment().week()).startOf("week").valueOf()
      ).format("YYYY/MM/DD");
      let endTime = this.$moment().format("YYYY/MM/DD ");

      NetworkMaintenance_one({
        StartTime: yesterday,
        Endtime: endTime,
      }).then((res) => {
        this.gw1data = eval(res.d);

        this.gw1();
      });
    },
    gwyh2() {
      let yesterday = this.$moment().startOf("month").format("YYYY-MM-DD");
      let endTime = this.$moment().format("YYYY/MM/DD ");
      NetworkMaintenance_two({
        StartTime: yesterday,
        Endtime: endTime,
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.AREANAME == "中区") {
            this.zq = (parseInt(item.AMOUNT) / 1000).toFixed(2);
          } else if (item.AREANAME == "南区") {
            this.nq = item.AMOUNT
              ? (parseInt(item.AMOUNT) / 1000).toFixed(2)
              : 0;
          } else if (item.AREANAME == "北区") {
            this.bq = item.AMOUNT
              ? (parseInt(item.AMOUNT) / 1000).toFixed(2)
              : 0;
          } else if (item.AREANAME == "镇东") {
            this.num1 = item.AMOUNT
              ? (parseInt(item.AMOUNT) / 1000).toFixed(2)
              : 0;
          } else if (item.AREANAME == "镇西") {
            this.num2 = item.AMOUNT
              ? (parseInt(item.AMOUNT) / 1000).toFixed(2)
              : 0;
          } else if (item.AREANAME == "南港") {
            this.num3 = item.AMOUNT
              ? (parseInt(item.AMOUNT) / 1000).toFixed(2)
              : 0;
          } else if (item.AREANAME == "大市") {
            this.num4 = item.AMOUNT
              ? (parseInt(item.AMOUNT) / 1000).toFixed(2)
              : 0;
          }
        });
      });
    },
    gwyh3() {
      let yesterday = this.$moment(
        this.$moment()
          .quarter(this.$moment().quarter())
          .startOf("quarter")
          .valueOf()
      ).format("YYYY/MM/DD");
      let endTime = this.$moment(
        this.$moment()
          .quarter(this.$moment().quarter())
          .endOf("quarter")
          .valueOf()
      ).format("YYYY/MM/DD");
      NetworkMaintenance_Three({ StartTime: yesterday, Endtime: endTime }).then(
        (res) => {
          // function swapArr(arr, index1, index2) {
          //   arr[index1] = arr.splice(index2, 1, arr[index1])[0];
          //   return arr;
          // }
          if (this.value == "中环内") {
            this.gw3datavalue = [
              {
                name: "中区",
                value: "",
              },
              {
                name: "南区",
                value: "",
              },
              {
                name: "北区",
                value: "",
              },
            ];
          } else {
            this.gw3datavalue = [
              {
                name: "镇东",
                value: "",
              },
              {
                name: "镇西",
                value: "",
              },
              {
                name: "南港",
                value: "",
              },
              {
                name: "大市",
                value: "",
              },
            ];
          }
          this.gw3data = eval(res.d);
          this.gw3data.forEach((item) => {
            this.gw3datavalue.forEach((val) => {
              if (item.AREANAME == val.name) {
                val.value = (Number(item.PIPESUM) / 1000).toFixed(2);
              }
            });
          });

          this.gw3();
        }
      );
    },
    swapItems(arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    },
    gw1() {
      echarts.dispose(this.$refs.yyjg_gwyh1);
      var myChart1 = echarts.init(this.$refs.yyjg_gwyh1);
      var option;

      var list;

      if (this.value == "中环内") {
        list = [
          {
            name: "中区",
            ys: "",
            ws: "",
          },
          {
            name: "南区",
            ys: "",
            ws: "",
          },
          {
            name: "北区",
            ys: "",
            ws: "",
          },
        ];

        this.gw1data.forEach((item) => {
          list.forEach((val) => {
            if (item.PIPETYPE == "雨水管道" && item.AREANAME == val.name) {
              val.ys = Number(item.SUM / 1000).toFixed(2);
            }
            if (item.PIPETYPE == "污水管道" && item.AREANAME == val.name) {
              val.ws = Number(item.SUM / 1000).toFixed(2);
            }
          });
        });
      } else if (this.value == "张浦") {
        list = [
          {
            name: "镇东",
            ys: "",
            ws: "",
          },
          {
            name: "镇西",
            ys: "",
            ws: "",
          },
          {
            name: "南港",
            ys: "",
            ws: "",
          },
          {
            name: "大市",
            ys: "",
            ws: "",
          },
        ];
        this.gw1data.forEach((item) => {
          list.forEach((val) => {
            if (item.PIPETYPE == "雨水管道" && item.AREANAME == val.name) {
              val.ys = Number(item.SUM / 1000).toFixed(2);
            }
            if (item.PIPETYPE == "污水管道" && item.AREANAME == val.name) {
              val.ws = Number(item.SUM / 1000).toFixed(2);
            }
          });
        });
      }

      var xAxisData = [];
      var seriesData1 = [];
      var maxval = 0;
      var sum = 0;

      for (var i = 0; i < this.gw1data.length; i++) {
        xAxisData.push(this.gw1data[i].AREANAME + this.gw1data[i].PIPETYPE);
        seriesData1.push(parseFloat(this.gw1data[i].SUM));
        sum += parseFloat(this.gw1data[i].SUM);
      }

      var Areaarr = [];
      if (this.value == "中环内") {
        for (var i = 0; i < this.gw1data.length; i++) {
          if (
            this.gw1data[i].PIPETYPE == "雨水管道" &&
            this.gw1data[i].AREANAME.indexOf("区") != -1
          ) {
            Areaarr.push(this.gw1data[i].AREANAME);
          }

          if (parseFloat(this.gw1data[i].SUM) > maxval) {
            maxval = parseFloat(this.gw1data[i].SUM);
          }
        }
      } else {
        this.gw1data.forEach((item) => {
          if (item.PIPETYPE == "雨水管道") {
            if (
              item.AREANAME == "镇东" ||
              item.AREANAME == "镇西" ||
              item.AREANAME == "南港" ||
              item.AREANAME == "大市"
            ) {
              Areaarr.push(item.AREANAME);
            }
            if (parseFloat(item.SUM) > maxval) {
              maxval = parseFloat(item.SUM);
            }
          }
        });
      }

      maxval = (maxval * (1 + 0.1)) / 1000;
      option = {
        // title: {
        //   text: "本周",
        //   top: 25,
        //   left: "center",
        //   textStyle: {
        //     color: "rgb(7, 168, 299)",
        //     fontSize: "13px",
        //     fontWeight: "100",
        //   },
        // },
        textStyle: {
          color: "#c0c3cd",
          fontSize: 12,
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
          top: "15%",
          right: "8%",
          itemWidth: 10,
          itemHeight: 10,
          padding: 0,
          selectedMode: false,
          textStyle: {
            color: "#c0c3cd",
            fontSize: 12,
            padding: [5, 0, 0, 0],
          },
          data: ["雨水", "污水"],
        },
        color: [
          "#ffdd96",
          "#101763",
          "#3d45c0",
          "#baa7fd",
          "#101763",
          "#3e46c1",
          "#27bae7",
          "#ff6d9d",
          "#cb79ff",
          "#f95b5a",
          "#ccaf27",
          "#38b99c",
          "#93d0ff",
          "#bd74e0",
          "#fd77da",
          "#dea700",
        ],
        grid: {
          containLabel: true,
          top: "25%",
          left: "2%",
          right: "4%",
          bottom: "0%",
        },
        xAxis: [
          {
            nameTextStyle: {
              color: "#c0c3cd",
              padding: [0, 0, -10, 0],
              fontSize: 14,
            },
            axisLabel: {
              color: "#fff",
              fontSize: 14,
              margin: 10,
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
                //"type": "dashed"
              },
              show: true,
            },
            data: this.getkey(list, "name"),
            type: "category",
          },
          {
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: this.getkey(list, "name"),
            type: "category",
          },
        ],
        yAxis: {
          name: "单位/km",
          nameTextStyle: {
            color: "#07a8ea ",
            padding: [0, 0, 10, 0],
            fontSize: 12,
          },
          axisLabel: {
            color: "#28f9fe",
            fontSize: 12,
          },
          axisTick: {
            lineStyle: {
              color: "#384267",
              width: 1,
            },
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#384267",
              type: "dashed",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#4c556a",
              width: 1,
              //"type": "dashed"
            },
            show: true,
          },
          name: "",
        },
        series: [
          {
            name: "雨水",
            data: this.getkey(list, "ys"),
            xAxisIndex: 1,
            type: "bar",
            barMaxWidth: "auto",
            barGap: "80%",
            barWidth: 18,
            zlevel: 2,
            itemStyle: {
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
                    color: "#9B7DF9",
                  },
                  {
                    offset: 1,
                    color: "rgba(53,44,170,35)",
                  },
                ],
              },
            },
            label: {
              show: true,
              position: "top",
              //"distance": 10,
              fontSize: 12,
              color: "#fff",
            },
          },
          {
            data: this.getkey(list, "ws"),
            xAxisIndex: 1,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: ["90%", "-50%"],
            symbolSize: [18, 10],
            zlevel: 3,
          },
          {
            data: [maxval, maxval, maxval, maxval],
            xAxisIndex: 0,
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 18,
            barGap: "-100%",
            zlevel: 1,
          },
          {
            data: [maxval, maxval, maxval, maxval],
            xAxisIndex: 0,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: ["90%", "-50%"],
            symbolSize: [18, 10],
            zlevel: 2,
          },
          {
            name: "污水",
            data: this.getkey(list, "ws"),
            xAxisIndex: 1,
            type: "bar",
            barMaxWidth: "auto",
            zlevel: 2,
            barWidth: 18,
            itemStyle: {
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
                    color: "#C6943F",
                  },
                  {
                    offset: 1,
                    color: "#99804C",
                  },
                ],
              },
            },
            label: {
              show: true,
              position: "top",
              //"distance": 10,
              fontSize: 12,
              color: "#fff",
            },
          },
          {
            data: this.getkey(list, "ys"),
            xAxisIndex: 1,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: ["-90%", "-50%"],
            symbolSize: [18, 10],
            zlevel: 3,
          },
          {
            data: [maxval, maxval, maxval, maxval],
            xAxisIndex: 0,
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 18,
            barGap: "80%",
            zlevel: 1,
          },
          {
            data: [maxval, maxval, maxval, maxval],
            xAxisIndex: 0,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: ["-90%", "-50%"],
            symbolSize: [18, 10],
            zlevel: 2,
          },
        ],
        dataZoom: {
          type: "inside",
          xAxisIndex: [0, 1],
        },
        tooltip: {
          trigger: "axis",
          show: false,
        },
      };
      option && myChart1.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },
    gw3() {
      echarts.dispose(this.$refs.yyjg_gwyh3);
      var myChart2 = echarts.init(this.$refs.yyjg_gwyh3);
      var option;
      option = {
        // backgroundColor: "#080b30",
        // title: {
        //   text: "本季度",
        //   top: 10,
        //   left: "center",
        //   textStyle: {
        //     color: "rgb(7, 168, 280)",
        //     fontSize: "13px",
        //     fontWeight: "100",
        //   },
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "20%",
          left: "0%",
          right: "5%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#4c556a",
              },
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              color: "#fff",
              margin: 14,
              fontSize: 14,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: ["0%", "10"],
            data: this.allname,
          },
        ],

        yAxis: [
          {
            type: "value",
            name: "单位/km",
            nameGap: 12 * 1.5,
            nameTextStyle: {
              fontSize: 12,
              color: "#07a8ea ",
              padding: [0, 0, 3, 0],
            },
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
                type: "dashed",
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              // margin: 10,
              fontSize: 12,
              color: "#1dc0cf",
            },
            axisTick: {
              show: false,
              // lineStyle: {
              //   color: "#1dc0cf",
              // },
            },
          },
        ],
        series: [
          {
            name: "数据",
            type: "line",

            showAllSymbol: true,

            symbol: "circle",
            symbolSize: 15,
            lineStyle: {
              normal: {
                color: "#00ca95",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: true,
              formatter: function (val) {
                return val.data;
              },
              position: "top",
              textStyle: {
                color: "#00ca95",
              },
            },

            itemStyle: {
              color: "#00ca95",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,202,149,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,202,149, 0.9)",
                shadowBlur: 20,
              },
            },
            data: this.getkey(this.gw3datavalue, "value"),
          },
        ],
      };
      option && myChart2.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart2.resize();
        },
        false
      );
    },
    map() {
      echarts.dispose(this.$refs.map);

      var myChart1 = echarts.init(this.$refs.map);
      myChart1.showLoading();
      myChart1.hideLoading();
      if (this.value == "中环内") {
        echarts.registerMap("HK", datt);
      }
      if (this.value == "张浦" && this.year == "2021") {
        echarts.registerMap("HK", datta);
      }
      if (this.value == "张浦" && this.year == "2022") {
        echarts.registerMap("HK", dattb);
      }

      // var that = this;
      var option = {
        title: {
          text: "",
          subtext: "",
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: function (val) {
            if (val.data != undefined) {
              if (val.componentIndex == 3) {
                return val.data.fromName;
              } else {
                return "";
              }
            } else {
              return "";
            }
          },
          borderColor: "#fff",
          backgroundColor: "rgba(0,0,0,0.3)",
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "HK",
          aspectScale: 0.85,
          layoutCenter: ["50%", "50%"], //地图位置
          layoutSize: "72%",
          itemStyle: {
            normal: {
              borderColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#00F6FF",
                  },
                  {
                    offset: 1,
                    color: "#fff",
                  },
                ],
                false
              ),
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 10,
            },
            emphasis: {
              areaColor: "#2AB8FF",
            },
          },
          select: {
            itemStyle: {
              areaColor: "#fff",
              color: "#fff",
            },
          },
        },
        series: [
          {
            selectedMode: false,
            type: "map",
            // map: "HK",
            mapType: "HK",
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "72%",
            zlevel: 2,
            selectedMode: false,
            zoom: 1, //当前视角的缩放比例
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2,
            },
            labelLayout: function (params) {
              if (params.text == "北区") {
                return {
                  x: params.rect.x + params.rect.width / 2,
                  y: params.rect.y + params.rect.height / 3,
                };
              }
              if (params.text == "南区") {
                return {
                  x: params.rect.x + params.rect.width / 1.3,
                  y: params.rect.y + params.rect.height / 4.7,
                };
              }
              if (params.text == "中区") {
                return {
                  x: params.rect.x + params.rect.width / 1.3,
                  y: params.rect.y + params.rect.height / 1.4,
                };
              }
            },
            label: {
              normal: {
                show: true,
                color: "#ccc",
                fontSize: 15,
                formatter: function (params) {
                  return params.name;
                },
              },
              emphasis: {
                show: true,
                color: "#fff",
              },
            },
            select: {
              itemStyle: {
                areaColor: "#2AB8FF",
                //color: '#2AB8FF'
              },
            },
            itemStyle: {
              // 未选中
              normal: {
                //areaColor: 'rgba(12,39,75,1)',
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#274d68", // 100% 处的颜色
                    },
                  ],
                  globalCoord: true, // 缺省为 false
                },

                borderColor: "#28F9FE",
                borderWidth: 1.5,
                shadowColor: "#276fce",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                opacity: 0.8,
              },
              emphasis: {
                areaColor: "#2AB8FF",
              },
            },
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 5,
            symbolSize: 10,
            rippleEffect: {
              //坐标点动画
              period: 3,
              scale: 5,
              brushType: "fill",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
                color: "#b3e2f2",
                fontWeight: "bold",
                fontSize: 15,
              },
            },

            data: this.dataa,
            itemStyle: {
              //坐标点颜色
              normal: {
                show: true,
                color: "#FA6400",
                shadowBlur: 30,
                shadowColor: "#fff",
              },
              //emphasis: {
              //    areaColor: '#f00'
              //}
            },
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            symbolSize: 5,
            rippleEffect: {
              //坐标点动画
              period: 3,
              scale: 5,
              brushType: "fill",
            },
            label: {
              normal: {
                show: false,
                position: "right",
                formatter: "{b}",
                color: "#b3e2f2",
                fontWeight: "bold",
                fontSize: 15,
              },
            },

            data: this.datab,
            itemStyle: {
              //坐标点颜色
              normal: {
                show: true,
                color: function (val) {
                  if (val.data != undefined) {
                    // console.log(val);
                    if (val.data.name == "莲花路泵站") {
                      return "#28F9FE";
                    } else {
                      return "#6DD400";
                    }
                  } else {
                    return "#6DD400";
                  }
                },
                shadowBlur: 20,
                shadowColor: "#fff",
              },
            },
          },

          //线 和 点
          {
            name: "",
            type: "lines",
            zlevel: 3, //设置这个才会有轨迹线的小尾巴
            //polyline: true,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.4,
              //color: '#fff', //流动点颜色
              // color:'red',
              symbol: "arrow",
              symbolSize: 6,
            },
            lineStyle: {
              type: "solid",
              color: "#fff", //线条颜色
              width: 0.5,
              curveness: 0.2,
              shadowColor: "#fff",
            },

            data: this.flowData,
          },
          {
            type: "lines",
            zlevel: 4,
            symbol: "circle",

            symbolSize: [5, 5],
            color: "#ff8003",
            opacity: 1,
            label: {
              show: true,
              padding: [5, 20],
              color: "#fff",
              backgroundColor: "#1a3961",
              borderColor: "#aee9fb",
              borderWidth: 2,
              borderRadius: 6,
              fontSize: 12,
              formatter: function (params) {
                var arr = [
                  "当年养护总量",
                  "管道：" + params.value[0] + "千米 ",
                  "井室：" + parseInt(params.value[1]) + "个 ",
                ];
                return arr.join("\n");
              },
              textStyle: {
                align: "left",
                lineHeight: 20,
              },
            },
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: 0.5,
              opacity: 1,
            },
            data: this.LableData,
          },
          {
            type: "lines",
            zlevel: 4,
            symbol: "circle",
            symbolSize: [5, 5],
            color: "#ff8003",
            opacity: 1,
            label: {
              show: true,
              padding: [5, 20],
              color: "#fff",
              backgroundColor: "#1a3961",
              borderColor: "#aee9fb",
              borderWidth: 2,
              borderRadius: 6,
              fontSize: 12,

              formatter: function (params) {
                var str = [
                  "{a|当年养护总量}",
                  "{b|管道 }" + params.value[0] + "千米 ",
                  "{c|井室}" + parseInt(params.value[1]) + "个 ",
                ];
                return str.join("\n");
              },
              textStyle: {
                align: "right",
                lineHeight: 20,
              },
              rich: {
                a: {
                  color: "#fff",
                  fontSize: 12,
                  align: "left",
                },
                b: {
                  color: "#fff",
                  fontSize: 12,
                  align: "left",
                },
                c: { color: "#fff", fontSize: 12, align: "left" },
              },
            },

            lineStyle: {
              type: "solid",
              color: "#fff",
              width: 0.5,
              opacity: 1,
            },
            data: this.LableData1,
          },
        ],
      };
      myChart1.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },
  },
};
</script>
<style scoped>
#home {
  background: url("../assets/DataPage2.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  color: #fff;
  display: flex;
}
#center {
  width: 45%;
  margin: 0 auto;
}
#center .center-title img {
  width: 2.5vw;
  margin-right: 0.5vw;
}
#left,
#right {
  width: 26%;
}

#left > div {
  width: 95%;
  height: calc(100% - 73vh);
  margin-left: 10%;
  position: relative;
}

#right > div {
  position: relative;
  width: 24vw;
  height: 28vh;
  margin-right: 10%;
  margin-bottom: 3vh;
}

.right:hover,
.left:hover {
  border-color: #87898e;
}
.rount,
.rounttwo {
  margin: 0 !important;
  height: 15.8vw !important;
  width: 15.8vw !important;
  border-radius: 50%;
  transform-style: preserve-3d;
  /* border: 1px solid red; */
  animation: add 10s linear infinite;
}
@keyframes add {
  0% {
    transform: rotateX(70deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(70deg) rotateZ(360deg);
  }
}
.gwc {
  position: relative;
  margin-top: 7vh;
}
.yyjg_gwyh3 {
  width: 95%;
  height: 27vh;
}
.gwb {
  height: 25vh !important;
  margin-top: 6%;
}
.planet,
.planettwo {
  position: absolute;
  top: -5.2vh;
  left: 5.4vw;
  width: 5vw;
  height: 10.4vh;
  /* transform: rotateX(90deg); */
  animation: animat1 10s linear infinite backwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gwba,
.gwbatwo {
  background: url("../assets/gwyhbg1.png") no-repeat;
  background-size: 100% 100%;
}
.gwbb {
  top: calc(7.9vw - 5.2vh);
  left: 13.3vw;
  background: url("../assets/gwyhbg2.png") no-repeat;
  background-size: 100% 100%;
}
.gwbbtwo {
  top: calc(7.9vw - 1.8vh);
  left: 13.3vw;
  background: url("../assets/gwyhbg2.png") no-repeat;
  background-size: 100% 100%;
}
.gwbc {
  top: calc(15.8vw - 5.2vh);
  background: url("../assets/gwyhbg3.png") no-repeat;
  background-size: 100% 100%;
}
.gwbctwo {
  top: calc(7.9vw - 1.8vh);
  left: -2.2vw;
  background: url("../assets/gwyhbg3.png") no-repeat;
  background-size: 100% 100%;
}

.gwbd {
  top: calc(7.9vw - 5.2vh);
  left: -2.5vw;
  background: url("../assets/01.png") no-repeat;
  background-size: 100% 100%;
}
@keyframes animat1 {
  0% {
    transform: rotateX(-90deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(-90deg) rotateY(360deg);
  }
}

.planet2,
.planet2two {
  position: absolute;
  top: -1vh;
  left: 7.4vw;
  width: 1vw;
  height: 2vh;
  transform: rotateX(90deg);
  animation: animat1 10s linear infinite backwards;
}
.gw-cion1 {
  top: 4.5vh;
  left: 13.35vw;
}
.gw-cion1two {
  top: 4.5vh;
  left: 13.3vw;
}
.gw-cion2 {
  top: 26vh;
  left: 13.35vw;
}
.gw-cion2two {
  top: 31.6vh;
}

.gw-cion3 {
  top: 26vh;
  left: 1.3vw;
}
.gw-cion3two {
  top: 5vh;
  left: 1.3vw;
}
.gw-cion4 {
  top: 4.5vh;
  left: 1.3vw;
}
.btn-groupkey {
  width: 4vw;
  position: absolute;
  top: 0;
  right: 5%;
}

.btn-sele {
  /* float: right; */
  width: 3.5vw;
  position: absolute;
  left: 5vw;
  z-index: 8;
}
.backhome {
  font-size: 0.8vw;
  width: 3vw;
  position: absolute;
  left: 1vw;
  top: 1vh;
  z-index: 8;
  color: #22d0dc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-sele >>> .el-input__inner {
  background: transparent;
  /* border-color: #22d0dc; */
  border: none;
  color: #22d0dc;
  padding: 0 5px !important;
  /* height: 35px;
  line-height: 35px; */
}

/* .center-title ul{
  display: flex;
    flex-direction: row;
    justify-content: space-evenly;
} */
#center-home {
  width: 100%;
  height: 100%;
  margin: 10vh auto auto auto;
  display: flex;
}
.center-title {
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.center-title li {
  display: flex;
  flex-wrap: nowrap;
}
.center-title li span {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
}
.center-title span b:first-child {
  color: #fff;
  font-size: 15px;
  font-weight: normal;
  margin: 0.2vh 0;
}
@font-face {
  font-family: Fonrnumber;
  src: url("../font/LCD2U.woff"), url("../font/LCD2U.eot"),
    url("../font/LCD2U.TTF");
}
.center-title li span b:nth-child(2) {
  font-size: 4vh;
  font-family: Fonrnumber;
}
.center-map {
  height: calc(100vh - 250px);
  position: relative;
  bottom: 3vh;
  width: 100%;
}

.week {
  position: absolute;
  left: 48%;
  top: 1.5vh;
  transform: translateX(-48%);
  color: rgb(7, 168, 234);
  font-size: 0.8vw;
  z-index: 999;
}
.jsa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 2vh;
}
.jsa ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.jsa ul li {
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  text-align: center;
  position: relative;
}
.jsa ul:nth-child(2) {
  display: flex;
  justify-content: center;
}
.jsa ul:nth-child(2) li {
  margin: 0 1.5vw;
}

.jsa ul li img {
  width: 100%;
  animation: rount 3.5s infinite linear;
}
@keyframes rount {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.jsa ul li span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8vw;
}
.dw {
  position: absolute;
  top: 1.8vh;
  right: 1vw;
  font-size: 13px;
  color: rgb(7, 168, 234);
}
.dwtwo {
  top: 3vh;
}
.btn-group {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}
.btn-group div {
  margin: 0 0.2vw;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: rgba(150, 150, 150, 0.4);
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(255 255 255 / 40%), inset 0 1px 1px rgb(0 0 0 / 10%);
}
.back {
  color: #22d0dc;
}
.roat {
  position: absolute !important;
  top: -2.6%;
  left: 20%;
  transform: translateX(-10%);
}
.gwa {
  position: relative;
}
.jsb {
  display: flex;
  padding-top: 3vh;
  height: 22vh !important;
  overflow: hidden;
}
.yuan {
  position: relative;
  top: 2vh;
}
.jsnum {
  position: absolute;
  left: 2%;
  bottom: 0;
  display: flex;
}
.jsnum span {
  display: inline-block;
  position: relative;
  margin: 0 1vw;
}
.jsnum span::after {
  content: "";
  width: 0.5vw;
  height: 0.5vw;
  background: #34c2f0;
  border-radius: 50%;
  position: absolute;
  left: -1vw;
  top: 50%;
  transform: translateY(-50%);
}
.jsnum span:nth-child(2)::after {
  background: #1d346d;
}
.jsc {
  padding-top: 3vh;
  height: 25vh !important;
}
.adad {
  position: relative;
}
</style>
