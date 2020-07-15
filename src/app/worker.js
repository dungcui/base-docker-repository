const debug = require("debug")("wallet:worker");

function create({ monitor, balancesHash }) {
  monitor.on("block", async block => {
    debug(`New block: ${block}`);
  });

  return monitor;
}

module.exports = { create };
