<template>
  <div id="inquiry-page" class="container mt-4 p-0">
    <main> 
      <div class="container">
          <div class="main_content col-md-6 p-0 txt-center">
            <h2 class="card-title">Contact</h2>
            <div class="lead">
              <p>技術・メンターに関するお問い合わせをお受けしておリます。お気軽にお問い合わせください。</p>
              <p>内容によってはご返答できない場合がございます。あらかじめご了承くださいませ。</p>
              <p><a href="https://twitter.com/uemuragame5683" target="_blank">twitter</a>も受け付けております。</p>
            </div>
            <ContactForm />
          </div>
      </div>
    </main>
    <ContactConfirm />
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue';
import ContactConfirm from '~/components/ContactConfirm.vue';
export default {
  components: {ContactForm, ContactConfirm },
  head: {
    title: 'お問い合わせ | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
    meta: [
      { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのお問い合わせページです。技術・メンター関するお問い合わせをお受けしております。' }
    ]
  }
}
</script>