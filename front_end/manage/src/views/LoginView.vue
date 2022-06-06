<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="first" >
      <el-form ref="LoginForm" :model="Login" label-width="80px" >
        <el-form-item label="用户名">
          <el-input v-model="Login.username" ></el-input>
        </el-form-item>  
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="Login.password" ></el-input>
        </el-form-item> 
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item> 
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second">
      <el-form ref="RegisterForm" :model="Register" label-width="80px" :rules="rules">
        <el-row>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="Register.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="Register.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>

        <el-form-item label="身份证号" prop="license">
          <el-input v-model="Register.license"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="Register.address" style="width: 500px"></el-input>
        </el-form-item>

        <el-row>
          <el-form-item label="电话号码" prop="phone">
            <el-input v-model="Register.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="Register.email"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="Register.password" autocomplete="off"></el-input>
        </el-form-item>        
        <el-form-item label="确认密码"  prop="confirm">
          <el-input type="password" v-model="Register.confirm" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register('RegisterForm')">注册</el-button>
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
    name:"LoginView",

    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.Register.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'first',
        Register: {
          name: '',
          gender:'',
          license:'',
          address:'',
          phone:'',
          email:'',
          password:'',
          confirm:'',
        },
        Login:{
          username:'',
          password:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          license: [
            {required: true,validator: validateIDCard, trigger: 'blur' }
          ],
          email: [
            {required: true,validator: validateEmail, trigger: 'blur' }
          ],
          phone: [
            {required: true,validator: validateMobilePhone, trigger: 'blur' }
          ],
          password: [
            {required: true,validator: validatePass, trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePass2, trigger: 'blur' }
          ],

        },
      };
    },
    methods: {
      login(){
        this.$http.post('/login',this.$qs.stringify(this.Login))
          .then(response => {
            if(response.data['answer']==='ok'){
              this.$store.commit('changeLogState',true)
              this.$store.commit('setAdministrator','whisper')
            }else{
              alert(response.data['answer']);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
     },
     register(formName){
        this.$refs[formName].validate(valid =>{
          if(valid){
            this.$http.post('/register',this.$qs.stringify(this.Register))
              .then(response => {
                if(response.data['answer']==='ok'){
                  alert("注册成功");
                  this.activeName = "first"
                }else{
                  alert(response.data['answer']);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }else{
            alert("表单还未完成");
          }
        })
      },
     }
  };
</script>

<style scoped>
.el-input{
    width:200px
}
</style>>