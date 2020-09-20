<template>
  <div id="profile-page" class="container p-0">
    <main> 
      <div id="main_content" class="container d-block d-md-flex p-0">
        <div class="main_content col-md-10 p-0">
            <div id="name_img">
              <div id="title" class="col-md-4 col-12"></div>
              <div id="img" class="col-md-4 col-12"></div>
            </div>
            <div id="description"></div>
            <div id="adobe"></div>
            <div id="programing"></div>
            <div id="cms"></div>
            <div id="business"></div>
            <div id="studynow"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'プロフィール | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのプロフィールページです。' }
      ]
    }
}
</script>