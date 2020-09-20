
export default {
  server: {
    port: 3001, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost,
    timing: false
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'https://jp.vuejs.org/js/vue.js' },
      { hid: 'robots', name: 'robots', content: 'index, follow' }
    ],
    title: 'フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイト、技術的・日常的な情報をお届けします。' },
      { name: 'twitter:card', content: 'summary'},
      { name: 'twitter:creator', content: 'うえむー'},
      { property: 'og:url', content: 'https://nu-blogsite.net/'},
      { property: 'og:title', content: 'フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)'},
      { property: 'og:description', content: 'フロントエンドエンジニアのうえむーのブログサイト、技術的・日常的な情報をお届けします。'},
      { property: 'og:image', content: 'https://nu-blogsite.net/twitter_logo.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#333' },
  /*
  ** Global CSS
  */
  css: [
    // プロジェクト内の SCSS ファイル
    '@/bootstrap/dist/css/bootstrap.css',
    '@/assets/css/foundation/reset.scss',
    '@/assets/css/layout/header.scss',
    '@/assets/css/layout/footer.scss',
    '@/assets/css/component/nav.scss',
    '@/assets/css/component/part.scss',
    '@/assets/css/page/main.scss',
    '@/assets/css/page/news.scss',
    '@/assets/css/page/profile.scss',
    '@/assets/css/page/inquiry.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/common.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // パッケージの名前を使用する
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics'
  ],
  /*
  * google analytics
  **/
  googleAnalytics: {
    id: 'UA-165433320-1'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
