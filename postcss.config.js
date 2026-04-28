// sistem minimalizir css = cssnano
module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default'
    })
  ]
}