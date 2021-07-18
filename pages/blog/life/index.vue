<template>
  <div id="news-list-page">
    <main>
      <div class="container">
        <div class="news_content_inner txt-center">
          <h2 class="card-title">Life</h2>
          <ul class="c-card-content">
            <li class="c-card-extend" v-for="life in lifes" :key="life.id">
              <figure>
                <a
                    v-if="life.link"
                    v-bind:href="life.link"
                    target="_blank"
                    :style="{ 'background-image': 'url(' + life.image.url + ')' }"
                    :alt="life.title">
                </a>
                <nuxt-link 
                    v-else
                    :to="'/blog/life/' + life.id"
                    :style="{ 'background-image': 'url(' + life.image.url + ')' }"
                    :alt="life.title">
                </nuxt-link>
              </figure>
              <p class="c-post-content">
                <span class="c-post-info-date">{{life.date | moment('LTS')}}</span>
                <span class="c-post-info-title">{{life.title}}</span>
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
      title: 'ライフブログ一覧 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのライフブログ一覧ページです。' }
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
        `https://uemura5683.microcms.io/api/v1/life`,
        {
          headers: { 'X-API-KEY': process.env.API_KEY }
        }
      )
      return {
        lifes: data.contents
      }
    }
  }
</script>