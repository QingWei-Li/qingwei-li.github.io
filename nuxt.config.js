module.exports = {
  srcDir: 'src/',

  head: {
    title: 'Qingwei Li(cinwell)',
    link: [{ rel: 'favicon', href: 'https://github.com/qingwei-li.png' }]
  },

  plugins: [
    { src: '~/plugins/ga.js', ssr: false }
  ]
}