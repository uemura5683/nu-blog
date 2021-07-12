<template>
  <div id="news-detail-page" class="container mt-4 p-0">
    <main> 
      <div class="container">
          <div class="main_content col-md-10  p-0">
            <div id="news-content-list">
              <div class="news-detail-inner">
                <div class="news-top-content">
                  <div class="c-post-info-top">
                    <h2 class="c-post-info-title">html/cssのみでカタンのアニメーションを作成しました。</h2>
                    <p class="c-post-content"><span class="c-post-info-date">2020年05月24日</span></p>
                  </div>
                  <figure>
                    <span class="figure_img" style="background-image:url(https://images.microcms-assets.io/protected/ap-northeast-1:f3c828ef-bb5b-4520-b823-220084360a59/service/uemura5683/media/blog_bg_20200522.png)"></span>
                  </figure>
                </div>
                <div class="dom-content">
                  <div class="dom-content-inner">
                    <p>
                      こんにちは、うえむーです。<br />
                      今日はhtml/cssのみでカタンのアニメーションを作成しました。<br />
                      これを作成するのに12時間以上かかり、アニメーションが思った以上に動かなくて本当に苦労しました。。。<br />
                      でも、諦めずになんとか作成できた。<br />
                    </p>
                    <h3>そもそもカタンとはなんだろう？</h3>
                    <p>
                      カタンというのは、ドイツで1995年に発売されて、大会が行われるほど世界中に愛されているゲームです。<br />
                      「カタン島」という無人島が舞台になっており、「資源」を集めて、「道」「家」「都市」などを開拓していき、
                      最終的に10ポイントを取得できたら勝ちというゲームです。<br /><br />
                      自分もカタンを持っています(笑)<br /><br />
                      <img src="https://images.microcms-assets.io/protected/ap-northeast-1:f3c828ef-bb5b-4520-b823-220084360a59/service/uemura5683/media/blog_content_20200522.jpg">
                      <br /><br />
                      ボードゲームカフェなどで、カタン大会が開催されており、自分も月に1回は参加しています！<br />
                      カタンは交渉力・戦略が求められ、一度やると結構病みつきになるので結構オススメです！<br />
                      カタンのルールを詳しく知りたい方は<a href="https://catan.jp/guide/" target="_blank">こちら</a>をクリックしてください。
                    </p>
                    <h3>完成品</h3>
                    <p>今回の完成品はこちらになります。<br /><br /></p>
                    <div class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="uemuragame5683" data-slug-hash="zYvbJba" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="html/css only catan responsive animation">
                      <span>See the Pen <a href="https://codepen.io/uemuragame5683/pen/zYvbJba">
                      html/css only catan responsive animation</a> by うえむー (<a href="https://codepen.io/uemuragame5683">@uemuragame5683</a>)
                      on <a href="https://codepen.io">CodePen</a>.</span>
                    </div>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                    <p>
                      <br />
                      アニメーションの動きは以下になります。<br />
                      <br />
                      1.海（外枠）/ 影を表示<br />
                      2.地形タイル(山・羊・土・砂漠・木・麦)を表示<br />
                      3.数字チップを表示<br />
                      4.海のグラデーション<br />
                      5.回転(少し見づらいですが、拡大してり縮小したりしてます。)
                    </p>

                    <h3>html/cssコーディングして苦労したこと</h3>
                    <p>
                      苦労したプロパティはボックスに影をつける<strong>[box-shadow]</strong>とアニメーションについてまとめて指定する<strong>[animation]</strong>です。<br />
                      <strong>[box-shadow]</strong>で大変だったのは、六角形のコンポーネントの部分です。<br />
                      今回のコンポーネントは六角形がメインで、正方形や円形なら無造作に設定できるのですが、六角形は擬似要素[:before、:after]を指定して作成しており、
                      <strong>[box-shadow]</strong>を設定しても任意通りにうまく表示されず、試行錯誤しておりました。<br /><br />
                      <strong>[animation]</strong>は簡易的な設定は問題ないのですが、そこまで凝ったアニメーション実装は今回が初めてで、animationに関するチュートリアルやガイドなどを色々と調べて試行錯誤してなんとか完成しました。。。<br />
                      <br />
                      具体的にどう記載したかは、codepenでコンテンツを出力しておりますのでこちらをご確認ください。<br />
                      また、カタンのアニメーションの解説は、このページに更新したいと思います。<br />
                      <br />
                      次は課題は以下で検討しております。<br />
                      ・next.js + micro cms と nuxt.js + next.jsとの比較検証<br />
                      ・cssで別のアニメーションを作成(window 98のデザインを作成 + アニメーション化したいと思います)<br />
                      ・golang で タイピングゲーム作成、フロント表示<br />
                      ・個人のブログサイトのUI改善、仕様変更、機能追加 etc...<br /><br />
                    　やりたいことが山の様にあるのですが、一つずつ課題をこなしていきたいと思います！<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'カタンアニメーション | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのカタンアニメーションページです。' }
      ]
    }
}
</script>