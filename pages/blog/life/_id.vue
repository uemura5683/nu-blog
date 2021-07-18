<template>
  <div id="news-detail-page">
    <main> 
      <div class="container">
        <div class="news-detail-inner">
          <div class="news-top-content">
            <div class="c-post-info-top">
              <h2 class="c-post-info-title">{{life.title}}</h2>
              <p class="c-post-content">
                <span class="c-post-info-date">{{life.date | moment('LTS')}}</span>
              </p>
            </div>
            <figure>
              <span class="figure_img" :style="{ 'background-image': 'url(' + life.image.url + ')' }"></span>
            </figure>
          </div>
          <div class="dom-content">
            <div v-if="life.body" v-html="life.body" class="dom-content-inner"></div>
            <div v-if="life.body2" v-html="life.body2" class="dom-content-inner"></div>
            <div v-if="life.body3" v-html="life.body3" class="dom-content-inner"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import axios from 'axios';
  import moment from "moment";
  export default {
    head: {
      title: 'ライフブログ詳細 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのライフブログ詳細ページです。' }
      ]
    },
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD');
        }
    },
    data() {
      return {
        posts: []
      }
    },
    async asyncData({ params }) {
      const { data } = await axios.get(
        `https://uemura5683.microcms.io/api/v1/life/${params.id}`,
        {
          headers: { 'X-API-KEY': process.env.API_KEY }
        }
      )
      return {
        life: data
      }
    }
  }
</script>
  }
</script>