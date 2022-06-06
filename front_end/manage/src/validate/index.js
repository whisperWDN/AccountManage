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
    if (value === '') {
        callback(new Error('请输入身份证号'));
      } else {
        if (value !== '') {
            if (value && (!(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))) {
                callback(new Error('身份证号码不规范'))
            } else {
                callback()
            }
        }
        callback();
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


var validateSAccount = (rule, value, callback) => {
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


var validateCAccount = (rule, value, callback) => {
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

var validateAAccount = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('请输入账户号'));
	  } else {
	    if (value !== '') { 
	      var reg=/^C\d{5}/;
	      if(!reg.test(value)){
	        callback(new Error('请正确填写账户号'));
	      }
	    }
	    callback();
	  }
};


var validateAdministrator = (rule, value, callback) => {
	if (value === '') {
	  callback(new Error('请输入账户号'));
	  } else {
	    if (value !== '') { 
	      var reg=/^D\d{5}/;
	      if(!reg.test(value)){
	        callback(new Error('请正确填写账户号'));
	      }
	    }
	    callback();
	  }
};
export {validateMobilePhone,validateIDCard,validateEmail,validatePass,validateSAccount,validateCAccount,validateAAccount,validateAdministrator}