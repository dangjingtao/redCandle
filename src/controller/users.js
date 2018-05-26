//src/controller/user.js

const Base = require('./base.js');
import xlsx from 'node-xlsx';


module.exports = class extends Base {


    /**
     * 导入
     * @returns {Promise|void|PreventPromise|*}
     */
    async inputAction() {
        let param = this.file('file');
        
        let obj = xlsx.parse(param.path);

        let list=obj[0].data;

        this.success({list:list});

    }
}