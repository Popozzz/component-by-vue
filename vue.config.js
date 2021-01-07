const { resolve } = require("path")

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set("src", resolve("src"))
    .set("@components", resolve("src/components")) 
    .set("@pages", resolve("src/pages"))
    .set("~@assets", resolve("src/assets"))
  },
  css: {
    requireModuleExtension: true,
  }
}