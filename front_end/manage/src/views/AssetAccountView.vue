<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="开户" name="first" >
      <el-form ref="ruleForm" :model="openAccount" label-width="80px" :rules="rules">
        <el-row>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="openAccount.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="openAccount.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>

        <el-form-item label="身份证号" prop="license">
          <el-input v-model="openAccount.license"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="openAccount.address" style="width: 500px"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="职业">
            <el-input v-model="openAccount.profession"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-select v-model="openAccount.education" placeholder="请选择学历">
              <el-option label="小学" value="小学"></el-option>
              <el-option label="初中" value="初中"></el-option>
              <el-option label="高中" value="高中"></el-option>
              <el-option label="大学专科" value="大学专科"></el-option>
              <el-option label="大学本科" value="大学本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-form-item label="工作单位">
          <el-input v-model="openAccount.company" style="width: 500px"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="电话号码" prop="phone">
            <el-input v-model="openAccount.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="openAccount.email"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="openAccount.password" autocomplete="off"></el-input>
        </el-form-item>        
        <el-form-item label="确认密码"  prop="confirm">
          <el-input type="password" v-model="openAccount.confirm" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">开户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="挂失" name="second">
      <el-form ref="ruleForm" :model="lossRegister" label-width="80px" :rules="rules">
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
          <el-button type="primary" @click="onSubmit">挂失</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="重新开户" name="third">
      <el-form ref="ruleForm" :model="reOpen" label-width="80px" :rules="rules" v-if="status">
        <el-form-item label="账户号" prop="account">
          <el-input v-model="reOpen.account" ></el-input>
        </el-form-item>  
        <el-form-item label="密码" prop="password">
          <el-input v-model="reOpen.password" ></el-input>
        </el-form-item>  
        <el-form-item label="身份证号" prop="license">
          <el-input v-model="reOpen.license" ></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="onSubmit">补办</el-button>
        </el-form-item>
      </el-form>

      <el-form ref="ruleForm" :model="reOpenAccount" label-width="80px" :rules="rules" v-else>
        <el-row>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="reOpenAccount.name" ></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="reOpenAccount.gender" >
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>

        <el-form-item label="身份证号" prop="license">
          <el-input v-model="reOpenAccount.license" ></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="reOpenAccount.address"></el-input>
        </el-form-item>
        <el-row>
          <el-form-item label="职业">
            <el-input v-model="reOpenAccount.profession"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-select v-model="reOpenAccount.education" placeholder="请选择学历">
              <el-option label="小学" value="小学"></el-option>
              <el-option label="初中" value="初中"></el-option>
              <el-option label="高中" value="高中"></el-option>
              <el-option label="大学专科" value="大学专科"></el-option>
              <el-option label="大学本科" value="大学本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-form-item label="工作单位">
          <el-input v-model="reOpenAccount.company"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="reOpenAccount.phone" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="reOpenAccount.email" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="reOpenAccount.password" ></el-input>
        </el-form-item>        
        <el-form-item label="确认密码" prop="confirm2">
          <el-input v-model="reOpenAccount.confirm" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">重新开户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="销户" name="fourth">
      <el-form ref="ruleForm" :model="closeAccount" label-width="80px" :rules="rules">
        <el-form-item label="账户号" prop="account">
          <el-input v-model="closeAccount.account" ></el-input>
        </el-form-item>  
        <el-form-item label="密码" prop="password">
          <el-input v-model="closeAccount.password" ></el-input>
        </el-form-item>  
        <el-form-item label="身份证号" prop="license">
          <el-input v-model="closeAccount.license" ></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="onSubmit">销户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane> 
    <el-tab-pane label="修改" name="fifth">
      <el-form ref="ruleForm" :model="modify" label-width="80px" :rules="rules">
        <el-form-item label="账户号">
            <el-input v-model="modify.account" prop="account"></el-input>
        </el-form-item>  
        <el-form-item label="密码类型">
            <el-radio-group v-model="modify.type">
            <el-radio label="登陆密码"></el-radio>
            <el-radio label="交易密码"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="原有密码">
            <el-input v-model="modify.oldPassword" prop="password"></el-input>
        </el-form-item>  
        <el-form-item label="新密码">
            <el-input  v-model="modify.newPassword" prop="password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
            <el-input  v-model="modify.confirm" prop="confirm3"></el-input>
        </el-form-item>  
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="存取款" name="sixth">
      <el-form ref="ruleForm" :model="lossRegister" label-width="80px" :rules="rules">
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
          <el-button type="primary" @click="onSubmit">挂失</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    name:"AssetAccountView",
    data() {
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
	          var reg=/^A\d{5}/;
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
        var validatePass4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.modify.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'second',
        openAccount: {
          name: '',
          gender: '',
          license: '',
          address: '',
          profession: '',
          education:'',
          company:'',
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
          name: '',
          gender: '',
          license: '',
          address: '',
          profession: '',
          education:'',
          company:'',
          password:'',
          confirm:'',
          phone:'',
          email:''
        },
        modify:{
          type: '',
          account:'',
          oldPassword:'',
          newPassword:'',
          confirm:''
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
            { validator: validatePass, trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          confirm2: [
            { validator: validatePass3, trigger: 'blur' }
          ],
          confirm3: [
            { validator: validatePass4, trigger: 'blur' }
          ],

          account: [
            { validator: validateAccount, trigger: 'blur' }

          ]
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
    width:180px
}
</style>>