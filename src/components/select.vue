<template >
  <div id="btn-groupkey">
    <el-select
      @change="selectqh"
      class="btn-groupkey"
      v-model="value"
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
</template>
<script>
import { child_F2 } from "../ajax";
export default {
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
      value: "中环内",
      areaid: [],
    };
  },
  created() {
    child_F2({ PID: this.Data.arr[0].AREAID }).then((res) => {
      eval(res.d).forEach((item) => {
        this.areaid.push(item.AREAID);
      });
    });
  },

  methods: {
    selectqh() {
      this.areaid = [];
      if (this.value == "中环内") {
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

      this.$emit("mTest", this.value, this.areaid);
    },
  },
};
</script>
<style  scoped>
#btn-groupkey {
  width: 5vw;
  position: fixed;
  right: 5%;
  top: 0;
  z-index: 99999;
}
#btn-groupkey >>> .el-input__inner {
  width: 100%;
  background: transparent;
  border: none;
  color: #166db3;
  padding: 0 5px;
}
</style>