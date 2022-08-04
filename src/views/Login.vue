<template>
  <div id="Login" class="Login">
    <div class="zong">
      <img class="logo" src="../assets/kssw-logo.png" alt />

      <h1 class="title">昆山排水管网养护运营监管</h1>
      <div class="detail">
        <h1 style="color: #fff; font-weight: normal; margin-top: 2vh">
          用户登录
        </h1>
        <div class="user">
          <div>
            <el-input
              style="background: transparent"
              placeholder="请输入账号"
              v-model="inputone"
            >
              <i slot="prefix" class="el-input__icon el-icon-user"></i
            ></el-input>
            <el-input
              style="background: transparent"
              placeholder="请输入密码"
              type="password"
              v-model="input"
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i
            ></el-input>
          </div>
          <el-button
            style="width: 100%; margin: 1vw 0"
            @keyup.enter="login"
            @click="login"
            type="primary"
          >
            登 录</el-button
          >
        </div>
      </div>
    </div>
    <!-- <div class="star-bg">
      <Start :starNumber="20" :w="10" :h="10"></Start>
    </div> -->
    <div class="mask" v-show="maskShow">
      <Loading />
    </div>
    <canvas v-if="canvas" id="canvas"></canvas>
  </div>
</template>
<script>
import md5 from "js-md5";
// import Start from "../components/start/index.vue";
import Loading from "../components/loading/loading.vue";
import { getUserinfo, Parentarea_F } from "../ajax/index";
import { Mtoken } from "../ajax/mobile.js";
export default {
  components: {
    // Start,
    Loading,
  },

  data() {
    return {
      maskShow: false,
      inputone: "",
      input: "",
      canvas: true,
    };
  },
  beforeDestroy() {
    this.canvas = false;
  },
  created() {
    this.maskShow = true;

    setTimeout(() => {
      this.maskShow = false;
    }, 1500);
  },
  mounted() {
    if (this.canvas) {
    }
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight),
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 2500; //星星数量

    var canvas2 = document.createElement("canvas"),
      ctx2 = canvas2.getContext("2d");
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, "#CCC");
    gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
    gradient2.addColorStop(1, "transparent");

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    }

    var Star = function () {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 18;
      //星星大小
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 500000;
      //星星移动速度
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
    };

    Star.prototype.draw = function () {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );
      this.timePassed += this.speed;
    };

    for (var i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.5; //尾巴
      ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }

    animation();
  },
  methods: {
    login() {
      let password = md5(this.input).substring(8, 24).toUpperCase();
      if (this.input == "" && this.inputone == "") {
        this.$message({
          message: "请输入账号或密码",
          type: "warning",
        });
      } else if (this.input == "") {
        this.$message({
          message: "请输入密码",
          type: "warning",
        });
      } else if (this.inputone == "") {
        this.$message({
          message: "请输入账号",
          type: "warning",
        });
      } else {
        getUserinfo({
          pwd: password,
          uid: this.inputone,
        }).then((res) => {
          if (eval(res.d) != undefined) {
            Mtoken({ userName: this.inputone, password: password }).then(
              (res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
              }
            );
            this.$message({
              message: "登陆成功",
              type: "success",
            });
            this.list = eval(res.d);
            console.log(this.list);
            localStorage.setItem("companyid", JSON.stringify(this.list[0]));

            Parentarea_F({ UserID: this.list[0].AREAID }).then((res) => {
              let data = eval(res.d);
              localStorage.setItem("data", JSON.stringify(data));
            });
            this.$router.push("/home");
            setTimeout(() => {
              location.reload();
            }, 200);
          } else {
            this.$message({
              message: "账号或密码错误",
              type: "warning",
            });
          }
        });
      }
    },
  },
};
</script>


<style scoped>
.title {
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 12px;
  font-family: cursive;
  margin: 20px 0;
  text-shadow: 2px 2px 2px grey;
}
p {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
span {
  margin: 0 50px 10px 0;
}
#miss {
  width: 20px;
  position: relative;
  left: 20px;
}
.Login {
  width: 100%;
  height: 100vh;
  background: url(../assets/Login_bg.png) no-repeat center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
  user-select: none;
}

.logo {
  height: 100px;
  margin-top: 65px;
}

.zong {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.detail {
  width: 25vw;
  margin: auto;
  height: 50vh;
  /* margin: calc(100% - 650px) auto; */

  background: url("../assets/textbgi.png") no-repeat;
  background-size: 100% 100%;
}
input {
  width: 300px;
  text-align: center;
  border: 1px solid rgb(0, 86, 174);
  background: rgba(255, 255, 255, 0.6);
  margin: 10px 40px 20px 40px;
  height: 40px;
}
button {
  width: 300px;
  background: #0087d9;
  color: #fff;
  border: none;
  height: 40px;
  cursor: pointer;
}
.jt .jd {
  width: 20px;
  position: absolute;
  left: 20px;
  top: 20px;
}
.center {
  margin: 3vw auto;
  color: #fff;
  background: url(../assets/textbgi.png) no-repeat;
  background-size: 100% 100%;
  width: 400px;
  height: 400px;

  padding: 40px 0;
}
::v-deep .ant-tabs-tabpane {
  margin: auto;
  width: auto !important;
}
.button:hover {
  background: #0087d9;
}
.user {
  width: 67%;
  height: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.user div {
  display: flex;
  height: 16vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
.user >>> .el-input__inner {
  background: rgba(255, 255, 255, 0.6);
  color: #333;
  border: 1px solid rgb(67, 93, 120);
}
.user >>> .el-input__inner:focus-within {
  border-color: #0087d9;
  color: #333;
}
.detail h1 {
  position: relative;
  top: 5vh;
}
canvas {
  width: 100%;
  height: 100vh;
}
</style>
