const debug = require("debug");
const Promise = require("bluebird");
const { formatAddressWithMemo } = require("../utils");
var randomstring = require("randomstring");
const keyToken = process.env.KEY_TOKEN;
const hashKey = process.env.HASH_KEY;
const Decimal = require("decimal.js");

const crypto = require("crypto");
class Service {
  constructor({
    // Global
    db,
    api
    // get
    // bchRpc,
  }) {
    // Components
    this.db = db;
    this.api = api;
  }
  async get() {
    console.log("get api");
  }
}

module.exports = Service;
