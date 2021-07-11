<template>
  <div id="news-list-page" class="container mt-4 p-0">
    <main>
      <div id="main_content" class="container d-block d-md-flex mt-4 p-0">
        <div class="main_content col-md-10  p-0">
          <div id="news-content-list">
            <div class="news_content_inner text-center">
              <h2 class="card-title">Life</h2>
              <ul class="row-cols-2 row-cols-lg-3">
                  <li class="c-card-extend" v-for="life in lifes" :key="life.id">
                      <figure>
                      <a
                          v-if="life.link"
                          v-bind:href="life.link"
                          target="_blank"
                          :style="{ 'background-image': 'url(' + life.image.url + ')' }"
                          :alt="life.title">
                      </a>
                      <a
                          v-else
                          v-bind:href="'/blog/life/' + life.id"
                          :style="{ 'background-image': 'url(' + life.image.url + ')' }"
                          :alt="life.title">
                      </a>
                      </figure>
                      <p class="c-post-content">
                        <span class="c-post-info-date">{{life.date | moment('LTS')}}</span>
                        <span class="c-post-info-title">{{life.title}}</span>
                      </p>
                  </li>
              </ul>
            </div>
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
      title: 'ライフブログ一覧 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのライフブログ一覧ページです。' }
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