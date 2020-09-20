<template>
  <div id="news-list-page" class="container mt-4 p-0">
    <main>
      <div id="main_content" class="container d-block d-md-flex mt-4 p-0">
        <div class="main_content col-md-10  p-0">
          <div id="news-content-list">
            <div class="news_content_inner text-center">
              <h2 class="card-title">SEARCH</h2>
              <!--<Segment />-->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Segment from '~/components/segment.vue';
  export default {
  components: {Segment },    
    head: {
      title: '検索結果 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトの検索一覧ページです。' }
      ]
    }
  }
</script>