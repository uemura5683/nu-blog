<template>
  <nav id="navigation">
      <ul>
          <li v-for="post of posts.contents">
            <a v-if="post.blank" v-bind:href="post.link" target="_blank">
            {{post.name}}
            </a>
            <nuxt-link v-else :to="post.link">
            {{post.name}}
            </nuxt-link>
          </li>
          <!--
          <li>
            <input type="checkbox" name="blog" id="blog">
            <label for="blog">Blog</label>
            <ul>
              <li><a href="/blog/business">Business</a></li>
              <li><a href="/blog/life">life</a></li>
            </ul>
          </li>
          <li><a href="/portfolio/">Portfolio</a></li>
          <li><a href="/profile/">Profile</a></li>
          <li><a href="/contact/">Contact</a></li>
          <li><a href="https://twitter.com/uemuragame5683" target="_blank">SNS</a></li>
          <li><a href="https://uemu-engineer.com/" target="_blank">Nu Stack</a></li>
          -->
      </ul>
  </nav>
</template>

<script>
export default {
  filters: {
      moment: function (date) {
          return moment(date).format('YYYY/MM/DD');
      }
  },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    this.posts = await fetch(
      `https://uemura5683.microcms.io/api/v1/gnavi`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    ).then(function(res) {
      return res.json();
    });
  }
}

</script>