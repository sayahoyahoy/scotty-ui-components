module.exports.webpackPlugin = function (config) {
  return {
    ...config,
    optimize: {
      shortNamespaces: true,
      minify: true,
    },
  }
}
