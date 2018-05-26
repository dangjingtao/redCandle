// module.exports = class extends think.Controller {
//   __before() {

//   }
// };

'use strict';



module.exports = class extends think.Controller {
  /**
   * some base method in here
   */
  
  init(http) {
    super.init(http);
    http.header("Access-Control-Allow-Origin", this.header('origin') || "*");
    http.header('Access-Control-Allow-Credentials', true);
    http.header("Access-Control-Allow-Headers", "X-Requested-With");
    http.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    http.header("X-Powered-By", ' 3.2.1');
    // http.header("Content-Type", "application/json;charset=utf-8");
  }

  /*
   * 数字星期转换
   * @param data
   * @returns {*}
     */
  async weeks(data) {
    for (let i in data) {
      switch (data[i].weeks) {
        case 1:
          data[i].week = '星期一';
          break;
        case 2:
          data[i].week = '星期二';
          break;
        case 3:
          data[i].week = '星期三';
          break;
        case 4:
          data[i].week = '星期四';
          break;
        case 5:
          data[i].week = '星期五';
          break;
        case 6:
          data[i].week = '星期六';
          break;
        case 7:
          data[i].week = '星期天';
          break;
      }
    }
    return data;
  }
}
