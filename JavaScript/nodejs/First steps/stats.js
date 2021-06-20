const os = require("os");
const log = require("./logger");

log("Iniciando");

setInterval(() => {
  const { freemem, totalmem } = os;

  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const percentes = parseInt((mem / total) * 100);

  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percentes} %`,
  };

  console.clear();
  console.table(stats);
  log(`${JSON.stringify(stats)}`);
}, 1000);
