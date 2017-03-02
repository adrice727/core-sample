const otCore = require('opentok-accelerator-core');
const config = require('./config.js');

const run  = () => {
  console.log(config);
}

document.addEventListener('DOMContentLoaded', run);