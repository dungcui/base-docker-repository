const Promise = require("bluebird");
const TinyQueue = require("tinyqueue");
const { EventEmitter } = require("events");

class Monitor extends EventEmitter {
  constructor({ db, api }) {
    super();

    // States
    this.canStop = true;
    this.nextBlocks = [];
    this.isRunning = false;
    this.nextBlocks = new TinyQueue([], (a, b) => a.height - b.height);
    this.currency = currency;

    // Configs
    this.db = db;
    this.api = api;
  }

  async start() {
    this.isRunning = true;
    this.canStop = false;
    await this.run();
    this.canStop = true;
  }

  async stop() {
    this.isRunning = false;
    this.debug("Attempt to stop...");
    if (this.canStop) {
      this.debug("Stopped.");
      return;
    }
    await Promise.delay(1000 * this.sleepTime);
    await this.stop();
  }

  async run() {
    while (this.isRunning) {
      console.log("running");
    }
  }
}

module.exports = Monitor;
