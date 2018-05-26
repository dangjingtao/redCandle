// module.export={
//     async getUser(){
//     let model = this.model('users');
//     console.log(model)
//     let data = await model.where({name: 'thinkjs'}).find();
//     //data returns {name: 'thinkjs', email: 'admin@thinkjs.org', ...}
//     if(think.isEmpty(data)) {
//       // 内容为空时的处理
//     }
//   }
// }

module.exports = class extends think.Model {
    async getUser(){
        let model = this.model('users');
        console.log(model)
        // let data = await model.where({name: 'djtao'}).find();
        // //data returns {name: 'thinkjs', email: 'admin@thinkjs.org', ...}
        // if(think.isEmpty(data)) {
        //   // 内容为空时的处理
        // }\\

        return this.field('name').select();
    }
  }