<template>
  <el-container >
    <el-aside width="200px">
      <SideBar :login="login" :administrator='administrator'/>
    </el-aside>
    <el-main>
      <router-view @change="changeS"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
  data(){
    return{
      login:false,
      administrator:'whisper'
    }
  },
  method:{
    changeS(data){
      this.login=true
      console.log(this.login)
      // this
    }
  }
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

</style>
