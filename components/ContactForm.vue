<template>
  <form @submit.prevent="submit" id="inquiry_form" name="form1" method="POST" class="form-horizontal text-left">
    <div class="form-striped">
        <div class="control-group">
          <label for="Name" class="control-label">お名前</label>
          <div class="controls clearfix">
              <input type="text" name="name" id="Name" value="" class="input-large" placeholder="名前を入力してください">
          </div>
　      </div>
        <div class="control-group">
          <label for="Mail" class="control-label">メールアドレス</label>
          <div class="controls"><input type="text" name="mail_address" id="Mail" value="" placeholder="メールアドレスを入力してください"></div>
        </div>
        <div class="control-group">
          <label for="Title" class="control-label">お問い合わせ内容</label>
          <div class="controls"><input type="text" name="title" id="Title" value="" placeholder="タイトルを入力してください"></div>
        </div>
        <div class="control-group inquiry-text">
          <label for="Body" class="control-label">お問い合わせ詳細</label>
          <div class="controls">
            <textarea name="body" id="Body" rows="10" value="" placeholder="本文を入力してください"></textarea>
          </div>
        </div>
    </div>
    <div class="form-actions text-center button-submit">
      <button type="submit" class="btn btn-primary" >
        送信する
      </button>
    </div>
  </form>
</template>
<script>
import axios from "axios"
export default {
      methods: {
        submit() {
          const name_value   = this.$vnode.elm.elements[0].value,
                mail_value   = this.$vnode.elm.elements[1].value,
                ttl_value    = this.$vnode.elm.elements[2].value,
                body_value   = this.$vnode.elm.elements[3].value,
                conf_cont    = document.getElementsByClassName('confirm-block'),
                conf_name    = conf_cont[0].getElementsByClassName('confirm-name'),
                conf_mail    = conf_cont[0].getElementsByClassName('confirm-mail'),
                conf_ttl     = conf_cont[0].getElementsByClassName('confirm-title'),
                conf_body    = conf_cont[0].getElementsByClassName('confirm-body'),
                form_id      = document.getElementById('inquiry_form'),
                alert_txt    = document.getElementsByClassName("alert-warning");

                if( alert_txt[0] != undefined ) {
                    alert_txt[0].remove();
                }
                // エラーチェック
                let alert_html = "<div class='alert alert-warning'>";
                if( name_value == "" ) {
                    alert_html += "<p class='alert_inner_txt'>名前を入力してください</p>";
                }
                if( mail_value == "" ) {
                    alert_html += "<p class='alert_inner_txt'>メールアドレスを入力してください</p>";
                } else if( mail_value && !mail_value.match(/^[0-9,A-Z,a-z][0-9,a-z,A-Z,_,\.,-]+@[0-9,A-Z,a-z][0-9,a-z,A-Z,_,\.,-]+\.(af|al|dz|as|ad|ao|ai|aq|ag|ar|am|aw|ac|au|at|az|bh|bd|bb|by|bj|bm|bt|bo|ba|bw|br|io|bn|bg|bf|bi|kh|cm|ca|cv|cf|td|gg|je|cl|cn|cx|cc|co|km|cg|cd|ck|cr|ci|hr|cu|cy|cz|dk|dj|dm|do|tp|ec|eg|sv|gq|er|ee|et|fk|fo|fj|fi|fr|gf|pf|tf|fx|ga|gm|ge|de|gh|gi|gd|gp|gu|gt|gn|gw|gy|ht|hm|hn|hk|hu|is|in|id|ir|iq|ie|im|il|it|jm|jo|kz|ke|ki|kp|kr|kw|kg|la|lv|lb|ls|lr|ly|li|lt|lu|mo|mk|mg|mw|my|mv|ml|mt|mh|mq|mr|mu|yt|mx|fm|md|mc|mn|ms|ma|mz|mm|na|nr|np|nl|an|nc|nz|ni|ne|ng|nu|nf|mp|no|om|pk|pw|pa|pg|py|pe|ph|pn|pl|pt|pr|qa|re|ro|ru|rw|kn|lc|vc|ws|sm|st|sa|sn|sc|sl|sg|sk|si|sb|so|za|gs|es|lk|sh|pm|sd|sr|sj|sz|se|ch|sy|tw|tj|tz|th|bs|ky|tg|tk|to|tt|tn|tr|tm|tc|tv|ug|ua|ae|uk|us|um|uy|uz|vu|va|ve|vn|vg|vi|wf|eh|ye|yu|zm|zw|com|net|org|gov|edu|int|mil|biz|info|name|pro|jp)$/i ) ) {
                    alert_html += "<p class='alert_inner_txt'>メールアドレスの形式が異なります</p>";
                }
                if( ttl_value == "" ) {
                    alert_html += "<p class='alert_inner_txt'>タイトルを入力してください</p>";
                }
                if( body_value == "" ) {
                    alert_html += "<p class='alert_inner_txt'>本文を入力してください</p>";
                }
                alert_html += "</div>";
                form_id.insertAdjacentHTML( 'beforebegin', alert_html);

                // エラーがなかったらお問い合わせ確認
                if( document.getElementsByClassName("alert_inner_txt").length == 0 ) {
                  conf_cont[0].classList.add('active');
                  conf_name[0].innerText = name_value;
                  conf_mail[0].innerText = mail_value;
                  conf_ttl[0].innerText  = ttl_value;
                  conf_body[0].innerText = body_value;
                  alert_txt[0].remove();
                } else {
                  let html                  = document.documentElement,
                      body                  = document.body,
                      headers               = document.getElementsByClassName( 'header' ),
                      footers               = document.getElementsByClassName( 'footer' ),
                      expires               = 30,
                      scrollTop             = 0,
                      duration              = 240,
                      scrollTo = function ( dom, to, duration ) {
                        if ( duration <= 0 ) {
                            return;
                        }
                        var diff = to - dom.scrollTop
                          , pert = diff / duration * 5
                        setTimeout( function () {
                            dom.scrollTop = dom.scrollTop + pert;
                            if ( dom.scrollTop === to ) {
                                return;
                            }
                            scrollTo( dom, to, duration - 5 );
                        }, 5 );
                      },
                      gototopper = function ( event ) {
                        event.preventDefault();
                        scrollTo( body, 0, duration );
                        scrollTo( html, 0, duration );
                      }
                  gototopper( event );
          }
        }
    }
}
</script>