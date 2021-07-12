<template>
  <div id="news-list-page">
    <main>
      <div class="container">
        <div class="news_content_inner txt-center">
          <h2 class="card-title">Business</h2>
          <ul class="c-card-content">
            <li class="c-card-extend" v-for="business in businesses" :key="business.id">
              <figure>
                <a
                    v-if="business.link"
                    v-bind:href="business.link"
                    target="_blank"
                    :style="{ 'background-image': 'url(' + business.image.url + ')' }"
                    :alt="business.title">
                </a>
                <a
                    v-else
                    v-bind:href="'/blog/business/' + business.id"
                    :style="{ 'background-image': 'url(' + business.image.url + ')' }"
                    :alt="business.title">
                </a>
              </figure>
              <p class="c-post-content">
                <span class="c-post-info-date">{{business.date | moment('LTS')}}</span>
                <span class="c-post-info-title">{{business.title}}</span>
              </p>
            </li>
          </ul>
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
      title: 'ビジネスブログ一覧 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのビジネスブログ一覧ページです。' }
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
        `https://uemura5683.microcms.io/api/v1/business`,
        {
          headers: { 'X-API-KEY': process.env.API_KEY }
        }
      )
      return {
        businesses: data.contents
      }
    }
  }
</script>