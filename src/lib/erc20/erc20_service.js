const Promise = require("bluebird");
const _ = require("lodash");

const Service = require("../service");

class Erc20Service extends Service {
  constructor({ db }) {
    const error = {
      INVALID_XPUBS: "Missing xpubs or there are more than 1 xpubs"
    };
    super({
      db
    });
  }
  async get() {
    console.log("get erc20 api");
  }
}

module.exports = Erc20Service;
