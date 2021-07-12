<template>
  <div id="news-detail-page">
    <main> 
      <div class="container">
        <div class="news-detail-inner">
          <div class="news-top-content">
            <div class="c-post-info-top">
              <h2 class="c-post-info-title">{{business.title}}</h2>
              <p class="c-post-content">
                <span class="c-post-info-date">{{business.date | moment('LTS')}}</span>
              </p>
            </div>
            <figure>
              <span class="figure_img" :style="{ 'background-image': 'url(' + business.image.url + ')' }"></span>
            </figure>
          </div>
          <div class="dom-content">
            <div v-if="business.body" v-html="business.body" class="dom-content-inner"></div>
            <div v-if="business.body2" v-html="business.body2" class="dom-content-inner"></div>
            <div v-if="business.body3" v-html="business.body3" class="dom-content-inner"></div>
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
      title: 'ビジネスブログ詳細 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのビジネスブログ詳細ページです。' }
      ]
    },
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD HH:mm');
        }
    },
    data() {
      return {
        posts: []
      }
    },
    async asyncData({ params }) {
      const { data } = await axios.get(
        `https://uemura5683.microcms.io/api/v1/business/${params.id}`,
        {
          headers: { 'X-API-KEY': process.env.API_KEY }
        }
      )
      return {
        business: data
      }
    }
  }
</script>