<template>
  <div>
    <el-col>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <span>管理员</span>
          <div v-if="login">
            <span>{{administrator}}</span>
            <a @click="closeA">注销</a>
          </div>
          <div v-else>
            <router-link to="/login">登录/注册</router-link>
          </div>
        </el-menu-item>
        
        <el-sub-menu index="2">
          <template #title>
            <span slot="title">证券账户</span>
          </template>
          <el-menu-item index="2-1" @click="hrefToSA">普通账户</el-menu-item>

          <el-menu-item index="2-2" @click="hrefToCA">法人账户</el-menu-item>

          <el-menu-item  @click="hrefToCS">
            <span slot="title" >审核</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>资金账户</template>
          <el-menu-item index="3-1" @click="hrefToAA">账户管理</el-menu-item>

          <el-menu-item index="3-2" @click="hrefToCheckA">审核</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </el-col>
  </div>
</template>

<script>
import App from '../App.vue'
export default {
    name:"SideBar",
    data(){
      return {

        administrator:'',
      }
    },
    props:{
      login:Boolean,
      administrator:String,
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      closeA(){
        this.login = false
        this.administrator = ''
      },
      hrefToSA(){
        this.$router.push({ path:'/SecuritiesAccount'})
      },
      hrefToCA(){
        this.$router.push({ path:'/CorporateAccount'})
      },
      hrefToAA(){
        this.$router.push({ path:'/AssetAccount'})
      },
      hrefToCS(){
        this.$router.push({ path:'/CheckS'})
      },
      hrefToCheckA(){
        this.$router.push({ path:'/CheckA'})
      }
    },
    mounted(){
      // bus.$on('login', val => {
      //   this.login = val
      // })
      // bus.$on('administrator', val => {
      //   this.administrator = val
      // })
    }
}
</script>

<style scoped>
.el-menu{
  height: 700px;
}
</style>
