// const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

let plugins = [];
if (process.env.NODE_ENV === 'production') {
  const compressionTest = /\.(js|css|json|txt|html|ico|svg)$/i;
  plugins = [
    new CompressionPlugin({
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
      compressionOptions: {
        numiterations: 15,
      },
      // threshold: 10240,
      minRatio: 0.99,
      test: compressionTest,
    }),
    new BrotliPlugin({
      test: compressionTest,
      // threshold: 10240,
      minRatio: 0.99,
    }),
  ];
}

// function addStyleResource(rule) {
//   rule.use('sass-resource')
//     .loader('sass-resources-loader')
//     .options({
//       resources: [
//         path.resolve(__dirname, './src/styles/style.scss'),
//       ],
//     });
// }

module.exports = {
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',

  css: {
    extract: true,
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  publicPath: process.env.PUBLIC_PATH,

  // chainWebpack: (config) => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  //   types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
  // },
  configureWebpack: {
    plugins,
  },
};
