const puppeteer = require('puppeteer')
const fs = require('fs')
const httpProxy = require("http-proxy");
const host = "0.0.0.0";
const port = 8088;

async function initpuppeteer(){
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: {
          width: 1680,
          height: 1024
        },
        args: ['--no-sandbox', '--disable-setuid-sandbox', `--window-size=1680,1024`]
    });
    const wsEPAddress = browser.wsEndpoint()
    return wsEPAddress
}

async function createServer(WSEndPoint, host, port) {
    await httpProxy
      .createServer({
        target: WSEndPoint, // where we are connecting
        ws: true,
        localAddress: host // where to bind the proxy
      })
      .listen(port); // which port the proxy should listen to
    return `ws://${host}:${port}`; // ie: ws://123.123.123.123:8080
  }

setTimeout(async () => {
    const wsEPAddress = await initpuppeteer();
    console.log("start watch 8088")
    await createServer(wsEPAddress, host, port)
}, 1000);
console.log("start server")


// createServer(wsEPAddress, host, port);
// fs.writeFileSync(__dirname + '/ws', wsEPAddress)