<template>
  <div id="news-detail-page" class="container mt-4 p-0">
    <main> 
      <div class="container">
          <div class="main_content col-md-10  p-0">
            <div id="news-content-list">
              <div class="news-detail-inner">
                <h2 class="title-name">「block &amp; float」・「inline-block」・「flex」・「grid」の比較検証</h2>
                <div class="dom-content">
                  <div class="dom-content-inner">
                    <p>
                      こんにちは、うえむーです！<br />
                      今回は「block &amp; float」・「inline-block」・フレックスボックス「flex」・CSS Grid Layout「grid」についてお話したいと思います。<br />
                      ブロックコンテンツを横並びにする場合、方法はいくつかあり、最初の頃は「block &amp; float」で実行しておりました。<br />
                      次第に「inline-block」・「flex」・「grid」と、どんどん新しい手法が誕生して、html/cssの進化は本当に凄まじいものです(汗)<br /><br />
                      今回は以下のコンテンツで「block &amp; float」・「inline-block」・「flex」・「grid」で実装してどのくらいのコード量でかけるか比較したいと思います。<br />
                      ※IE11は表示崩れております。あらかじめご了承ください。
                    </p>
                  </div>
                  <div class="dom-content-inner">
                    <div class="block_content-inner">
                      <span>PC</span>
                      <img src="/content/grid/image/block_content_pc.png" alt="block-content-pc">
                    </div>
                    <div class="block_content-inner">
                      <span>SMP</span>
                      <img src="/content/grid/image/block_content_smp.png" alt="block-content-smp">
                    </div>
                  </div>
                </div>

                <!-- display: block; -->
                <h3 class="block-name">display: block</h3>
                <div class="d-block">
                  <div class="d-block-inner" style="background-image:url('//placehold.jp/cc9999/993333/300x300.png')"></div>
                  <div class="d-block-inner">
                    <div class="d-block-inner_block" style="background-image:url('//placehold.jp/cccc99/999933/150x150.png')"></div>
                    <div class="d-block-inner_block" style="background-image:url('//placehold.jp/999999/333333/150x150.png')"></div>
                    <div class="d-block-inner_block" style="background-image:url('//placehold.jp/9999cc/333399/300x150.png')"></div>
                  </div>
                  <div class="d-block-inner" style="background-image:url('//placehold.jp/cc99cc/993399/300x300.png')"></div>
                  <div class="d-block-inner">
                    <div class="d-block-inner_block" style="background-image:url('//placehold.jp/99cc99/33ff33/300x150.png')"></div>
                    <div class="d-block-inner_block" style="background-image:url('//placehold.jp/993399/ff11ff/150x150.png')"></div>
                    <div class="d-block-inner_block" style="background-image:url('//placehold.jp/000000/ffffff/150x150.png')"></div>
                  </div>
                </div>

                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="uemuragame5683" data-slug-hash="YzwLWWO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="display: block;">
                  <span>See the Pen <a href="https://codepen.io/uemuragame5683/pen/YzwLWWO">
                  display: block;</a> by うえむー (<a href="https://codepen.io/uemuragame5683">@uemuragame5683</a>)
                  on <a href="https://codepen.io">CodePen</a>.</span>
                </p>

                <h3 class="result-title">結果</h3>
                <div class="result-code">
                  <p>html:14行</p>
                  <p>css:50行</p>
                </div>
                <!-- display: block; -->

                <!-- display: inline-block; -->
                <h3 class="block-name">display: inline-block</h3>
                <div class="d-inline-block">
                  <div class="d-inline-block-inner" style="background-image:url('//placehold.jp/cc9999/993333/300x300.png')"></div>
                  <div class="d-inline-block-inner">
                    <div class="d-inline-block-inner_block" style="background-image:url('//placehold.jp/cccc99/999933/150x150.png')"></div>
                    <div class="d-inline-block-inner_block" style="background-image:url('//placehold.jp/999999/333333/150x150.png')"></div>
                    <div class="d-inline-block-inner_block" style="background-image:url('//placehold.jp/9999cc/333399/300x150.png')"></div>
                  </div>
                  <div class="d-inline-block-inner" style="background-image:url('//placehold.jp/cc99cc/993399/300x300.png')"></div>
                  <div class="d-inline-block-inner">
                    <div class="d-inline-block-inner_block" style="background-image:url('//placehold.jp/99cc99/33ff33/300x150.png')"></div>
                    <div class="d-inline-block-inner_block" style="background-image:url('//placehold.jp/993399/ff11ff/150x150.png')"></div>
                    <div class="d-inline-block-inner_block" style="background-image:url('//placehold.jp/000000/ffffff/150x150.png')"></div>
                  </div>
                </div>

                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="uemuragame5683" data-slug-hash="ZEQRodM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="inline-block">
                  <span>See the Pen <a href="https://codepen.io/uemuragame5683/pen/ZEQRodM">
                  inline-block</a> by うえむー (<a href="https://codepen.io/uemuragame5683">@uemuragame5683</a>)
                  on <a href="https://codepen.io">CodePen</a>.</span>
                </p>

                <h3 class="result-title">結果</h3>
                <div class="result-code">
                  <p>html:14行</p>
                  <p>css:52行</p>
                </div>

                <!-- display: inline-block; -->

                <!-- display: flex; -->
                <h3 class="block-name">display: flex</h3>
                <div class="d-flex">
                  <div class="d-flex-inner" style="background-image:url('//placehold.jp/cc9999/993333/300x300.png')"></div>
                  <div class="d-flex-inner">
                    <div class="d-flex-inner_block" style="background-image:url('//placehold.jp/cccc99/999933/150x150.png')"></div>
                    <div class="d-flex-inner_block" style="background-image:url('//placehold.jp/999999/333333/150x150.png')"></div>
                    <div class="d-flex-inner_block" style="background-image:url('//placehold.jp/9999cc/333399/300x150.png')"></div>
                  </div>
                  <div class="d-flex-inner" style="background-image:url('//placehold.jp/cc99cc/993399/300x300.png')"></div>
                  <div class="d-flex-inner">
                    <div class="d-flex-inner_block" style="background-image:url('//placehold.jp/99cc99/33ff33/300x150.png')"></div>
                    <div class="d-flex-inner_block" style="background-image:url('//placehold.jp/993399/ff11ff/150x150.png')"></div>
                    <div class="d-flex-inner_block" style="background-image:url('//placehold.jp/000000/ffffff/150x150.png')"></div>
                  </div>
                </div>

                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="uemuragame5683" data-slug-hash="JjGvKYO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JjGvKYO">
                  <span>See the Pen <a href="https://codepen.io/uemuragame5683/pen/JjGvKYO">
                  JjGvKYO</a> by うえむー (<a href="https://codepen.io/uemuragame5683">@uemuragame5683</a>)
                  on <a href="https://codepen.io">CodePen</a>.</span>
                </p>

                <h3 class="result-title">結果</h3>
                <div class="result-code">
                  <p>html:14行</p>
                  <p>css:52行</p>
                </div>
                <!-- display: flex; end -->

                <!-- display: grid; -->
                <h3 class="block-name">display: grid</h3>
                <div class="d-grid">
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/cc9999/993333/300x300.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/cccc99/999933/150x150.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/999999/333333/150x150.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/9999cc/333399/300x150.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/cc99cc/993399/300x300.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/99cc99/33ff33/300x150.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/993399/ff11ff/150x150.png')"></div>
                  <div class="d-grid-inner" style="background-image:url('//placehold.jp/000000/ffffff/150x150.png')"></div>
                </div>

                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="uemuragame5683" data-slug-hash="jOWxrNO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="jOWxrNO">
                  <span>See the Pen <a href="https://codepen.io/uemuragame5683/pen/jOWxrNO">
                  jOWxrNO</a> by うえむー (<a href="https://codepen.io/uemuragame5683">@uemuragame5683</a>)
                  on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
                <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                <h3 class="result-title">結果</h3>
                <div class="result-code">
                  <p>html:10行</p>
                  <p>css:44行</p>
                </div>
                <!-- display: grid; end -->

                <h3 class="summary-title">まとめ</h3>
                <div class="summary-txt">
                  block &amp; float・inline-block・flex・gridのコードを量をまとめると以下になりました！<br /><br />
                  <span>・ block</span><span class="summary-code">html:14行・css:50行</span><br />
                  <span>・ inline-block</span><span class="summary-code">html:14行・css:52行</span><br />
                  <span>・ flex</span><span class="summary-code">html:14行・css:52行</span><br />
                  <span>・ grid</span><span class="summary-code">html:10行・css:44行</span><br /><br />
                  「grid」は他の手法と比べてhtml/cssのコード量が抑えられましたね！<br /><br />
                  「grid」は最初にうちは慣れないかもしれませんが、「grid」 + 「chromeの検証ツールのsourceタブ」を使えば数倍仕事が早くなるかと思います。<br /><br />
                  ぜひ、試して見てください！
                  
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
      title: '「block & float」・「inline-block」・「flex」・「grid」の比較検証 | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      link: [
        { rel: 'stylesheet', href: '/content/grid/css/grid.css'}        
      ],
      meta: [
        { hid: 'description', name: 'description', content: '「block & float」・「inline-block」・「flex」・「grid」でどのくらいのコード量でかけるか検証します。' }
      ]
    }
}
</script>