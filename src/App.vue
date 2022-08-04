<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      iconidx: 0,
      background: {
        backgroundColor: "#d8dbe1",
      },
    };
  },
  created() {
    this.Data.arr = JSON.parse(localStorage.getItem("data"));
    this.Data.companyid = JSON.parse(localStorage.getItem("companyid"));
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}


</style>
