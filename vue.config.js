let externals = {};
if (process.env.NODE_ENV === "production") {
  externals = {
    vue: "Vue",
    axios: "axios",
    "mint-ui": "MINT",
    "babel-runtime/core-js/promise": "Promise"
  };
}
module.exports = {
  publicPath: process.env.VUE_APP_REALEASE === "production" ? "./" : "./",
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://118.89.22.28:9502/",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    externals
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].env = process.env.NODE_ENV;
      args[0].template = "public/index.html";
      if (process.env.NODE_ENV === "production") {
        args[0].minify = {
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          collapseWhitespace: true
        };
      }
      return args;
    });
    config.module.rule("images")
      .test(/\.(jpg|png|gif)$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10,
        publicPath:
          process.env.VUE_APP_REALEASE === "production"
            ? "https://oss.xx.com/img"
            : "../image/", // 这里背景图片也使用cdn
        outputPath: "image",
        name: "[name].[hash].[ext]",
      })
      .end();
  }
};
