'use strict';

 var fs=require("fs");//引入fs读取模板

export default class extends think.controller.base {
  /**
   * some base method in here
   */


    async __before() {
        this.assign("title", "aaa");
        await this.getConfig();
    }
    async getConfig() {
      // let data = fs.readFile(think.ROOT_PATH + "/src/common/config/config.json");
      let data=fs.readFileSync(think.ROOT_PATH + "/src/common/config/config.json");
      data=JSON.parse(data);
      this.assign("_web", data);
    }
}
