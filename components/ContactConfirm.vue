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
      <div class="form-actions txt-center button-submit">
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
</script>

<style lang="scss">
$white: #ffffff; $l_gray: #fafafa; $gray: #e5e5e5; $d_gray: #666666; $black: #000000;
#inquiry_form {
    .control-group {
        .control-label {
            margin: 0 0 5px;
            text-align: left;
        }
        input {
            width: calc(100% - 12px);
            height: 40px;
            line-height: 40px;
            margin: 0 0 20px;
        }
        textarea {
            width: calc(100% - 12px);
        }
    }
}
#inquiry-page {
    .confirm-block {
        opacity: 0;
        z-index: -1;
        position: fixed;
        background-color: white;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 60%;
        overflow: scroll;
        padding: 40px 15px 0;
        transform: translateY(-50%) translateX(-50%);
        transition : all 200ms;
        table {
            tr {
                &:last-child {
                    th, td {
                        border-bottom: 1px solid #dee2e6;
                    }
                }
            }
            th, td {
                font-size: 1.4rem;
            }
        }
        &.active {
            opacity: 1;
            z-index: 12000;
            + .overlay_confirm {
                content: '';
                width: 100%;
                height: 100%;
                position: fixed;
                background: rgba(0,0,0,0.66667);
                opacity: .7;
                top: 0;
                left: 0;
                z-index: 10000;
                transition: all 100ms;
                cursor: pointer;
                &:before, &:after {
                    content: '';
                    position: absolute;
                    border-left: 2px solid $white;
                    width: 30px;
                    height: 30px;
                }
                &:before {
                    top: 0;
                    right: 0;
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                }
                &:after {
                    top: 19px;
                    right: 0;
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                }
            }
        }
    }
}
@media screen and (max-width: 767px) {
    #inquiry-page {
        .main_content {
            padding: 0 15px !important;
        }
        .confirm-block {
            margin: 0;
            padding: 2rem 1rem 1rem;
            width: 90%;
            height: 80%;
            table {
                display: block;
                width: 100%;
                tbody {
                    display: block;
                    width: 100%;
                    line-height: 1.6;
                }
                tr {
                    display: block;
                    width: 100%;
                    line-height: 1.6;
                    th, td {
                        display: block;
                        text-align: left;
                        width: 100%;
                        line-height: 1.6;
                    }
                    th {
                        background-color: $gray;
                        line-height: 1.6;
                    }
                }
            }
        }
        .lead {
            margin: 0 0 2rem;
            + .alert {
                margin-bottom: 2rem;
            }
            p {
                font-size: .8rem;
                line-height: 1.2rem;
                text-align: center;
                margin: 0 0 1rem;
            }
        }
    }
}
</style>