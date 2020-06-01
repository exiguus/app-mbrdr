// const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

const { name } = require('./package-lock.json');

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

  pluginOptions: {
    // https://www.npmjs.com/package/@vue/cli-plugin-pwa
    // Generate: SW https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli
    pwa: {
      name,
      themeColor: '#ffffff',
      msTileColor: '#ff0000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'white',

      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/registerServiceWorker.js',
        // ...other Workbox options...
        globDirectory: 'dist/',
        globPatterns: [
          '**/*.{css,br,gz,ico,png,svg,html,js,txt}',
        ],
      },
    },
  },
};
