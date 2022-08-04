<template>
  <div class="star">
    <div
      v-for="(item, index) in starNumber"
      :key="index"
      class="star-item"
      ref="star-item"
      :style="`animationDelay:${index * 100}ms;width:${Math.round(
        index * 1
      )}px;height:${Math.round(index * 1)}px;`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "star-component",
  props: {
    starNumber: {
      type: Number,
      default: 0,
    },
    w: {
      type: Number,
      default: 0,
    },
    h: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.randomStar();
  },
  methods: {
    randomStar() {
      let starArr = this.$refs["star-item"];

      starArr.forEach((item) => {
        item.style.top = Math.floor(Math.random() * 280 + 1) + "px";
        item.style.left = Math.floor(Math.random() * 1920) + "px";
      });
    },
  },
};
</script>

<style  scoped>
.star {
  width: 100%;
  height: 250px;
  position: relative;
}
.star-item {
  position: absolute;
  width: 4px;
  height: 4px;
  display: inline-block;
  animation: staring 2s infinite linear;
  background: rgb(136, 204, 217);
  border-radius: 50%;
}
@keyframes staring {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
