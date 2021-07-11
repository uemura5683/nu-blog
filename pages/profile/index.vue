<template>
  <div id="profile-page" class="container p-0">
    <main> 
      <div id="main_content" class="container d-block d-md-flex p-0">
        <div class="main_content col-md-10 p-0">
            <div id="name_img">
                <div id="title" class="col-md-4 col-12">{{ profile.title }}</div>
                <div id="img" class="col-md-4 col-12"><img :src="profile.image.url"></div>
            </div>
            <div id="description" v-html="profile.description"></div>
            <div id="adobe">
                <h3>{{profile.skill[0].title}}</h3>
                <div class='skill_detail' v-html="profile.skill[0].html"></div>
            </div>
            <div id="programing">
                <h3>{{profile.skill[1].title}}</h3>
                <div class='skill_detail' v-html="profile.skill[1].html"></div>
            </div>
            <div id="cms">
                <h3>{{profile.skill[2].title}}</h3>
                <div class='skill_detail' v-html="profile.skill[2].html"></div>
            </div>
            <div id="business">
                <h3>{{profile.skill[3].title}}</h3>
                <div class='skill_detail' v-html="profile.skill[3].html"></div>
            </div>
            <div id="studynow">
                <h3>{{profile.skill[4].title}}</h3>
                <div class='skill_detail' v-html="profile.skill[4].html"></div>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    head: {
      title: 'プロフィール | フロントエンド うえむーのブログサイト | NU-Blog(エヌ・ユーブログ)',
      meta: [
        { hid: 'description', name: 'description', content: 'フロントエンドエンジニアのうえむーのブログサイトのプロフィールページです。' }
      ]
    },
    data() {
      return {
        data: {}
      };
    },
    async asyncData({ params }) {
      const { data } = await axios.get(
        `https://uemura5683.microcms.io/api/v1/blog`,
        {
          headers: { 'X-API-KEY': process.env.API_KEY }
        }
      );
      return {
        profile: data
      }
    }
  }
</script>

<style lang="scss">
$white: #ffffff;
$l_gray: #fafafa;
$gray: #e5e5e5;
$d_gray: #666666;
$black: #000000;
$fs-min: 10;
$fs-max: 100;

#profile-page {
    main {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        background-color: $white;
        #main_content {
            .main_content {
                > * {
                    justify-content: center;
                    -webkit-justify-content: center;
                    align-items: center;
                    -webkit-align-items: center;
                    width: 100%;
                    height: auto;
                    background: #fff;
                    position: relative;
                    top: 0;
                    left: 0;
                    overflow-y: scroll;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 1.5rem;
                    background-color: $l_gray;
                    &:nth-of-type(even) {
                        background-color: $d_gray;
                        h2, h3 {
                            border-bottom: 1px solid $gray !important;                         
                        }
                        h2, h3, p {
                            color : $gray !important;
                        }
                        ul {
                            li {
                                span {
                                    color: $gray;
                                    &[class*="star"] {
                                        border: 1px solid $gray !important;
                                        &::after {
                                            content: '';
                                            background-color:$gray !important;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                #name_img {
                    #title {
                        margin: 0;
                        h2 {
                            font-size: 18px;  
                            padding: 10px 0;
                            border-bottom: 1px solid $d_gray;
                            width: 100%;
                        }
                    }
                    #img {
                        width: 100%;
                        position: relative;
                        span {
                            width: 100%;
                            padding: 100% 0 0;
                            position: absolute;
                            background-size: 100%;
                            background-repeat: no-repeat;
                            border-radius: 50%;
                        }
                    }
                }
                #description, #adobe, #programing, #cms, #business, #business, #studynow {
                    h2, h3 {
                        font-size: 1.2rem;
                        padding: 10px 0px;
                        margin: 10px auto;
                        border-bottom: 1px solid $d_gray;
                        width: 25%;
                    }
                    .skill_detail, p {
                        margin: 1rem 0 1rem 1.5rem;
                        width: calc( 75% - 1.5rem );
                        font-size: 1.2rem;
                        line-height: 1.6;
                    }
                    .skill_detail {
                        ul {
                            display: flex;
                            flex-wrap: wrap;
                            li {
                                margin: 1rem 0;
                                font-size: 1.2rem;
                                line-height: 1.6;
                                width: 47.5%;
                                &:nth-of-type( 2n - 1 ) {
                                    margin: 1rem 5% 1rem 0;
                                }
                                span {
                                    display: inline-block;
                                    width: 100%;
                                    &[class*="star"] {
                                        border: 1px solid $d_gray;
                                        padding: 3px;
                                        margin: 1rem 0 0;
                                        position: relative;
                                        &::after {
                                            content: '';
                                            background-color:$d_gray;
                                            height: 20px;
                                            position: relative;
                                            display: block;
                                            width: 100%;
                                        }
                                        @for $i from $fs-min through $fs-max {
                                            $width: percentage($i * 0.01);
                                            &.star#{$i} {
                                                &:after {
                                                    width: $width;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }        
            }
        }
    }
}

@media screen and (max-width: 767px) {
    #profile-page {
        padding: 0;
        main {
            padding: 0.5rem 0;
            #main_content {
                margin: 0 !important;
                .main_content {
                    padding: 0 15px !important;
                    margin: 0 !important;
                    #name_img {
                        #title {
                            margin: 0;
                            padding: 0 0 1rem;
                            h2 {
                                font-size: 1.2rem;
                                line-height: 1.8;
                            }
                        }
                        #img {
                            padding: 0;
                        }
                    }
                    #description, #adobe, #programing, #cms, #business, #business, #studynow {
                        h2, h3 {
                            font-size: 1.2rem;
                            line-height: 1.8;
                            width: 100%;
                            padding: 0;
                            margin: 0;
                        }
                        .skill_detail, p {
                            margin: 1rem 0;
                            width: 100%;
                            font-size: 1rem;
                            line-height: 1.6;
                        }
                        .skill_detail {
                            margin: 0;
                        }
                        li {
                            font-size: .9rem;
                            line-height: 1.4;
                            width: 100% !important;
                            margin: 1rem 0 !important;
                        }
                    }
                }
            }
        }
    }
}

#profile-page + .footer {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>