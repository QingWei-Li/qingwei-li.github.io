module.exports = {
  srcDir: 'src/',

  head: {
    title: 'Qingwei Li(cinwell)',
    link: [{ rel: 'favicon', href: 'https://github.com/qingwei-li.png' }],
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  },

  plugins: [{ src: '~/plugins/ga.js', ssr: false }]
};
