<template>
  <div id="hometwo">
    <main>
      <div class="home one">
        <div class="title">
          <span>单位/次</span>
          <span
            ><b
              :style="
                xc1num == 0
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              @click="xc1(0)"
              >当年</b
            ><b
              @click="xc1(1)"
              :style="
                xc1num == 1
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >本季度</b
            ></span
          >
        </div>
        <div v-if="value == '张浦'" style="display: flex; height: 9vw">
          <div class="left-cont">
            <div>
              <img src="../assets/img/03.png" alt="" />
              <img src="../assets/img/04.png" alt="" />
              <span class="num left1">{{ xcdl1[0].value }}</span>
              <span class="num left2">{{ xcdl1[1].value }}</span>
            </div>
            <div>
              <img src="../assets/img/01.png" alt="" />
              <img src="../assets/img/02.png" alt="" />
              <span class="num left3">{{ xcdl1[2].value }}</span>
              <span class="num left4">{{ xcdl1[3].value }}</span>
            </div>
          </div>
          <div class="right-cont">
            <ul>
              <li>{{ xcdl1[0].name }}</li>
              <li>{{ xcdl1[1].name }}</li>
              <li>{{ xcdl1[2].name }}</li>
              <li>{{ xcdl1[3].name }}</li>
            </ul>
          </div>
        </div>
        <div class="zhn" v-else>
          <div class="box">
            <div class="zhn-a gao1">{{ xcdl1[0].value }}</div>
            <div class="zhn-b di1">{{ xcdl1[0].name }}</div>
          </div>
          <div class="box">
            <div class="zhn-a gao2">{{ xcdl1[1].value }}</div>
            <div class="zhn-b di2">{{ xcdl1[2].name }}</div>
          </div>
          <div class="box">
            <div class="zhn-a gao3">{{ xcdl1[2].value }}</div>
            <div class="zhn-b di3">{{ xcdl1[2].name }}</div>
          </div>
        </div>
      </div>
      <div class="home two">
        <div class="title">
          <span>单位/次</span>
          <span
            ><b
              @click="xc2(0)"
              :style="
                xc2num == 0
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >当年</b
            ><b
              @click="xc2(1)"
              :style="
                xc2num == 1
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >本季度</b
            ></span
          >
        </div>
        <div ref="rightchart" class="hometwoecharts"></div>
      </div>
      <div class="home three">
        <div class="title">
          <span>单位/次</span>
          <span
            ><b
              @click="xc3(0)"
              :style="
                xc3num == 0
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >当年</b
            ><b
              @click="xc3(1)"
              :style="
                xc3num == 1
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >本季度</b
            ></span
          >
        </div>
        <div class="hometwoecharts add">
          <div class="tree tree1">
            <span class="treename">{{ leftqt[0].name }}</span>
            <span class="repat treebg1">{{ leftqt[0].value }}</span>
          </div>
          <div class="tree tree2">
            <span class="treename">{{ leftqt[1].name }}</span>
            <span class="repat treebg2">{{ leftqt[1].value }}</span>
          </div>
          <div class="tree tree3">
            <span class="treename">{{ leftqt[2].name }}</span>
            <span class="repat treebg3">{{ leftqt[2].value }}</span>
          </div>
          <div v-if="value == '张浦'" class="tree tree4">
            <span class="treename">{{ leftqt[3].name }}</span>
            <span class="repat treebg4">{{ leftqt[3].value }}</span>
          </div>
        </div>
      </div>
      <div class="center planone">
        <div ref="centerchart" class="centerchart"></div>
      </div>
      <div class="center plantwo">
        <div class="plantwo-tit">
          <ul>
            <li>巡查时长</li>
            <li>巡查任务</li>
            <li>巡查片区</li>
            <li>巡查人</li>
            <li>创建时间</li>
            <li>结束时间</li>
          </ul>
        </div>
        <div class="plantwo-cont">
          <vue-seamless-scroll style="height: 100%" :data="list">
            <div>
              <ul v-for="(item, index) in list" :key="index">
                <li>
                  {{ item.time + "分钟" }}
                </li>
                <li>{{ item.EETSNAME }}</li>
                <li>{{ item.AREANAME }}</li>
                <li>
                  {{ item.USERNAME }}
                </li>
                <li>{{ item.STARTTIME }}</li>
                <li>{{ item.FINISHTIME }}</li>
              </ul>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="right rightone">
        <div class="rightone-tit">
          <span
            ><b
              @click="xc4(0)"
              :style="
                xc2num1 == 0
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >当年</b
            ><b
              @click="xc4(1)"
              :style="
                xc2num1 == 1
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >本季度</b
            ></span
          >
          <span>单位/个</span>
        </div>
        <div class="right-content">
          <div class="left-content">
            <p
              :style="allpan == -1 ? 'color:#FFBE44;' : ''"
              @click="allnum('合计', -1)"
            >
              合计
            </p>
            <p
              :style="allpan == index ? 'color:#FFBE44;' : ''"
              @click="allnum(item.name, index)"
              v-for="(item, index) in leftxq"
              :key="index"
            >
              {{ item.name }}
            </p>
          </div>
          <div class="right-cont">
            <div>
              <span>进行中</span><span>{{ allnum1 }}</span>
            </div>
            <div>
              <span>已完成</span><span>{{ allnum2 }}</span>
            </div>
            <div>
              <span>未完成</span><span>{{ allnum3 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right righttwo">
        <div class="rightone-tit">
          <span
            ><b
              @click="xc5(0)"
              :style="
                xc2num2 == 0
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >当年</b
            ><b
              @click="xc5(1)"
              :style="
                xc2num2 == 1
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >本季度</b
            ></span
          >
          <span>单位/天</span>
        </div>
        <div v-if="value == '中环内'" class="xctime">
          <div class="xct xct1">
            <span>{{ arr5num[0] && arr5num[0].value }}</span>
            <span>{{ arr5num[0] && arr5num[0].name }}</span>
          </div>
          <div class="xct xct2">
            <span>{{ arr5num[2] && arr5num[2].value }}</span>
            <span>{{ arr5num[2] && arr5num[2].name }}</span>
          </div>
          <div class="xct xct3">
            <span>{{ arr5num[1] && arr5num[1].value }}</span>
            <span>{{ arr5num[1] && arr5num[1].name }}</span>
          </div>
        </div>
        <div class="xctimetwo" v-else>
          <div>
            <span>{{ arr5num[0] && arr5num[0].name }}</span>
            <span class="a1">{{ arr5num[0] && arr5num[0].value }}</span>
          </div>
          <div>
            <span>{{ arr5num[1] && arr5num[1].name }}</span>
            <span class="a2">{{ arr5num[1] && arr5num[1].value }}</span>
          </div>
          <div>
            <span>{{ arr5num[2] && arr5num[2].name }}</span>
            <span class="a3">{{ arr5num[2] && arr5num[2].value }}</span>
          </div>
          <div>
            <span>{{ arr5num[3] && arr5num[3].name }}</span>
            <span class="a4">{{ arr5num[3] && arr5num[3].value }}</span>
          </div>
        </div>
      </div>
      <div class="right rightthree">
        <div class="rightone-tit">
          <span
            ><b
              @click="xc6(0)"
              :style="
                xc2num3 == 0
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >当年</b
            ><b
              @click="xc6(1)"
              :style="
                xc2num3 == 1
                  ? 'color:#3dc5f2;border-bottom:1px solid #3dc5f2;'
                  : ''
              "
              >本季度</b
            ></span
          >
          <span>单位/个</span>
        </div>
        <div ref="btmech" class="bottom-ech"></div>
      </div>
    </main>
  </div>
</template>
<script>
import store from "@/store";
import {
  child_F2,
  PatrolsTable,
  PatrolsStatistical,
  PatrolsNumber,
  PatrolsTime,
  PatrolsProblem,
} from "../ajax";
import { getTaskStreetStatistics } from "../ajax/mobile.js";
import * as echarts from "echarts";
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
      week: this.$moment(
        this.$moment().week(this.$moment().week()).startOf("week").valueOf()
      ).format("YYYY/MM/DD"),
      list: [],
      xc1num: 0,
      xc2num: 0,
      xc3num: 0,
      id: [],
      leftname: [],
      start: this.$moment()
        .year(this.$moment().year())
        .startOf("year")
        .format("YYYY-MM-DD"),
      end: this.$moment()
        .year(this.$moment().year())
        .endOf("year")
        .format("YYYY-MM-DD"),
      // 道路
      xcdl1: [
        {
          name: "中区",
          value: 0,
        },
        {
          name: "南区",
          value: 0,
        },
        {
          name: "北区",
          value: 0,
        },
      ],

      // xcdl2: {},
      // xcdl3: {},
      // xcdl4: {
      //   name: "",
      // },
      //小区
      leftxq: [],
      //其他
      leftqt: {},

      //centerimg
      img1: require("../assets/img/xcTj_icon1.png"),
      img2: require("../assets/img/xcTj_icon2.png"),
      img3: require("../assets/img/xcTj_icon3.png"),
      img4: require("../assets/img/xcTj_icon4.png"),
      centerzztname: ["道路", "小区", "企事单位", "其他"],
      centerzztnum: [0, 0, 0, 0],
      xc2num1: 0,
      xc2num2: 0,
      xc2num3: 0,
      sql: "",
      //right
      allnum1: 0,
      allnum2: 0,
      allnum3: 0,
      allpan: -1,
      arr5num: [],
      btmleft: [],
      btmright: [],
    };
  },
  computed: {
    obj() {
      return store.state.list;
    },
  },
  watch: {
    obj(val) {
      if (val[2].indexOf("block") != -1) {
        store.state.pan = 0;
        this.rigchart();
        this.arr(this.start, this.end);
        this.arr2(this.start, this.end);
        this.arr3(this.start, this.end);
        this.arr4(this.start, this.end);
        this.arr5(this.start, this.end);
        this.arr6(this.start, this.end);
        this.center();
        this.centerzzt();
      }
    },
    areaID() {
      this.center();
      this.arr(this.start, this.end);
      this.arr2(this.start, this.end);
      this.arr3(this.start, this.end);
      this.arr4(this.start, this.end);
      this.arr5(this.start, this.end);
      this.arr6(this.start, this.end);

      this.rigchart();
      this.centerzzt();
    },
  },

  mounted() {
    this.center();
    this.btmchart();
  },
  created() {
    child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
      eval(res.d).forEach((item) => {
        this.id.push(item.AREAID);
      });
      this.arr(this.start, this.end);
      this.arr2(this.start, this.end);
      this.arr3(this.start, this.end);
      this.arr4(this.start, this.end);
      this.arr5(this.start, this.end);
      this.arr6(this.start, this.end);

      this.centerzzt();
    });
  },
  methods: {
    getkey(array, keyName) {
      if (Object.prototype.toString.call(array) == "[object Array]") {
        return array.map((item) => {
          return item[keyName];
        });
      }
    },
    center() {
      PatrolsTable({
        StartTime: this.$moment(
          this.$moment().week(this.$moment().week()).startOf("week").valueOf()
        ).format("YYYY/MM/DD"),
        Endtime: this.$moment().format("YYYY/MM/DD "),
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        this.list = eval(res.d);
        var format = "HH:mm:ss";
        this.list.map((item) => {
          item.time = this.$moment(item.FINISHTIME.split(" ")[1], format).diff(
            this.$moment(item.STARTTIME.split(" ")[1], format),
            "minutes"
          );
        });
      });
    },
    arr(start, end) {
      getTaskStreetStatistics({
        startDate: start,
        endDate: end,
        areaIDs: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        if (res.data) {
          var list = res.data.typeAreas;
        }
        if (this.value == "中环内") {
          (this.xcdl1 = [
            {
              name: "中区",
              value: 0,
            },
            {
              name: "南区",
              value: 0,
            },
            {
              name: "北区",
              value: 0,
            },
          ]),
            list.forEach((item) => {
              if (item.type == "道路") {
                item.details.forEach((idx) => {
                  this.xcdl1.forEach((val) => {
                    if (idx.areaName == val.name) {
                      val.value = idx.count;
                    }
                  });
                });
              }
            });
        } else {
          (this.xcdl1 = [
            {
              name: "镇东",
              value: 0,
            },
            {
              name: "镇西",
              value: 0,
            },
            {
              name: "南港",
              value: 0,
            },
            {
              name: "大市",
              value: 0,
            },
          ]),
            list.forEach((item) => {
              if (item.type == "道路") {
                item.details.forEach((idx) => {
                  this.xcdl1.forEach((val) => {
                    if (idx.areaName == val.name) {
                      val.value = idx.count;
                    }
                  });
                });
              }
            });
        }
      });
    },
    arr2(start, end) {
      getTaskStreetStatistics({
        startDate: start,
        endDate: end,
        areaIDs: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        if (res.data) {
          var list = res.data.typeAreas;
        }
        if (this.value == "中环内") {
          (this.leftxq = [
            {
              name: "中区",
              value: 0,
            },
            {
              name: "南区",
              value: 0,
            },
            {
              name: "北区",
              value: 0,
            },
          ]),
            list.forEach((item) => {
              if (item.type == "小区") {
                item.details.forEach((idx) => {
                  this.leftxq.forEach((val) => {
                    if (idx.areaName == val.name) {
                      val.value = idx.count;
                    }
                  });
                });
              }
            });
        } else {
          (this.leftxq = [
            {
              name: "镇东",
              value: 0,
            },
            {
              name: "镇西",
              value: 0,
            },
            {
              name: "南港",
              value: 0,
            },
            {
              name: "大市",
              value: 0,
            },
          ]),
            list.forEach((item) => {
              if (item.type == "小区") {
                item.details.forEach((idx) => {
                  this.leftxq.forEach((val) => {
                    if (idx.areaName == val.name) {
                      val.value = idx.count;
                    }
                  });
                });
              }
            });
        }

        this.rigchart();
      });
    },

    arr3(start, end) {
      getTaskStreetStatistics({
        startDate: start,
        endDate: end,
        areaIDs: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        if (res.data) {
          var list = res.data.typeAreas;
        }
        if (this.value == "中环内") {
          (this.leftqt = [
            {
              name: "中区",
              value: 0,
            },
            {
              name: "南区",
              value: 0,
            },
            {
              name: "北区",
              value: 0,
            },
          ]),
            list.forEach((item) => {
              if (item.type == "其他") {
                item.details.forEach((idx) => {
                  this.leftqt.forEach((val) => {
                    if (idx.areaName == val.name) {
                      val.value = idx.count;
                    }
                  });
                });
              }
            });
        } else {
          (this.leftqt = [
            {
              name: "镇东",
              value: 0,
            },
            {
              name: "镇西",
              value: 0,
            },
            {
              name: "南港",
              value: 0,
            },
            {
              name: "大市",
              value: 0,
            },
          ]),
            list.forEach((item) => {
              if (item.type == "其他") {
                item.details.forEach((idx) => {
                  this.leftqt.forEach((val) => {
                    if (idx.areaName == val.name) {
                      val.value = idx.count;
                    }
                  });
                });
              }
            });
        }
      });
    },
    xc1(val) {
      this.xc1num = val;
      if (val == 0) {
        (this.start = this.$moment()
          .year(this.$moment().year())
          .startOf("year")
          .format("YYYY-MM-DD")),
          (this.end = this.$moment()
            .year(this.$moment().year())
            .endOf("year")
            .format("YYYY-MM-DD")),
          this.arr(this.start, this.end);
      } else {
        this.start = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.end = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.arr(this.start, this.end);
      }
    },
    xc2(val) {
      this.xc2num = val;
      if (val == 0) {
        (this.start = this.$moment()
          .year(this.$moment().year())
          .startOf("year")
          .format("YYYY-MM-DD")),
          (this.end = this.$moment()
            .year(this.$moment().year())
            .endOf("year")
            .format("YYYY-MM-DD")),
          this.arr2(this.start, this.end);
      } else {
        this.start = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.end = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.arr2(this.start, this.end);
      }
    },
    xc3(val) {
      this.xc3num = val;
      if (val == 0) {
        (this.start = this.$moment()
          .year(this.$moment().year())
          .startOf("year")
          .format("YYYY-MM-DD")),
          (this.end = this.$moment()
            .year(this.$moment().year())
            .endOf("year")
            .format("YYYY-MM-DD")),
          this.arr3(this.start, this.end);
      } else {
        this.start = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.end = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.arr3(this.start, this.end);
      }
    },
    xc4(val) {
      this.xc2num1 = val;
      if (val == 0) {
        (this.start = this.$moment()
          .year(this.$moment().year())
          .startOf("year")
          .format("YYYY-MM-DD")),
          (this.end = this.$moment()
            .year(this.$moment().year())
            .endOf("year")
            .format("YYYY-MM-DD")),
          this.arr4(this.start, this.end);
      } else {
        this.start = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.end = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.arr4(this.start, this.end);
      }
    },
    xc5(val) {
      this.xc2num2 = val;
      if (val == 0) {
        (this.start = this.$moment()
          .year(this.$moment().year())
          .startOf("year")
          .format("YYYY-MM-DD")),
          (this.end = this.$moment()
            .year(this.$moment().year())
            .endOf("year")
            .format("YYYY-MM-DD")),
          this.arr5(this.start, this.end);
      } else {
        this.start = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.end = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.arr5(this.start, this.end);
      }
    },
    xc6(val) {
      this.xc2num3 = val;
      if (val == 0) {
        (this.start = this.$moment()
          .year(this.$moment().year())
          .startOf("year")
          .format("YYYY-MM-DD")),
          (this.end = this.$moment()
            .year(this.$moment().year())
            .endOf("year")
            .format("YYYY-MM-DD")),
          this.arr6(this.start, this.end);
      } else {
        this.start = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .startOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.end = this.$moment(
          this.$moment()
            .quarter(this.$moment().quarter())
            .endOf("quarter")
            .valueOf()
        ).format("YYYY/MM/DD");
        this.arr6(this.start, this.end);
      }
    },

    arr4(start, end) {
      this.allnum1 = 0;
      this.allnum2 = 0;
      this.allnum3 = 0;
      PatrolsNumber({
        StartTime: start,
        Endtime: end,
        Typepq: this.areaID ? this.areaID.join(",") : this.id.join(","),
        Areasql: this.sql,
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.STATUS == "0") {
            this.allnum1 = item.STATUSCOUNT;
          } else if (item.STATUS == "1") {
            this.allnum2 = item.STATUSCOUNT;
          } else if (item.STATUS == "2") {
            this.allnum3 = item.STATUSCOUNT;
          }
        });
      });
    },
    allnum(val, index) {
      this.allpan = index;
      if (index == -1) {
        this.sql = "";
      } else {
        this.sql = " and AREANAME='" + val + "'";
      }
      this.arr4(this.start, this.end);
    },

    arr5(start, end) {
      this.arr5num = [];
      PatrolsTime({
        StartTime: start,
        Endtime: end,
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        if (this.value == "中环内") {
          this.arr5num = [
            {
              name: "中区",
              value: 0,
            },
            {
              name: "南区",
              value: 0,
            },
            {
              name: "北区",
              value: 0,
            },
          ];
        } else {
          this.arr5num = [
            {
              name: "镇东",
              value: 0,
            },
            {
              name: "镇西",
              value: 0,
            },
            {
              name: "南港",
              value: 0,
            },
            {
              name: "大市",
              value: 0,
            },
          ];
        }

        eval(res.d).forEach((item) => {
          this.arr5num.forEach((val) => {
            if (item.SOURCE != "") {
              if (item.SOURCE == val.name) {
                val.value = parseInt(parseInt(Number(item.HJ) / 60) / 24);
              }
            }
          });
        });
      });
    },
    arr6(start, end) {
      if (this.value == "中环内") {
        this.btmleft = [
          { name: "中区", value: 0 },
          { name: "南区", value: 0 },
          { name: "北区", value: 0 },
        ];
        this.btmright = [
          { name: "中区", value: 0 },
          { name: "南区", value: 0 },
          { name: "北区", value: 0 },
        ];
      } else {
        this.btmleft = [
          {
            name: "镇东",
            value: 0,
          },
          {
            name: "镇西",
            value: 0,
          },
          {
            name: "南港",
            value: 0,
          },
          {
            name: "大市",
            value: 0,
          },
        ];
        this.btmright = [
          {
            name: "镇东",
            value: 0,
          },
          {
            name: "镇西",
            value: 0,
          },
          {
            name: "南港",
            value: 0,
          },
          {
            name: "大市",
            value: 0,
          },
        ];
      }
      PatrolsProblem({
        StartTime: start,
        Endtime: end,
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        if (eval(res.d) != undefined) {
          eval(res.d).forEach((item) => {
            this.btmleft.forEach((val,index) => {
              if (item.AREANAME == val.name) {
                if (item.FACILITYTYPE == "0") {
                  val.value += Number(item.PROBLEMCOUNT);
                }  
                if (item.FACILITYTYPE == "1") {
               this.btmright[index].value += Number(item.PROBLEMCOUNT);
              }
              }
            });
           
          });
        }
        this.btmchart();
      });
    },
    //center
    centerzzt() {
      this.centerzztnum = [];
      PatrolsStatistical({
        StartTime: this.$moment().format("YYYY") + "/01/01",
        Endtime: this.$moment().format("YYYY") + "/12/31",
        AreaID: this.areaID ? this.areaID.join(",") : this.id.join(","),
      }).then((res) => {
        eval(res.d).forEach((item) => {
          if (item.CONSTYPE == "道路") {
            this.centerzztnum[0] = item.PUPMCOUNT;
          } else if (item.CONSTYPE == "小区") {
            this.centerzztnum[1] = item.PUPMCOUNT;
          } else if (item.CONSTYPE == "企事单位") {
            this.centerzztnum[2] = item.PUPMCOUNT;
          } else {
            this.centerzztnum[3] = item.PUPMCOUNT;
          }
        });
        this.centerchart();
      });
    },
    //echarts
    rigchart() {
      echarts.dispose(this.$refs.rightchart);
      var myChart1 = echarts.init(this.$refs.rightchart);
      var colorList = ["#3E75FE", "#1DD6DB", "#FF8B27", "#663DF8"];
      var option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.7)", // 背景
          padding: [8, 10], //内边距
          extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);", //添加阴影
          textStyle: {
            color: "#fff", //设置文字颜色
            align: "left", //左对齐
          },
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["50%", "70%"],
            labelLine: {
              normal: {
                length: 15,
                length2: 20,
              },
            },
            minAngle: 10,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              color: function (params) {
                return colorList[params.dataIndex];
              },
            },
            label: {
              show: true,
              position: "outer",
              // ·圆点
              backgroundColor: "auto", //圆点颜色，auto：映射的系列色
              color: "white",

              distanceToLabelLine: 0, //圆点到labelline距离
              borderRadius: 4.5,
              padding: [4.5, -4.5, 4.5, -4.5],
              formatter: "{a|{b}：}{b|{c}}",
              rich: {
                a: {
                  fontSize: 12,
                  padding: [0, 0, 0, 10],
                },
                b: {
                  fontSize: 12,
                  padding: [0, 10, 0, 0],
                },
              },
            },
            data: this.leftxq,
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
    centerchart() {
      var icon_xctj = [
        "image://" + this.img1,
        "image://" + this.img2,
        "image://" + this.img3,
        "image://" + this.img4,
      ];
      echarts.dispose(this.$refs.centerchart);
      var colorRgb = [
        "rgba(179, 29, 26, ",
        "rgba(62, 76, 237,",
        "rgba(170, 115, 31,",
        "rgba(62, 154, 181,",
      ];
      var color1 = ["#c2403f", "#4a53f6", "#d39037", "#4ab8d9"];
      var colorshadow = ["#4d1a15", "#373798", "#593f14", "#123c52"];
      var CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          var xAxisPoint = shape.xAxisPoint;
          var c0 = [shape.x - 28, shape.y];
          var c1 = [shape.x + 28, shape.y];
          var c2 = [xAxisPoint[0] + 28, xAxisPoint[1]];
          var c3 = [xAxisPoint[0] - 28, xAxisPoint[1]];
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath();
          ctx.stroke();
        },
      });

      //右边阴影
      var CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          var xAxisPoint = shape.xAxisPoint;
          var c1 = [shape.x + 28, shape.y]; //左上
          var c2 = [xAxisPoint[0] + 28, xAxisPoint[1]]; //左下
          var c3 = [xAxisPoint[0] + 48, xAxisPoint[1] - 15]; //右下
          var c4 = [shape.x + 48, shape.y - 15]; //右上
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
          ctx.stroke();
        },
      });

      //定点方块
      var CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          var c1 = [shape.x - 28, shape.y + 0]; //左下
          var c2 = [shape.x + 27, shape.y + 0]; //右下
          var c3 = [shape.x + 49, shape.y - 15]; //右上
          var c4 = [shape.x - 4, shape.y - 15]; //左上
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
          ctx.stroke();
        },
      });

      echarts.graphic.registerShape("CubeLeft", CubeLeft);
      echarts.graphic.registerShape("CubeRight", CubeRight);
      echarts.graphic.registerShape("CubeTop", CubeTop);
      echarts.dispose(this.$refs.centerchart);
      var myChart1 = echarts.init(this.$refs.centerchart);
      myChart1.showLoading();
      var option = {
        //backgroundColor: "rgba(72, 84, 96,1.0)",
        grid: {
          left: "10%",
          top: "23%",
          right: "10%",
          bottom: "18%",
        },
        tooltip: {
          trigger: "item",
          //formatter: "{b} : {c}",
          formatter: function (params) {
            if (params.seriesIndex == 1) {
              return (
                '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
                colorRgb[params.dataIndex] +
                "1)" +
                ';"></span>' +
                params.name +
                "：" +
                params.data
              );
            } else {
              return "";
            }
          },
          backgroundColor: "rgba(0,0,0,0.3)",
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          data: this.centerzztname,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
            },
          },
          offset: 0,
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 12,
          },
        },
        yAxis: {
          type: "value",
          show: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: "white",
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 16,
          },
        },
        series: [
          {
            type: "custom",
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 11,
                color: "rgba(103, 123, 145, 1)",
                offset: [5, -15],
              },
            },
            renderItem: function (params, api) {
              var location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api: api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: color1[params.dataIndex],
                        },
                        {
                          offset: 1,
                          color: colorRgb[params.dataIndex] + "1)",
                        },
                      ]),
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api: api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: colorshadow[params.dataIndex],
                        },
                        {
                          offset: 1,
                          color: colorshadow[params.dataIndex],
                        },
                      ]),
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api: api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: color1[params.dataIndex],
                        },
                        {
                          offset: 1,
                          color: colorRgb[params.dataIndex] + "1)",
                        },
                      ]),
                    },
                  },
                ],
              };
            },
            data: this.centerzztnum,
          },

          {
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 20,
                color: "#fff",
                //formatter: function (params) {
                //    return '{number' + params.dataIndex + '|' + params.data + '} '
                //},
                offset: [12, -20],
                rich: {
                  number0: {
                    color: colorRgb[0] + "1)",
                    fontSize: 12,
                  },
                  number1: {
                    color: colorRgb[1] + "1)",
                    fontSize: 12,
                  },
                  number2: {
                    color: colorRgb[2] + "1)",
                    fontSize: 12,
                  },
                  number3: {
                    color: colorRgb[3] + "1)",
                    fontSize: 12,
                  },
                },
              },
            },
            itemStyle: {
              color: "transparent",
            },
            data: this.centerzztnum,
          },
          {
            name: "",
            type: "pictorialBar",
            z: 3,
            symbol: function (data, params) {
              return icon_xctj[params.dataIndex];
            },
            symbolPosition: "end",
            symbolSize: [50, 50],
            symbolOffset: [12, -50],
            itemStyle: {
              shadowColor: "rgba(0,0,0,.3)",
              shadowBlur: 10,
              shadowOffsetY: 1,
              shadowOffsetX: 1,
            },
            data: this.centerzztnum,
          },
        ],
      };
      myChart1.hideLoading();
      myChart1.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          myChart1.resize();
        },
        false
      );
    },

    btmchart() {
      echarts.dispose(this.$refs.btmech);
      var myChart1 = echarts.init(this.$refs.btmech);
      var option = {
        grid: {
          left: "5%",
          top: "30%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        legend: {
          data: [
            {
              name: "雨水口",
              icon: "circle",
              textStyle: {
                color: "#fff",
              },
            },
            {
              name: "检查井",
              icon: "circle",
              textStyle: {
                color: "#fff",
              },
            },
          ],
          top: "7%",
          left: "2%",
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: [
          {
            type: "category",
            data: this.getkey(this.btmleft, "name"),
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              show: true,
              margin: 14,
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",

            nameTextStyle: {
              color: "#7d838b",
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 12,
                color: "#3DC5F2",
              },
            },
            axisLine: {
              show: true,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#1E2C4F",
              },
            },
            data: this.getkey(this.btmleft, "value"),
          },
          {
            type: "value",
            show: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#7d838b",
              },
            },
          },
        ],
        series: [
          {
            name: "雨水口",
            type: "bar",
            data: this.getkey(this.btmleft, "value"),
            barWidth: "20",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(255,37,117,1)",
                    },
                    {
                      offset: 0.5,
                      color: "rgba(0,133,245,1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,133,245,1)",
                    },
                  ],
                  globalCoord: false,
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 12,
                color: "#34DCFF",
              },
            },
          },
          {
            name: "检查井",
            type: "bar",
            data: this.getkey(this.btmright, "value"),
            barWidth: "20",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(224,117,94,1)",
                    },
                    {
                      offset: 0.2,
                      color: "rgba(157,138,77,1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(67,133,90,1)",
                    },
                  ],
                  globalCoord: false,
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 12,
                color: "#34DCFF",
              },
            },
            barGap: "0",
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
#hometwo {
  background: url("../assets/DataPage4.png") no-repeat;
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
  background: url("../assets/img/Xctj_bg.png") no-repeat;
  background-size: 90%;
  background-position: bottom center;
  top: 5vh;
}
.centerchart {
  width: 43vw;
  height: 17vw;
}
.plantwo {
  /* background: red; */
  width: 40vw;
  top: 50.5vh;
}
.title {
  margin-left: 1vw;
  text-align: left;
  color: #06adef;
  height: 4vh;
  line-height: 4vh;
}
.title span:nth-child(2) {
  font-size: 0.8vw;
  color: #fff;
  position: relative;
  left: 25%;
}
.title span b,
.rightone-tit span b {
  cursor: pointer;
  margin: 0 0.5vw;
}

