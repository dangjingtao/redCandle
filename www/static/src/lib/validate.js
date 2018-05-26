/**
 * 前端表单校验库
 */

'use strict';

const R = {
  required: {
    regex: /\S+/,
    message: '必填',
  },
  password: {
    regex: /^\S{6,32}$/,
    message: '6~32位字符，不能填空格',
  },
  email: {
    regex: /^[\w!#$%&"*+/=?^_`{|}~-]+(?:\.[\w!#$%&"*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
    message: '邮箱格式如：xxx@xxx.xxx',
  },
  qq: {
    regex: /^[1-9][0-9]{4,}$/,
    message: '不少于4位数字的QQ号',
  },
  idcard: {
    regex: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
    message: '18位身份证',
  },
  number: {
    regex: /^[0-9]*$/,
    message: '必须为数字',
  },
  phone: {
    regex: /^1[34578]\d{9}$/,
    message: '11位手机号码',
  },
  price: {
     regex: /^\d{0,6}$/,
    message: '必须为数字,长度不能大于6位',
  },
  area: {
  	  regex: /^\d{0,4}$/,
    message: '必须为数字,长度不能大于4位',
  },
  price1: {
    regex: /^\d{0,6}$/,
    message: '必须为数字，长度不能大于6位',
  },
  name: {
  	regex: /^(.|\n){0,10}$/,
  	message: '不得大于10位字符'
  	
  },
  address: {
  	regex: /^(.|\n){0,18}$/,
  	message: '不得大于18位字符'
  	
  },
  textLength: {
  	regex: /^(.|\n){0,110}$/,
  	message: '不得大于110位字符'
  },
  agentName: {
  		regex: /^(.|\n){0,4}$/,
  	message: '不得大于4位字符'
  },
  developer: {
  	regex: /^(.|\n){0,22}$/,
  	message: '不得大于22位字符'
  },
  selfIntro: {
  	regex: /^(.|\n){0,150}$/,
  	message: '不得大于150位字符'
  },
  intro: {
  	regex: /^(.|\n){0,45}$/,
  	message: '不得大于45位字符'
  },
  ciText: {
  		regex: /^(.|\n){0,1000}$/,
  	message: '不得大于1000位字符'
  }
}

class Validate {
  /**
   * 校验字符串
   * @param {String} [schema] 校验规则
   * @param {String} [value] 校验值
   * @return {Array} 错误信息
   */
  static string = (schema = '', value = '') => {
    const rules = schema.split('|');
    const errors = [];

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];

      if (!R[rule]) {
        continue;
      }

      if (!R[rule].regex.test(value)) {
        errors.push(R[rule].message);
      }
    }

    return errors;
  }

  /**
   * 校验对象
   * @param {Object} [schema] 校验规则
   * @param {Object} [value] 校验值
   * @return {Object} 错误信息
   */
  static object = (schema = {}, value = {}) => {
    const errors = {};
    let count = 0;

    for (let x in schema) {
      const result = Validate.string(schema[x], value[x]);

      if (result.length !== 0) {
        errors[x] = result;
        count++;
      }
    }

    return {
      count,
      errors,
    };
  }
}

export default Validate;
