<template>
  <main>
    <!-- お問い合わせフォーム -->
    <div class="attention confirm-block">
      <p class="alert alert-success">内容をご確認の上、よろしければ「送信する」ボタンをクリックしてください。</p>
      <table class="table">
        <tbody>
          <tr><th>お名前</th><td class="confirm-name"></td></tr>
          <tr><th>メールアドレス</th><td class="confirm-mail"></td></tr>
          <tr><th>お問い合わせ内容</th><td class="confirm-title"></td></tr>
          <tr><th>お問い合わせ詳細</th><td class="confirm-body"></td></tr>
        </tbody>
      </table>
      <div class="form-actions text-center button-submit">
        <span class="btn btn-back" @click="inquiry_back()">戻る</span>
        <button type="submit" class="btn btn-primary" @click="inquiry_comp()">送信する</button>
      </div>
    </div>
    <div class="overlay_confirm" @click="inquiry_back()"></div>
  </main>
</template>
<script>
import axios from "axios"
export default {
  methods: {
      inquiry_back() {
        const conf_cont    = document.getElementsByClassName('confirm-block');
        conf_cont[0].classList.remove('active');
      },
      inquiry_comp() {
        const conf_cont    = document.getElementsByClassName('confirm-block'),
              name_value   = conf_cont[0].getElementsByClassName('confirm-name'),
              mail_value   = conf_cont[0].getElementsByClassName('confirm-mail'),
              ttl_value    = conf_cont[0].getElementsByClassName('confirm-title'),
              body_value   = conf_cont[0].getElementsByClassName('confirm-body');           

        axios.post( 'https://uemura5683.microcms.io/api/v1/contact',
          { 
            email: name_value[0].innerText,
            name: mail_value[0].innerText,
            title: ttl_value[0].innerText,
            body: body_value[0].innerText
          },
          { headers: {
            'Content-Type': 'application/json',
            'X-WRITE-API-KEY': 'e4f670a9-c5f8-4b37-b85c-420c00c33675'
            }
          }
        )
        .then(
          response => location.href = '/contact/complete'
        )
        .catch((e) => {
          error(
            {
              statusCode: 404,
              message: 'ページが見つかりません'
            }
          )
        } );
      }
  }
}
</script>>