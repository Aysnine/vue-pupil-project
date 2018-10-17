module.exports = {
  productionSourceMap: false, // ! 避免 build 后在浏览器控制台 Resource 中暴露源码
  css: {
    loaderOptions: {
      // http://stylus.github.io/nib/
      stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
      }
    }
  }
}
