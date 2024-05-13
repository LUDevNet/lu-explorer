const PROXY_CONFIG = [{
  context: [
    "/lu-docs",
    "/lu-json",
    "/lu-res",
    "/api"
  ],
  logLevel: "debug",
  target: "https://explorer.lu",
  secure: false,
  changeOrigin: true,
  bypass: function (req, res, proxyOptions) {
    req.headers["Authorization"] = "Basic bHU6ZXhwbG9yZXI=";
  }
}];

module.exports = PROXY_CONFIG;
