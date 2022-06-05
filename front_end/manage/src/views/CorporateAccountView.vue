<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="开户" name="first">
      <el-form ref="openAccountForm" :model="openAccount" label-width="200px" :rules="rules">

        <el-form-item label="法人股票账户号码">
          <el-input v-model="openAccount.stock_account" ></el-input>
        </el-form-item>
        <el-form-item label="法人注册登记号码">
          <el-input v-model="openAccount.registration"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码">
          <el-input v-model="openAccount.business_license"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="法人姓名" prop="name">
            <el-input v-model="openAccount.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="openAccount.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

        </el-row>
        <el-form-item label="法人家庭住址" prop="address">
          <el-input v-model="openAccount.address" style="width: 600px"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="法人身份证号" prop="license">
            <el-input v-model="openAccount.license"></el-input>
          </el-form-item>
          <el-form-item label="法人联系电话" prop="phone">
            <el-input v-model="openAccount.phone"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="授权人姓名">
            <el-input v-model="openAccount.authorizer_name"></el-input>
          </el-form-item>
          <el-form-item label="授权人身份证号" prop="license">
            <el-input v-model="openAccount.authorizer_license"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="授权人家庭住址">
          <el-input v-model="openAccount.authorizer_address" style="width: 600px"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="授权人联系电话" prop="phone">
            <el-input v-model="openAccount.authorizer_phone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="openAccount.email" ></el-input>
          </el-form-item>
        </el-row>

        <el-form-item label="密码" prop="password">
          <el-input v-model="openAccount.password" type="password"></el-input>
        </el-form-item>        
        <el-form-item label="确认密码" prop="confirm">
          <el-input v-model="openAccount.confirm" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="open('openAccountForm')">开户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="挂失" name="second">
      <el-form ref="lossRegisterForm" :model="lossRegister" label-width="80px" :rules="rules">
        <el-form-item label="账户号" prop="account">
          <el-input v-model="lossRegister.account" ></el-input>
        </el-form-item>  
        <el-form-item label="密码" prop="password">
          <el-input v-model="lossRegister.password" ></el-input>
        </el-form-item>  
        <el-form-item label="身份证号" prop="license">
          <el-input v-model="lossRegister.license" ></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="loss('lossRegisterForm')">挂失</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="重新开户" name="third">
      <el-form ref="reOpenForm" :model="reOpen" label-width="80px" :rules="rules" v-if="status">
        <el-form-item label="账户号" prop="account">
          <el-input v-model="reOpen.account"></el-input>
        </el-form-item>  
        <el-form-item label="密码" prop="password">
          <el-input v-model="reOpen.password" type="password"></el-input>
        </el-form-item>  
        <el-form-item label="身份证号" prop="license">
          <el-input v-model="reOpen.license"></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="pre_reopen('reOpenForm')">补办</el-button>
        </el-form-item>
      </el-form>
      <el-form ref="reOpenAccountForm" :model="reOpenAccount" label-width="200px" :rules="rules" v-else>

        <el-form-item label="法人股票账户号码">
          <el-input v-model="reOpenAccount.stock_account"></el-input>
        </el-form-item>
        <el-form-item label="法人注册登记号码">
          <el-input v-model="reOpenAccount.registration"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码">
          <el-input v-model="reOpenAccount.business_license"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="法人姓名" prop="name">
            <el-input v-model="reOpenAccount.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="reOpenAccount.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

        </el-row>
        <el-form-item label="法人家庭住址" >
          <el-input v-model="reOpenAccount.address" style="width: 600px"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="法人身份证号" prop="license">
            <el-input v-model="reOpenAccount.license"></el-input>
          </el-form-item>
          <el-form-item label="法人联系电话" prop="phone">
            <el-input v-model="reOpenAccount.phone"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="授权人姓名" prop="name">
            <el-input v-model="reOpenAccount.authorizer_name"></el-input>
          </el-form-item>
          <el-form-item label="授权人身份证号" prop="license">
            <el-input v-model="reOpenAccount.authorizer_license"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="授权人家庭住址" >
          <el-input v-model="reOpenAccount.authorizer_address" style="width: 600px"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="授权人联系电话" prop="phone">
            <el-input v-model="reOpenAccount.authorizer_phone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="reOpenAccount.email"></el-input>
          </el-form-item>
        </el-row>

        <el-form-item label="密码" prop="password">
          <el-input v-model="reOpenAccount.password" type="password"></el-input>
        </el-form-item>        
        <el-form-item label="确认密码" prop="confirm2">
          <el-input v-model="reOpenAccount.confirm" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="reopen('reOpenAccountForm')">重新开户</el-button>
        </el-form-item>
      </el-form>

    </el-tab-pane>
    <el-tab-pane label="销户" name="fourth">
      <el-form ref="closeAccountForm" :model="closeAccount" label-width="80px" :rules="rules">
        <el-form-item label="账户号" prop="account">
          <el-input v-model="closeAccount.account"></el-input>
        </el-form-item>  
        <el-form-item label="密码" prop="password">
          <el-input v-model="closeAccount.password"></el-input>
        </el-form-item>  
        <el-form-item label="身份证号" prop="license">
          <el-input v-model="closeAccount.license"></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="close('closeAccountForm')">销户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
