<template>
  <!-- <div id="app" > -->
    <el-container >
      <el-aside width="200px">
        <SideBar />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  <!-- </div> -->
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-input{
    width:200px
}

</style>
