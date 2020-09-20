<template>
  <header>
    <div class="header-innter">
      <div class="header-left">
        <h1><a href="/"><img src="/logo.png" alt="フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)"></a></h1>
      </div>
      <div class="header-right 1-logo">
          <l-nav />
      </div>
    </div>
  </header>
</template>

<script>
import LNav from '~/components/layouts/nav'
export default {
  components: {
    LNav
  }
}
</script>