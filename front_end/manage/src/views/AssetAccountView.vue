<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="开户" name="first" >
      <el-form ref="ruleForm" :model="openAccount" label-width="200px" :rules="rules">

        <el-form-item label="证券账户号" prop="account">
          <el-input v-model="openAccount.account"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="openAccount.password" autocomplete="off"></el-input>
        </el-form-item>      

        <el-form-item label="身份证号" prop="license">
          <el-input v-model="openAccount.license"></el-input>
        </el-form-item>

        <el-form-item label="资金账户登录密码"  prop="password">
          <el-input type="password" v-model="openAccount.loginPassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="重复密码"  prop="confirm">
          <el-input type="password" v-model="openAccount.confirm" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="资金账户交易密码"  prop="password">
          <el-input type="password" v-model="openAccount.tradePassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="重复密码">
          <el-input type="password" v-model="openAccount.confirm2" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="open">开户</el-button>
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
          <el-button type="primary" @click="loss">挂失</el-button>
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
          <el-button type="primary" @click="pre_reopen">补办</el-button>
        </el-form-item>
      </el-form>

      <el-form ref="ruleForm" :model="reOpenAccount" label-width="200px" :rules="rules">

        <el-form-item label="证券账户号" prop="account">
          <el-input v-model="reOpenAccount.account"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="reOpenAccount.password" autocomplete="off"></el-input>
        </el-form-item>      

        <el-form-item label="身份证号" prop="license">
          <el-input v-model="reOpenAccount.license"></el-input>
        </el-form-item>

        <el-form-item label="资金账户登录密码"  prop="password">
          <el-input type="password" v-model="reOpenAccount.loginPassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="重复密码"  prop="confirm2">
          <el-input type="password" v-model="reOpenAccount.confirm" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="资金账户交易密码"  prop="password">
          <el-input type="password" v-model="reOpenAccount.tradePassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="重复密码">
          <el-input type="password" v-model="reOpenAccount.confirm2" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="reOpen">重新开户</el-button>
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
          <el-button type="primary" @click="close">销户</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane> 
    <el-tab-pane label="修改" name="fifth">
      <el-form ref="ruleForm" :model="modify" label-width="80px" :rules="rules">
        <el-form-item label="账户号" prop="account">
            <el-input v-model="modify.account" ></el-input>
        </el-form-item>  
        <el-form-item label="密码类型">
            <el-radio-group v-model="modify.type">
            <el-radio label="登陆密码"></el-radio>
            <el-radio label="交易密码"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="原有密码" prop="password">
            <el-input v-model="modify.oldPassword" ></el-input>
        </el-form-item>  
        <el-form-item label="新密码" prop="password">
            <el-input  v-model="modify.newPassword" ></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="confirm3">
            <el-input  v-model="modify.confirm" ></el-input>
        </el-form-item>  
        <el-form-item>
            <el-button type="primary" @click="mdf">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="存取款" name="sixth">
      <el-form ref="ruleForm" :model="DepositWithdrawal" label-width="80px" :rules="rules">
        <el-form-item label="账户号" prop="account">
          <el-input v-model="DepositWithdrawal.account" ></el-input>
        </el-form-item>  
        <el-form-item label="登录密码" prop="password">
          <el-input v-model="DepositWithdrawal.loginPassword" ></el-input>
        </el-form-item>  
        <el-form-item label="交易密码" prop="password">
          <el-input v-model="DepositWithdrawal.DWPassword" ></el-input>
        </el-form-item> 
        <el-form-item label="操作类型" >
            <el-radio-group v-model="DepositWithdrawal.type">
            <el-radio label="存款"></el-radio>
            <el-radio label="取款"></el-radio>
            </el-radio-group>
          </el-form-item>
        <el-form-item label="交易金额" >
          <el-input v-model="DepositWithdrawal.value" ></el-input>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="deposit">提交</el-button>
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
	        }else
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.openAccount.loginPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass5 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不可为空'));
        } else if (value !== this.openAccount.tradePassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.reOpenAccount.loginPassword) {
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

      var validatePass6 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.reOpenAccount.tradePassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'second',
        openAccount: {

          license: '',
          account: '',
          password:'',
          loginPassword:'',
          confirm:'',
          tradePassword:'',
          confirm2:'',

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
          license: '',
          account: '',
          password:'',
          loginPassword:'',
          confirm:'',
          tradePassword:'',
          confirm2:'',
        },
        modify:{
          type: '',
          account:'',
          oldPassword:'',
          newPassword:'',
          confirm:''
        },
        DepositWithdrawal:{
          account:'',
          loginPassword:'',
          DWPassword:'',
          type:'',
          value:''
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
            { required: true, message: '请输入密码', trigger: 'blur' },
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
          confirm4: [
            { validator: validatePass5, trigger: 'blur' }
          ],  
          confirm5: [
            { validator: validatePass6, trigger: 'blur' }
          ],
          account: [
            { validator: validateAccount, trigger: 'blur' }

          ]
        },

        status:false
      };
    },
    methods: {
      open(){
        this.$http.post('/fund/register',this.$qs.stringify(this.openAccount))
          .then(response => {
            alert(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });
      },
      loss(){
        this.$http.post('/fund/lost',this.$qs.stringify(this.lossRegister))
          .then(response => {
            console.log(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });
      },
      pre_reopen(){
        this.$http.post('/fund/re_register',this.$qs.stringify(this.reOpen))
          .then(response => {
            console.log(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });
      },
      reopen(){
        this.$http.post('/fund/re_register2',this.$qs.stringify(this.reOpenAccount))
          .then(response => {
            console.log(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });
      },
      close(){
        this.$http.post('/fund/delete',this.$qs.stringify(this.closeAccount))
          .then(response => {
            console.log(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });   
      },
      mdf(){
        this.$http.post('/fund/modify',this.$qs.stringify(this.modify))
          .then(response => {
            console.log(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });  
      },
      deposit(){
        this.$http.post('/fund/deposit',this.$qs.stringify(this.DepositWithdrawal))
          .then(response => {
            console.log(response.data);
            })
          .catch(function (error) {
            console.log(error);
        });     
      }
    }
  };
</script>

<style scoped>
.el-input{
    width:180px
}
</style>>