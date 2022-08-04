<template>
  <div class="home">
    <div class="container demo-1">
      <div id="slider" class="sl-slider-wrapper">
        <div class="sl-slider">
          <div
            class="sl-slide bg-1"
            data-orientation="horizontal"
            data-slice1-rotation="-25"
            data-slice2-rotation="-25"
            data-slice1-scale="2"
            data-slice2-scale="2"
          >
            <div class="sl-slide-inner">
              <HelloWorld :value="valkey" :areaID="areaid" />
              <div id="btn-groupkey">
                <el-select
                  @change="selectqh"
                  class="btn-groupkey"
                  v-model="valkey"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>

          <div
            class="sl-slide bg-2"
            data-orientation="vertical"
            data-slice1-rotation="10"
            data-slice2-rotation="-15"
            data-slice1-scale="1.5"
            data-slice2-scale="1.5"
          >
            <div class="sl-slide-inner">
              <Hometwo :value="valkey" :areaID="areaid" />
              <div id="btn-groupkey">
                <el-select
                  @change="selectqh"
                  class="btn-groupkey"
                  v-model="valkey"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>

          <div
            class="sl-slide bg-3"
            data-orientation="horizontal"
            data-slice1-rotation="3"
            data-slice2-rotation="3"
            data-slice1-scale="2"
            data-slice2-scale="1"
          >
            <div class="sl-slide-inner">
              <Homethree :value="valkey" :areaID="areaid" />
              <div id="btn-groupkey">
                <el-select
                  @change="selectqh"
                  class="btn-groupkey"
                  v-model="valkey"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>

          <div
            class="sl-slide bg-4"
            data-orientation="vertical"
            data-slice1-rotation="-5"
            data-slice2-rotation="25"
            data-slice1-scale="2"
            data-slice2-scale="1"
          >
            <div class="sl-slide-inner">
              <Homefour :value="valkey" :areaID="areaid" />
            </div>
          </div>
        </div>

        <nav id="nav-arrows" class="nav-arrows">
          <span class="nav-arrow-prev">Previous</span>
          <span class="nav-arrow-next">Next</span>
        </nav>

        <nav id="nav-dots" class="nav-dots">
          <span class="nav-dot-current"></span>
          <span></span>
          <span></span>
          <span></span>
        </nav>
      </div>
    </div>

    <div @click="back" class="back">
      <img
        style="width: 1vw; vertical-align: -0.5vh"
        src="../assets/return_icon.png"
        alt=""
      />
      返回
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/home.vue";
import Hometwo from "@/components/hometwo.vue";
import Homethree from "@/components/homethree.vue";
import Homefour from "@/components/homefour.vue";
import store from "../store/index";
import { child_F2 } from "../ajax";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Hometwo,
    Homethree,
    Homefour,
  },
  data() {
    return {
      options: [
        {
          value: "中环内",
          label: "中环内",
        },
        {
          value: "张浦",
          label: "张浦",
        },
      ],
      valkey: "中环内",
      areaid: [],
      random: Math.random() * 100,
    };
  },

  created() {
    child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
      eval(res.d).forEach((item) => {
        this.areaid.push(item.AREAID);
      });
    });
    this.random = Math.random() * 100;
  },
  computed: {
    obj() {
      return store.state.list;
    },
  },
  watch: {
   
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    selectqh() {
      this.areaid = [];
      if (this.valkey == "中环内") {
        child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.areaid.push(item.AREAID);
          });
        });
      } else {
        child_F2({ PID: this.Data.arr[1].AREAID }).then((res) => {
          eval(res.d).forEach((item) => {
            this.areaid.push(item.AREAID);
          });
        });
      }
    },
  },
};
</script>
<style scoped>
#btn-groupkey {
  width: 4vw;
  position: absolute;
  right: 5%;
  top: 0;
  z-index: 1;
  color: #22d0dc;
}
#btn-groupkey >>> .el-input__inner {
  width: 100%;
  background: transparent;
  border: none;
  color: #22d0dc;
  padding: 0 5px;
}
.back {
  width: 5vw;
  color: #22d0dc;
  position: fixed;
  top: 1vh;
  right: 0%;
  z-index: 99999;
  cursor: pointer;
}
</style>
