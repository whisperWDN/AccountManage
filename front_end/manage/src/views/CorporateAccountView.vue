<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="开户" name="first">
      <el-form ref="form" :model="form" label-width="200px">

        <el-form-item label="法人股票账户号码">
          <el-input v-model="form.stock_account"></el-input>
        </el-form-item>
        <el-form-item label="法人注册登记号码">
          <el-input v-model="form.registration"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码">
          <el-input v-model="form.business_license"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="法人姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="法人身份证号">
            <el-input v-model="form.license"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="法人家庭住址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="法人联系电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="授权人姓名">
            <el-input v-model="form.authorizer_name"></el-input>
          </el-form-item>
          <el-form-item label="授权人身份证号">
            <el-input v-model="form.authorizer_license"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="授权人家庭住址">
          <el-input v-model="form.authorizer_address"></el-input>
        </el-form-item>
        <el-form-item label="授权人联系电话">
          <el-input v-model="form.authorizer_phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>        
        <el-form-item label="确认密码">
          <el-input v-model="form.confirm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">开户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="挂失" name="second">
      <el-form ref="form" :model="form2" label-width="80px">
        <el-form-item label="账户号">
          <el-input v-model="form2.number"></el-input>
        </el-form-item>  
        <el-form-item label="密码">
          <el-input v-model="form2.password"></el-input>
        </el-form-item>  
        <el-form-item label="身份证号">
          <el-input v-model="form2.license"></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="onSubmit">挂失</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="重新开户" name="third">
      <el-form ref="form" :model="form2" label-width="80px" v-if="status">
        <el-form-item label="账户号">
          <el-input v-model="form2.number"></el-input>
        </el-form-item>  
        <el-form-item label="密码">
          <el-input v-model="form2.password"></el-input>
        </el-form-item>  
        <el-form-item label="身份证号">
          <el-input v-model="form2.license"></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="onSubmit">补办</el-button>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="200px" v-else>

        <el-form-item label="法人股票账户号码">
          <el-input v-model="form.stock_account"></el-input>
        </el-form-item>
        <el-form-item label="法人注册登记号码">
          <el-input v-model="form.registration"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码">
          <el-input v-model="form.business_license"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="法人姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="法人身份证号">
            <el-input v-model="form.license"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="法人家庭住址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="法人联系电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="授权人姓名">
            <el-input v-model="form.authorizer_name"></el-input>
          </el-form-item>
          <el-form-item label="授权人身份证号">
            <el-input v-model="form.authorizer_license"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="授权人家庭住址">
          <el-input v-model="form.authorizer_address"></el-input>
        </el-form-item>
        <el-form-item label="授权人联系电话">
          <el-input v-model="form.authorizer_phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>        
        <el-form-item label="确认密码">
          <el-input v-model="form.confirm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">开户</el-button>
        </el-form-item>
      </el-form>

    </el-tab-pane>
    <el-tab-pane label="销户" name="fourth">
      <el-form ref="form" :model="form2" label-width="80px">
        <el-form-item label="账户号">
          <el-input v-model="form2.number"></el-input>
        </el-form-item>  
        <el-form-item label="密码">
          <el-input v-model="form2.password"></el-input>
        </el-form-item>  
        <el-form-item label="身份证号">
          <el-input v-model="form2.license"></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="onSubmit">销户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    name:"CorporateAccountView",
    data() {
      return {
        activeName: 'second',
        form: {
          stock_account : '',
          registration: '',
          business_license: '',
          address: '',
          profession: '',
          education:'',
          company:'',
          password:'',
          confirm:'',
          phone:'',
          email:'',
          gender:'',
          authorizer_name:'',
          authorizer_license:'',
          authorizer_phone:'',
          authorizer_address:''

        },
        form2:{
          license: '',
          number:'',
          password:''
        },
        status:false
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>

<style scoped>
.el-input{
    width:200px
}
</style>>