(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(t,e,n){"use strict";n.r(e);n(73);var l=n(41),c=n.n(l),r={methods:{submit:function(){var t=this.$vnode.elm.elements[0].value,e=this.$vnode.elm.elements[1].value,n=this.$vnode.elm.elements[2].value,l=this.$vnode.elm.elements[3].value,c=document.getElementsByClassName("confirm-block"),r=c[0].getElementsByClassName("confirm-name"),o=c[0].getElementsByClassName("confirm-mail"),m=c[0].getElementsByClassName("confirm-title"),v=c[0].getElementsByClassName("confirm-body"),d=document.getElementById("inquiry_form"),f=document.getElementsByClassName("alert-warning");null!=f[0]&&f[0].remove();var _="<div class='alert alert-warning'>";if(""==t&&(_+="<p class='alert_inner_txt'>名前を入力してください</p>"),""==e?_+="<p class='alert_inner_txt'>メールアドレスを入力してください</p>":e&&!e.match(/^[0-9,A-Z,a-z][0-9,a-z,A-Z,_,\.,-]+@[0-9,A-Z,a-z][0-9,a-z,A-Z,_,\.,-]+\.(af|al|dz|as|ad|ao|ai|aq|ag|ar|am|aw|ac|au|at|az|bh|bd|bb|by|bj|bm|bt|bo|ba|bw|br|io|bn|bg|bf|bi|kh|cm|ca|cv|cf|td|gg|je|cl|cn|cx|cc|co|km|cg|cd|ck|cr|ci|hr|cu|cy|cz|dk|dj|dm|do|tp|ec|eg|sv|gq|er|ee|et|fk|fo|fj|fi|fr|gf|pf|tf|fx|ga|gm|ge|de|gh|gi|gd|gp|gu|gt|gn|gw|gy|ht|hm|hn|hk|hu|is|in|id|ir|iq|ie|im|il|it|jm|jo|kz|ke|ki|kp|kr|kw|kg|la|lv|lb|ls|lr|ly|li|lt|lu|mo|mk|mg|mw|my|mv|ml|mt|mh|mq|mr|mu|yt|mx|fm|md|mc|mn|ms|ma|mz|mm|na|nr|np|nl|an|nc|nz|ni|ne|ng|nu|nf|mp|no|om|pk|pw|pa|pg|py|pe|ph|pn|pl|pt|pr|qa|re|ro|ru|rw|kn|lc|vc|ws|sm|st|sa|sn|sc|sl|sg|sk|si|sb|so|za|gs|es|lk|sh|pm|sd|sr|sj|sz|se|ch|sy|tw|tj|tz|th|bs|ky|tg|tk|to|tt|tn|tr|tm|tc|tv|ug|ua|ae|uk|us|um|uy|uz|vu|va|ve|vn|vg|vi|wf|eh|ye|yu|zm|zw|com|net|org|gov|edu|int|mil|biz|info|name|pro|jp)$/i)&&(_+="<p class='alert_inner_txt'>メールアドレスの形式が異なります</p>"),""==n&&(_+="<p class='alert_inner_txt'>タイトルを入力してください</p>"),""==l&&(_+="<p class='alert_inner_txt'>本文を入力してください</p>"),_+="</div>",d.insertAdjacentHTML("beforebegin",_),0==document.getElementsByClassName("alert_inner_txt").length)c[0].classList.add("active"),r[0].innerText=t,o[0].innerText=e,m[0].innerText=n,v[0].innerText=l,f[0].remove();else{var html=document.documentElement,body=document.body,h=(document.getElementsByClassName("header"),document.getElementsByClassName("footer"),function t(e,n,l){if(!(l<=0)){var c=(n-e.scrollTop)/l*5;setTimeout((function(){e.scrollTop=e.scrollTop+c,e.scrollTop!==n&&t(e,n,l-5)}),5)}});!function(t){t.preventDefault(),h(body,0,240),h(html,0,240)}(event)}}}},o=n(6),m={methods:{inquiry_back:function(){document.getElementsByClassName("confirm-block")[0].classList.remove("active")},inquiry_comp:function(){var t=document.getElementsByClassName("confirm-block"),e=t[0].getElementsByClassName("confirm-name"),n=t[0].getElementsByClassName("confirm-mail"),l=t[0].getElementsByClassName("confirm-title"),r=t[0].getElementsByClassName("confirm-body");c.a.post("https://uemura5683.microcms.io/api/v1/contact",{email:e[0].innerText,name:n[0].innerText,title:l[0].innerText,body:r[0].innerText},{headers:{"Content-Type":"application/json","X-WRITE-API-KEY":"e4f670a9-c5f8-4b37-b85c-420c00c33675"}}).then((function(t){return location.href="/contact/complete"})).catch((function(t){error({statusCode:404,message:"ページが見つかりません"})}))}}},v={components:{ContactForm:Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"form-horizontal text-left",attrs:{id:"inquiry_form",name:"form1",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t._m(0),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-striped"},[n("div",{staticClass:"control-group"},[n("label",{staticClass:"control-label",attrs:{for:"Name"}},[t._v("お名前")]),t._v(" "),n("div",{staticClass:"controls clearfix"},[n("input",{staticClass:"input-large",attrs:{type:"text",name:"name",id:"Name",value:"",placeholder:"名前を入力してください"}})])]),t._v(" "),n("div",{staticClass:"control-group"},[n("label",{staticClass:"control-label",attrs:{for:"Mail"}},[t._v("メールアドレス")]),t._v(" "),n("div",{staticClass:"controls"},[n("input",{attrs:{type:"text",name:"mail_address",id:"Mail",value:"",placeholder:"メールアドレスを入力してください"}})])]),t._v(" "),n("div",{staticClass:"control-group"},[n("label",{staticClass:"control-label",attrs:{for:"Title"}},[t._v("お問い合わせ内容")]),t._v(" "),n("div",{staticClass:"controls"},[n("input",{attrs:{type:"text",name:"title",id:"Title",value:"",placeholder:"タイトルを入力してください"}})])]),t._v(" "),n("div",{staticClass:"control-group inquiry-text"},[n("label",{staticClass:"control-label",attrs:{for:"Body"}},[t._v("お問い合わせ詳細")]),t._v(" "),n("div",{staticClass:"controls"},[n("textarea",{attrs:{name:"body",id:"Body",rows:"10",value:"",placeholder:"本文を入力してください"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-actions text-center button-submit"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\n        送信する\n      ")])])}],!1,null,null,null).exports,ContactConfirm:Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"attention confirm-block"},[n("p",{staticClass:"alert alert-success"},[t._v("内容をご確認の上、よろしければ「送信する」ボタンをクリックしてください。")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"form-actions text-center button-submit"},[n("span",{staticClass:"btn btn-back",on:{click:function(e){return t.inquiry_back()}}},[t._v("戻る")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.inquiry_comp()}}},[t._v("送信する")])])]),t._v(" "),n("div",{staticClass:"overlay_confirm",on:{click:function(e){return t.inquiry_back()}}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",[this._v("お名前")]),e("td",{staticClass:"confirm-name"})]),this._v(" "),e("tr",[e("th",[this._v("メールアドレス")]),e("td",{staticClass:"confirm-mail"})]),this._v(" "),e("tr",[e("th",[this._v("お問い合わせ内容")]),e("td",{staticClass:"confirm-title"})]),this._v(" "),e("tr",[e("th",[this._v("お問い合わせ詳細")]),e("td",{staticClass:"confirm-body"})])])])}],!1,null,null,null).exports},head:{title:"お問い合わせ | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)",meta:[{hid:"description",name:"description",content:"フロントエンドエンジニアのうえむーのブログサイトのお問い合わせページです。技術・メンター関するお問い合わせをお受けしております。"}]}},d=Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-4 p-0",attrs:{id:"inquiry-page"}},[e("main",[e("div",{staticClass:"container d-block d-md-flex mt-4 p-0",attrs:{id:"main_content"}},[e("div",{staticClass:"main_content col-md-10  p-0 text-center"},[e("h2",{staticClass:"card-title"},[this._v("Contact")]),this._v(" "),this._m(0),this._v(" "),e("ContactForm")],1)])]),this._v(" "),e("ContactConfirm")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lead"},[e("p",[this._v("技術・メンターに関するお問い合わせをお受けしておリます！お気軽にお問い合わせください！")]),this._v(" "),e("p",[this._v("内容によってはご返答できない場合がございます。あらかじめご了承くださいませ。")])])}],!1,null,null,null);e.default=d.exports}}]);