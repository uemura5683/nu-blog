<template>
  <div class="container windowsxp">
    <main> 
      <div class="breadcrumb">
        <div class="breadcrumb__ttl col-2">リンク</div>
        <div class="breadcrumb__pulldown col-10">
            <select onChange="location.href=value;">
              <option value="/">TOP</option>              
              <option value="/blog/business">Business</option>
              <option value="/blog/life">Life</option>
              <option value="/portfolio">Portfolio</option>
              <option value="/profile/">Profile</option>
              <option value="/contact/">Contact</option>
              <option value="https://twitter.com/uemuragame5683" target="_blank">SNS</option>
            </select>
        </div>
      </div>
      <div id="main_content" class="container d-block d-md-flex mt-3 p-0">
        <div class="main_content col-md-12 p-0">
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text">
                  window XPについて
                </div>
              </div>
              <div class="window-body">
                <p>
                  こんにちは、うえむーです！<br />
                一瞬、あれ？違うサイトにいってしまった！と思いませんでしたか？<br />
                実はこれ、windowsXP風にくわえられる【XP.css】というcssのプラグインを導入して実装しているんです！<br />
                ただ、共通コンテンツのヘッダー・フッター・サイドナビに関しては、<br />
                class属性を加えると他のページに影響するし、出し分けするのが大変ので、<br />
                該当するページにcssをくわえてstyleを調整しております。<br />
                bootstrapなどいろんなcssをくわえているので、レイアウト崩れ調整は本当に大変でした。。。<br /><br />
                </p>
                <p>
                  【XP.css】の導入方法は2パターンあります。<br />
                  <h3>ライブラリ</h3>
                  <pre><code>&lt;link rel="stylesheet" href="https://unpkg.com/xp.css"&gt;</code></pre>
                  <h3>npm から【XP.css】インストール</h3>
                  <pre><code>npm install xp.css</code></pre>
                  <pre><code>// For XP<br />import "xp.css/dist/XP.css";</code></pre>
                </p>
                <p>
                ライブラリを導入した【XP.css】のURLは
                <a href="https://botoxparty.github.io/XP.css/?fbclid=IwAR2y6Da7Hc5IRbqxwZ3cWJ3cs5zYHpkCzxh625mTyTMhz92XsdjhIGjTpL8" target="_blank">こちら</a>
                になります！
                </p>
              </div>
            </div>
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text">
                  コンポーネント
                </div>
              </div>
              <div class="window-body">
                <p>
                  XP.cssのコンポーネントを一部分紹介して行きます。<br />
                  もっと詳しくみたい方は<a href="https://botoxparty.github.io/XP.css/?fbclid=IwAR2y6Da7Hc5IRbqxwZ3cWJ3cs5zYHpkCzxh625mTyTMhz92XsdjhIGjTpL8" target="_blank">【XP.css】のサイト</a>にてご確認ください。<br />
                  コンポーネントをみて懐かしんでください。<br />
                  ※下記に記載している、コンポーネント一覧は【XP.css】のサイトをの一部を流用しております。<br /><br />
                </p>
                <div class="window-body__inner">
                  <h3>ボタン</h3>
                  <div class="sample">
                    <div class="sample__conponent">
                      <button>Click me</button>
                    </div>
                    <pre><code><span>&lt;<span>button</span>&gt;</span>Click me<span>&lt;/<span>button</span>&gt;</span></code></pre>
                  </div>
                  <div class="sample">
                    <p>buttonタグに「disabled」属性を加えると以下になります。</p>
                    <div class="sample__conponent">
                      <button disabled>Click me</button>
                    </div>
                    <pre><code><span>&lt;<span>button disabled</span>&gt;</span>Click me<span>&lt;/<span>button</span>&gt;</span></code></pre>
                  </div>
                </div>
                <div class="window-body__inner">
                  <h3>スライダー</h3>
                  <p>スライダーまたはトラックバーコントロールとも言われており、BGMの音量調整する時に適用されております。</p>
                  <div class="sample">
                    <div class="sample__conponent">                    
                      <div class="field-row">
                        <label for="range25">Volume:</label>
                        <label for="range26">Low</label>
                        <input id="range26" type="range" min="1" max="11" value="5">
                        <label for="range27">High</label>
                      </div>
                    </div>
                    <pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"field-row"</span> <span>style</span>=<span>"width: 300px"</span>&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"range25"</span>&gt;</span>Volume:<span>&lt;/<span>label</span>&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"range26"</span>&gt;</span>Low<span>&lt;/<span>label</span>&gt;</span>
