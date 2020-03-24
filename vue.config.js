module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: config => {
    config.devServer.hot(true);

    // config.devServer.clientLogLevel('silent');
    config.devServer.overlay({ warnings: true, errors: true });
  },
};