var validateMobilePhone = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('手机号不可为空'));
	} else {
	  if (value !== '') { 
	    var reg=/^1[3456789]\d{9}$/;
	    if(!reg.test(value)){
	      callback(new Error('请输入有效的手机号码'));
	    }
	  }
	  callback();
	}
};

var validateIDCard = (rule, value, callback)=> {
	if (value && (!(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))) {
	  callback(new Error('身份证号码不规范'))
	  } else {
	    callback()
	  }
	};

var validateEmail = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('请输入邮箱'));
	} else {
	  if (value !== '') { 
	    var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	    if(!reg.test(value)){
	    callback(new Error('请输入有效的邮箱'));
	    }
	  }
	  callback();
	}
};

var validateAccount = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('请输入账户号'));
	  } else {
	    if (value !== '') { 
	      var reg=/^B\d{5}/;
	      if(!reg.test(value)){
	        callback(new Error('请正确填写账户号'));
	      }
	    }
	    callback();
	  }
};
var validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
	  if (value !== '') { 
	    var reg=/[\w,_]{6,20}/;
	    if(!reg.test(value)){
	      callback(new Error('请输入有效的密码'));
	    }
	  }
    callback();
    }
};
  export default {
    name:"CorporateAccountView",
    data() {

      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.openAccount.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.reOpenAccount.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'second',
        openAccount: {
          stock_account:'',
          registration:'',
          business_license:'',
          name: '',
          gender: '',
          license: '',
          address: '',
          authorizer_name:'',
          authorizer_license:'',
          authorizer_address:'',
          authorizer_phone:'',
          password:'',
          confirm:'',
          phone:'',
          email:''
        },
        lossRegister:{
          license: '',
          account:'',
          password:''
        },
        closeAccount:{
          license: '',
          account:'',
          password:''
        },
        reOpen:{
          license: '',
          account:'',
          password:''
        },
        reOpenAccount: {
          stock_account:'',
          registration:'',
          business_license:'',
          name: '',
          gender: '',
          license: '',
          address: '',
          authorizer_name:'',
          authorizer_license:'',
          authorizer_address:'',
          authorizer_phone:'',
          password:'',
          confirm:'',
          phone:'',
          email:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          license: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },

            { validator: validateIDCard, trigger: 'blur' }
          ],
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          phone: [
            { validator: validateMobilePhone, trigger: 'blur' }
          ],
          password: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          confirm2: [
            { validator: validatePass3, trigger: 'blur' }
          ],

          account: [
            { required: true,validator: validateAccount, trigger: 'blur' }

          ]
        },
        status:true
      };
    },
    methods: {
      open(formName){
        this.$refs[formName].validate(valid =>{
          if(valid){
            this.$http.post('/security/co_register',this.$qs.stringify(this.openAccount))
              .then(response => {
                alert(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }else{
            alert("表单还未完成");
          }
        })
      },
      loss(formName){
        this.$refs[formName].validate(valid =>{
          if(valid){
              this.$http.post('/security/co_lost',this.$qs.stringify(this.lossRegister))
                .then(response => {
                  console.log(response.data);
                })
              .catch(function (error) {
              console.log(error);
            });
          }else{
            alert("表单还未完成");
          }
        })
      },
      pre_reopen(formName){
        this.$refs[formName].validate(valid =>{
          if(valid){
            this.$http.post('/security/co_re_register',this.$qs.stringify(this.reOpen))
              .then(response => {
                console.log(response.data);
                this.status = true
              })
              .catch(function (error) {
                console.log(error);
            });
          }else{
            alert("表单还未完成");
          }
        })
      },
      reopen(formName){
        this.$refs[formName].validate(valid =>{
          if(valid){
            this.$http.post('/security/co_re_register2',this.$qs.stringify(this.reOpenAccount))
              .then(response => {
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }else{
            alert("表单还未完成");
          }
        })
      },
      close(){
        this.$refs[formName].validate(valid =>{
          if(valid){
            this.$http.post('/security/co_delete',this.$qs.stringify(this.closeAccount))
              .then(response => {
                console.log(response.data);
                })
              .catch(function (error) {
                console.log(error);
              }); 
          }else{
            alert("表单还未完成");
          }
        })
      }
    }
  };
</script>

<style scoped>
.el-input{
    width:200px
}
</style>>