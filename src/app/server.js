const debug = require("debug")("wallet:server");
const _ = require("lodash");
const camelCaseKeys = require("camelcase-keys");
const express = require("express");
const bodyParser = require("body-parser");
const expressQueue = require("express-queue");

const queueMw = expressQueue({ activeLimit: 1, queuedLimit: -1 });
// const baseService = require('../lib/service.js');
const RESPONSE_DELAY = 10000;

let counter = 0;

async function create({ port, services, tokens }) {
  const currencyToService = getCurrencyToService(services, tokens);

  // Create server
  const server = express();
  server.use(
    bodyParser.json({
      verify: (req, res, buf) => {
        req.rawBody = buf;
      }
    })
  );

  server.get("/", (req, res) => {
    res.json({ message: "API portal" });
  });

  const app = server.listen(port, () => {
    debug(`listen on port ${port}`);
  });
  return app;
}

module.exports = { create };