<span>&lt;<span>input</span> <span>id</span>=<span>"range26"</span> <span>type</span>=<span>"range"</span> <span>min</span>=<span>"1"</span> <span>max</span>=<span>"11"</span> <span>value</span>=<span>"5"</span> /&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"range27"</span>&gt;</span>High<span>&lt;/<span>label</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span></code></pre>
                  </div>
                </div>
                <div class="window-body__inner">
                  <h3>チェックボックス</h3>
                  <div class="sample">
                    <div class="sample__conponent">
                      <input type="checkbox" id="example1"><label for="example1">This is a checkbox</label>
                    </div>
                    <pre><code><span>&lt;<span>input</span> <span>type</span>=<span>"checkbox"</span> <span>id</span>=<span>"example1"</span>&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"example1"</span>&gt;</span>This is a checkbox<span>&lt;/<span>label</span>&gt;</span></code></pre>
                  </div>
                  <div class="sample">
                    <p>inputタグに「disabled」「checked」属性をそれぞれ加えると以下になります。</p>
                    <div class="sample__conponent">
                      <div class="field-row">
                        <input checked="" type="checkbox" id="example2">
                        <label for="example2">I am checked</label>
                      </div>
                      <div class="field-row">
                        <input disabled="" type="checkbox" id="example3">
                        <label for="example3">I am inactive</label>
                      </div>
                      <div class="field-row">
                        <input checked="" disabled="" type="checkbox" id="example4">
                        <label for="example4">I am inactive but still checked</label>
                      </div>
                    </div>
                       <pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"field-row"</span>&gt;</span>
<span>&lt;<span>input</span> <span>checked</span> <span>type</span>=<span>"checkbox"</span> <span>id</span>=<span>"example2"</span>&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"example2"</span>&gt;</span>I am checked<span>&lt;/<span>label</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;<span>div</span> <span>class</span>=<span>"field-row"</span>&gt;</span>
<span>&lt;<span>input</span> <span>disabled</span> <span>type</span>=<span>"checkbox"</span> <span>id</span>=<span>"example3"</span>&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"example3"</span>&gt;</span>I am inactive<span>&lt;/<span>label</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;<span>div</span> <span>class</span>=<span>"field-row"</span>&gt;</span>
<span>&lt;<span>input</span> <span>checked</span> <span>disabled</span> <span>type</span>=<span>"checkbox"</span> <span>id</span>=<span>"example4"</span>&gt;</span>
<span>&lt;<span>label</span> <span>for</span>=<span>"example4"</span>&gt;</span>I am inactive but still checked<span>&lt;/<span>label</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span></code>
                    </pre>
                  </div>  
                </div>
              </div>
            </div>
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text">
                  windows xp 起動画面
                </div>
              </div>
              <div class="window-body">
                <p>
                  windows xpの起動画面のアニメーションついてお話したいと思います。<br />
                  このアニメーションはプラグインを使わず、html/cssのみで作成しました。<br />
                  一番難しかったのはwindows xpのロゴですね(汗)<br />
                  特にグラデーションの部分は、一つ一つ細かく作成しました(笑)<br />
                  codepenでコンテンツを出力しましたので確認してみてください。<br />
                </p>
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="uemuragame5683" data-slug-hash="PoPMgpO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="windows xp start-up">
                  <span>See the Pen <a href="https://codepen.io/uemuragame5683/pen/PoPMgpO">
                  windows xp start-up</a> by うえむー (<a href="https://codepen.io/uemuragame5683">@uemuragame5683</a>)
                  on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
                <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
              </div>
            </div>
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text">
                  最後に
                </div>
              </div>  
              <div class="window-body">
                <p>今回は面白いのが作れました(笑)<br />
                これからもhtml/cssだけでなくいろんなものを挑戦したいと思います！<br />
                次は何を作ろうかなー<br />
                それではまた！</p>
              </div>
            </div>
          </div>
      </div>
      <div class="windows__bg">
        <div class="windows__bg--inner">
          <div class="windows__logo">
              <div class="windows__logo--inner red"></div>
              <div class="windows__logo--inner green"></div>
              <div class="windows__logo--inner blue"></div>
              <div class="windows__logo--inner yellow"></div>
          </div>
          <div class="windows__name">
              <p>Microsoft</p>
              <div class="windows__name--inner">
                  Windows<span>xp</span>
              </div>
          </div>
          <div class="windows__bg--loading">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/xp.css'},
        { rel: 'stylesheet', href: '/content/windowsxp/css/windowsxp.css'}        
      ],
      title: 'WindowsXPコンテンツ | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'WindowsXPコンテンツ' }
      ]
    }
}
</script>