const Promise = require("bluebird");
const _ = require("lodash");

const Monitor = require("../monitor.js");

class Erc20Service extends Monitor {
  constructor({ db }) {
    const error = {
      INVALID_XPUBS: "Missing xpubs or there are more than 1 xpubs"
    };
    super({
      db
    });
  }
  async run() {
    while (this.isRunning) {
      console.log("running erc20 monitor");
    }
  }
}

module.exports = Erc20Service;
