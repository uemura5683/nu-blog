<template>
  <div id="news-list-page">
    <main>
      <div class="container">
        <div class="news_content_inner txt-center">
            <h2 class="card-title">Search</h2>
            <ul v-if="count!=0" class="c-card-content">
              <li class="c-card-extend" v-for="blog in blogs" :key="blog.id">
                <figure>
                  <a
                      v-bind:href="blog.link"
                      target="_blank"
                      :style="{ 'background-image': 'url(' + blog.image.url + ')' }"
                      :alt="blog.title">
                  </a>
                </figure>
                  <p class="c-post-content">
                    <span class="c-post-info-date">{{blog.date | moment('LTS')}}</span>                        
                    <span class="c-post-info-title">{{blog.title}}</span>
                  </p>
              </li>
            </ul>
            <div v-else class="not-found">
                検索結果、見つかりませんでした
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
      title: 'ビジネスブログ一覧 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトの検索一覧ページです。' }
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
      const target = encodeURI(params.id);
      const { data } = await axios.get(
        `https://uemura5683.microcms.io/api/v1/all?&q=${target}`,
        {
          headers: { 'X-API-KEY': process.env.API_KEY }
        }
      )
      return {
        blogs: data.contents,
        count: data.totalCount
      }
    }
  }
</script>