.rightone-tit span {
  color: #027bd9;
}
.rightone-tit {
  text-align: right;
}
.rightone-tit span:nth-child(1) {
  font-size: 0.8vw;
  color: #fff;
  position: relative;
  right: 25%;
}

.snow {
  background: transparent !important;
}
.round {
  position: relative;
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
  color: #d57145;
}
.plantwo-tit ul li:nth-child(5) {
  background: #374ba1;
  color: #687fe7;
}
.plantwo-tit ul li:nth-child(6) {
  background: #725d20;
  color: #bd932c;
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
  height: 26vh;
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

.left-cont {
  color: #fff;
  width: 70%;
  height: 20vh;
  display: flex;
  flex-direction: column;
}
.right-cont {
  color: #fff;
  width: 15%;
  height: 100%;
  font-size: 0.5vw;
}
.right-cont ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.right-cont ul li {
  position: relative;
}
.right-cont ul li::after {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0.8vw;
  height: 0.8vw;
}
.right-cont ul li:nth-child(1)::after {
  content: "";
  display: block;
  border-radius: 50%;
  background: #216ded;
}
.right-cont ul li:nth-child(2)::after {
  content: "";
  display: block;

  border-radius: 50%;
  background: #d17632;
}
.right-cont ul li:nth-child(3)::after {
  content: "";
  display: block;

  border-radius: 50%;
  background: #42a176;
}
.right-cont ul li:nth-child(4)::after {
  content: "";
  display: block;

  border-radius: 50%;
  background: #9449da;
}

.left-cont div {
  width: 100%;

  height: 8vh;
}
.left-cont div img {
  width: 6vw;
  height: 12vh;
}
.left-cont div img {
  position: relative;
}

.left-cont div img:nth-child(1) {
  left: 2vw;
}
.num {
  position: absolute;
  text-align: center;
  width: 4vw;
  height: 4vw;
  font-size: 0.8vw;

  line-height: 4vw;
}

.left1 {
  left: 5.3vw;
  top: 5.5vh;
}
.left2 {
  left: 9.6vw;
  top: 5.5vh;
}
.left3 {
  left: 5.3vw;
  top: 13.6vh;
}
.left4 {
  left: 9.6vw;
  top: 13.5vh;
}
.hometwoecharts {
  width: 100%;
  height: 20vh;
  position: relative;
  background-image: url("../assets/img/YYJG_XCXQ.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 38%;
}
.add {
  background-image: url("../assets/img/YYJG_XCQT_bg.png");
  background-repeat: no-repeat;
  background-size: 80% 100%;
  position: relative;
}
.tree {
  width: 8vw;
  height: 9vh;
  border-radius: 0.5vw;
  text-align: center;
  color: #ffff;
  position: absolute;
}
.tree1 {
  left: 5vw;
  top: 3vh;
}
.tree2 {
  left: 5vw;
  top: 10vh;
}
.tree3 {
  left: 11vw;
  top: 4vh;
}
.tree4 {
  left: 11vw;
  top: 11vh;
}
.tree span {
  width: 70%;
  height: 50%;
  display: inline-block;
  background-size: 100% 100%;
}
.treename {
  height: 20% !important;
}
.repat {
  background-repeat: no-repeat;
  line-height: 4.5vh;
}
.treebg1 {
  background-image: url("../assets/img/YYJG_XCQT_PQ_bg5.png");
}
.treebg2 {
  background-image: url("../assets/img/YYJG_XCQT_PQ_bg3.png");
}
.treebg3 {
  background-image: url("../assets/img/YYJG_XCQT_PQ_bg2.png");
}
.treebg4 {
  background-image: url("../assets/img/YYJG_XCQT_PQ_bg4.png");
}
.opacity {
  opacity: 0;
}
.right-content {
  width: 100%;
  height: 20vh;
  display: flex;
}
.right-content div {
  width: 50%;
  height: 100%;
}
.right-content .left-content {
  background-image: url("../assets/img/xcrw_img_1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  color: white;
  font-size: 0.8vw;
}
.right-content .left-content p {
  margin: 0.2vh 0;
  cursor: pointer;
}
.right-content .left-content p:nth-child(1) {
  position: relative;
  top: 1vh;
  margin: 2vh 0;
}
.right-content .right-cont {
  padding-top: 2vh;
}
.right-content .right-cont span {
  width: 4vw;
}
.right-content .right-cont > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8vw;
}
.right-content .right-cont div:nth-child(1) {
  color: #c48b36;
}
.right-content .right-cont div:nth-child(2) {
  color: #5aca91;
}
.right-content .right-cont div:nth-child(3) {
  color: #dd3f33;
}
.right-cont div {
  background-repeat: no-repeat;
  background-position: center;
  height: 20%;
  margin: 1.2vh 0;
  width: 100%;
  background-size: 80%;
}
.right-cont div:nth-child(1) {
  background-image: url("../assets/img/xcrw_img_jxz.png");
}
.right-cont div:nth-child(2) {
  background-image: url("../assets/img/xcrw_img_ywc.png");
}
.right-cont div:nth-child(3) {
  background-image: url("../assets/img/xcrw_img_wwc.png");
}
.zhn {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  color: #fff;
}

.box {
  width: 30%;
}
.zhn-a {
  height: 74%;
  width: 100%;
  background-size: 70%;
  background-position: center bottom;
  background-repeat: no-repeat;
  font-size: 1.2vw;
}
.gao1 {
  background-image: url("../assets/img/xcdlz1_zp1.png");
}
.gao2 {
  background-image: url("../assets/img/xcdlz1_zp3.png");
}
.gao3 {
  background-image: url("../assets/img/xcdlz1_zp5.png");
}
.zhn-b {
  height: 20%;
}
.zhn-a,
.zhn-b {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.di1 {
  background: url("../assets/img/xcdlz1_zp2.png") no-repeat;
  background-position: center;
  background-size: 80%;
}
.di2 {
  background: url("../assets/img/xcdlz1_zp4.png") no-repeat;
  background-size: 80%;
  background-position: center;
}
.di3 {
  background: url("../assets/img/xcdlz1_zp6.png") no-repeat;
  background-size: 80%;
  background-position: center;
}
.xctime,
.xctimetwo {
  width: 100%;
  height: 20vh;
  display: flex;
}
.a1 {
  color: #c37f31;
}
.a2 {
  color: #1f6fd9;
}
.a3 {
  color: #9860d5;
}
.a4 {
  color: #2aa577;
}
.xctimetwo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1vh;
}
.xctimetwo div span:nth-child(1) {
  font-size: 1vw;
  color: #fff;
  margin-top: -1vh;
}
.xctimetwo div span {
  margin-left: 3vw;
}
.xctimetwo div {
  width: 35%;
  margin-left: 11%;
  height: 10vh;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.xctimetwo div:nth-child(1) {
  background-image: url("../assets/img/r03.png");
}
.xctimetwo div:nth-child(2) {
  background-image: url("../assets/img/r04.png");
}
.xctimetwo div:nth-child(3) {
  background-image: url("../assets/img/r01.png");
}
.xctimetwo div:nth-child(4) {
  background-image: url("../assets/img/r02.png");
}
.xctime div {
  width: 30%;
  margin-left: 3%;
  height: 100%;
}
.xct {
  color: #fff;
  font-size: 1vw;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  background-size: 100%;
}

.xct span:nth-child(2) {
  margin-top: 9vh;
}
.xct1 {
  background-image: url("../assets/img/xcscy2_zp1.png");
}
.xct2 {
  background-image: url("../assets/img/xcscy2_zp2.png");
}
.xct3 {
  background-image: url("../assets/img/xcscy2_zp3.png");
}
.bottom-ech {
  width: 100%;
  height: 20vh;
}
</style>
