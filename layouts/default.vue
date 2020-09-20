<template>
  <div class="layouts">
      <div class="header">
        <l-header />
      </div>
      <nuxt />
      <div class="footer">
        <l-footer />
      </div>
      <l-menu />
      <div class="overlay"></div>
  </div>
</template>

<script>
import LHeader from '~/components/layouts/header'
import LFooter from '~/components/layouts/footer'
import LMenu from '~/components/layouts/menu'
export default {
  components: {
    LHeader, LMenu, LFooter
  }
}
</script>