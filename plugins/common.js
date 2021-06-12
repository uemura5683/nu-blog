if (process.browser) {

  let html                  = document.documentElement,
      body                  = document.body,
      headers               = document.getElementsByClassName( 'header' ),
      footers               = document.getElementsByClassName( 'footer' ),
      overlay               = document.getElementsByClassName( 'overlay' ),
      scrollTop             = 0, 
      top_page              = document.getElementById( 'top-page' ),
      news_page             = document.getElementById( 'news-list-page' ),
      news_detail_page      = document.getElementById( 'news-detail-page' ),
      profile_page          = document.getElementById( 'profile-page' ),
      contact_page          = document.getElementById( 'inquiry-page' ),
      search_form           = document.getElementById( 'searchform' ),
      search_input          = document.getElementById( 'search_input' ),      
      search_btn            = document.getElementById( 'search_icon' ),
      limitsegment          = document.getElementById( 'limit' ),
      sortsegment           = document.getElementById( 'sort' ),
      top_animation_bg      = document.getElementById( 'animaton_bg' ),
      top_page_flag         = top_page != null ? true : false,
      news_page_flag        = news_page != null ? true : false,
      news_detail_page_flag = news_detail_page != null ? true : false,
      profile_page_flag     = profile_page != null ? true : false,
      ApiKey                = process.env.API_KEY;

   // スクロールトップ
   let scrollTo = function ( dom, to, duration ) {
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
    };    

  //　スクロール
  if ( footers[0] ) {
      let pagetop   = footers[0].querySelector( '.pagetop' )
        , duration  = 240;
      let
      gototopper = function ( event ) {
          event.preventDefault();
          scrollTo( body, 0, duration );
          scrollTo( html, 0, duration );
      }
      pagetop.addEventListener( 'click', gototopper, false );
    }

  // ハンバーガーメニュー
  if ( headers[0] || overlay[0] ) {
    let menu_btn   = headers[0].querySelector( '.menu_btn' );
    let
    humberger = function ( event ) {
        event.preventDefault();
        if( body.classList.contains('active') ) {
          body.classList.remove('active');
        } else {
          body.classList.add('active');
        }
    }
    menu_btn.addEventListener( 'click', humberger, false );
    overlay[0].addEventListener( 'click', humberger, false );
  }

  // 検索キーワード
  if( search_form || search_btn ) {
    let search_event = function ( event ) {
      let suffix  = location.pathname.slice( -1 ),
          targets  = suffix.indexOf('/') != -1
                          ? news_detail_page_flag
                                  ? location.pathname.slice( 0, -8 ).split('/').pop()
                                  : location.pathname.slice( 0, -1 ).split('/').pop()
                          : news_detail_page_flag
                                  ? location.pathname.slice( 0, -7 ).split('/').pop()
                                  : location.pathname.split('/').pop(),
          searchpath = null,
          searchparams = search_input.value;
          location.href = '/blog/all?keyword=' + searchparams;      
    }

    let search = function ( event ) {
      search_event();
    }
    let keycodes = function ( event ) {
      if( event.keyCode == 13 ) {
        search_event();
      }
    }
    search_input.addEventListener( 'keypress', keycodes );
    search_btn.addEventListener( 'click', search, false );

    if( top_page_flag ) {
      var webStorage = function() {
        if( sessionStorage.getItem ('access' ) ) {
          top_animation_bg.classList.add( 'access' );
        } else {
          sessionStorage.setItem( 'access', 0 );
        }
      }
      webStorage();
    }
  }
  
  window.onload = function( org ) {
    if( search_form || search_btn ) {

      let queryString = location.search
      , queryObject = new Object();

      if( queryString != "" && queryString != null && queryString != undefined ) {
        queryString = queryString.substring(1);
        var parameters = queryString.split('&');
      
        for (var i = 0; i < parameters.length; i++) {
          var element = parameters[i].split('=');
      
          var paramName = decodeURIComponent(element[0]);
          var paramValue = decodeURIComponent(element[1]);
      
          queryObject[paramName] = paramValue;
        }
        if( paramName == 'keyword' ) {
          search_input.value = paramValue;
        }
      }
    }



  }

  // 対象ページがニュースの時に発火
  let date_change = function( org ) {
    let year = null, month = null, day = null, dateday = null;
        year  = org.substr( 0, 4 ),
        month = org.substr( 5, 2 ),
        day   = org.substr( 8, 2 ),
        dateday = year + '年' + month + '月' + day + '日';
    return dateday;
  }
  let param_dudge = function( org, trg ) {
    if( org ) {

      // 「&」が含まれている場合は「&」で分割
      let param = org.split( '&' );
    
      // パラメータを格納する用の配列を用意
      let paramArray = [];
    
      // 用意した配列にパラメータを格納
      for ( let i = 0; i < param.length; i++ ) {
        var paramItem = param[i].split( '=' );
        paramArray[ paramItem[ 0 ] ] = paramItem[ 1 ];
      }
      let viewflag = paramArray.date_id == trg ? true : false;
      return viewflag;
    }
  }

  // モールトップページ
  if( top_page_flag ) {
    let top_main_banner       = document.getElementById("main_banner"),
        top_news_banner       = document.getElementById("news"),
        top_profile_banner    = document.getElementById("profile");

    let top_link_judge = function( urls, image, alt ) {
      let img_link = null;
      if( urls != undefined ) {
        img_link = '<a href="' + urls + '"><img src="' + image +'" alt="' + alt + '"></a>';
      } else {
        img_link = '<img src="' + image +'" alt="' + alt + '">';
      }
      return img_link;
    }

    let top_link_judge_type2 = function( link ,image, alt ) {
      let img_link_type2 = null;
      img_link_type2 = '<a href="' + link + '" style="background-image:url(' + image + ')" alt="' + alt + '"></a>';
      return img_link_type2;
    }

    let top_blog_content = function( jsondata, eng, param ) {
      // プログラミングコンテンツを表示
      let top_new_html = '<h2 class="card-title">' + eng + '</h2>';
          top_new_html += '<ul class="row-cols-2 row-cols-lg-3">';
          jsondata.forEach( news_element => {
            let link_url = null;
            if( news_element.link != undefined ) link_url = news_element.link;
            else link_url = '/blog/' + param +'/detail?date_id=' + news_element.id;
            top_new_html += '<li class="c-card-extend">';
            top_new_html += '<figure>' + top_link_judge_type2( link_url, news_element.image.url, news_element.title ) + '</figure>';
            top_new_html += '<p class="c-post-content"><span class="c-post-info-date">' +  date_change( news_element.date ) +  '</span><span class="c-post-info-title">' +  news_element.title +  '</span></p>';
            top_new_html += '</li>';
          });
          top_new_html += '</ul>';
      return top_new_html; 
    }

    fetch("https://uemura5683.microcms.io/api/v1/top", {
            headers: {
              "X-API-KEY": ApiKey
            }
          })
          .then(res => res.json())
          .then(json => {

              // メインビジュアルを表示
              let top_html = '<section class="carousel" aria-label="Gallery"><ol class="carousel__viewport">';
                  if( json.main_image1 != undefined ) {
                    top_html += '<li id="carousel__slide1" tabindex="0" class="carousel__slide">';
                    top_html += '<span class="carousel__snapper">' + top_link_judge( json.main_image1_link, json.main_image1.url, json.main_image1_alt ); + '</span>';
                    top_html += '<a href="#carousel__slide3" class="carousel__prev">prev</a><a href="#carousel__slide2" class="carousel__next">next</a>';
                    top_html += '</li>';
                  }
                  if( json.main_image2 != undefined ) {
                    top_html += '<li id="carousel__slide2" tabindex="0" class="carousel__slide">';
                    top_html += '<span class="carousel__snapper">' + top_link_judge( json.main_image2_link, json.main_image2.url, json.main_image2_alt ); + '</span>';
                    top_html += '<a href="#carousel__slide1" class="carousel__prev">prev</a><a href="#carousel__slide3" class="carousel__next">next</a>';
                    top_html += '</li>';
                  }
                  if( json.main_image3 != undefined ) {
                    top_html += '<li id="carousel__slide3" tabindex="0" class="carousel__slide">';
                    top_html += '<span class="carousel__snapper">' + top_link_judge( json.main_image3_link, json.main_image3.url, json.main_image3_alt ); + '</span>';
                    top_html += '<a href="#carousel__slide2" class="carousel__prev">prev</a><a href="#carousel__slide1" class="carousel__next">next</a>';
                    top_html += '</li>';
                  }
                  top_html += '</ol></section>';
                  top_main_banner.innerHTML = top_html;

              let top_new_html = '<div class="top_content_inner"><div class="top_content_inner text-center">';

                  if( json.top_portfolio.length > 0 ) {
                    top_new_html += top_blog_content( json.top_portfolio, 'Portfolio', 'portfolop' ); // ポートフォリオコンテンツを表示
                  }
                  if( json.top_business.length > 0 ) {
                    top_new_html += top_blog_content( json.top_business, 'Business',  'business' ); // ビジネスコンテンツを表示
                  }
                  if( json.top_life.length > 0 ) {
                    top_new_html += top_blog_content( json.top_life, 'Life', 'life' ); // ライフンテンツを表示
                  }
                  top_new_html += '</div></div>';
                  top_news_banner.innerHTML = top_new_html; 
    } );
  }

  // ニュース一覧・ニュース詳細ページ
  if( news_page_flag || news_detail_page_flag ) {
    let suffix  = location.pathname.slice( -1 ),
        target  = suffix.indexOf('/') != -1
                        ? news_detail_page_flag
                                ? location.pathname.slice( 0, -8 ).split('/').pop()
                                : location.pathname.slice( 0, -1 ).split('/').pop()
                        : news_detail_page_flag
                                ? location.pathname.slice( 0, -7 ).split('/').pop()
                                : location.pathname.split('/').pop(),
        cmspath = null; 

    let queryString = location.search
      , queryObject = new Object();

    if( queryString != "" && queryString != null && queryString != undefined ) {
      queryString = queryString.substring(1);
      var parameters = queryString.split('&');
    
      for (var i = 0; i < parameters.length; i++) {
        var element = parameters[i].split('=');
    
        var paramName  = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);
    
        queryObject[paramName] = paramValue;
      }
    }

    switch ( target ) {
      case 'business':
            cmspath = 'business'
      break;
      case 'life':
            cmspath = 'life';
      break;
      case 'portfolio':
            cmspath = 'portfolio';
      break;
      default:
            cmspath = 'all';
      break;
    }
    if( paramName == 'keyword' && paramValue != '' ) {
      var blogapi = "https://uemura5683.microcms.io/api/v1/" + cmspath + "?&q=" + paramValue;
    } else {
      var blogapi = "https://uemura5683.microcms.io/api/v1/" + cmspath;
    }

    // function changelimit( obj ) {
    //   var params = location.href;
    //   function getParams(params){
    //     let regex = /[?&]([^=#]+)=([^&#]*)/g;
    //     let params_obj = {};
    //     let match;
    //     while(match = regex.exec(params)){
    //       params_obj[match[1]] = match[2];
    //     }
    //     return params_obj;
    //   }
    //   console.log(getParams(params));
    // }
    // limitsegment.addEventListener( 'change', changelimit, false );

    // function changesort( obj ) {
    //   var params = location.href;
    //   function getParams(params){
    //     let regex = /[?&]([^=#]+)=([^&#]*)/g;
    //     let params_obj = {};
    //     let match;
    //     while(match = regex.exec(params)){
    //       params_obj[match[1]] = match[2];
    //     }
    //     return params_obj;
    //   }
    //   console.log(getParams(params));      
    // }
    // sortsegment.addEventListener( 'change', changesort, false );

    fetch( blogapi, {
      headers: {
        "X-API-KEY": ApiKey
      }
    } )
    .then( res => res.json() )
    .then( json => {
      let json_contents = json.contents,
          news_length   = json_contents.length,
          news_content_id = document.getElementById( 'news-content-list' ),
          news_content_class = news_content_id.getElementsByClassName( 'news_content_inner' );

      // ブログ詳細ページ
      if( document.URL.match( "/detail" ) ) {
        let news_html = '<div class="news-detail-inner">';
        for ( let index = 0; index < news_length; index++ ) {
          const element = json_contents[index], 
                url     = element.link != undefined ? element.link : '/blog/' + target + '/detail?date_id=' + element.id,
                change_date = date_change(element.date),
                param_flag = param_dudge(location.search.substring(1), element.id);
          if( param_flag == true ) {
            news_html += '<div class="news-top-content">';
            news_html += '<div class="c-post-info-top"><h2 class="c-post-info-title">' + element.title + '</h2><p class="c-post-content"><span class="c-post-info-date">' + change_date + '</span></p></div>'
            news_html += '<figure><span class="figure_img" style="background-image:url(' + element.image.url +')"></span></figure>';
            news_html += '</div>';
            news_html += '<div class="dom-content">';
            if( element.body != undefined ) news_html += '<div class="dom-content-inner">' + element.body + '</div>';
            if( element.body2 != undefined ) news_html += '<div class="dom-content-inner">' + element.body2 + '</div>';
            if( element.body3 != undefined ) news_html += '<div class="dom-content-inner">' + element.body3 + '</div>';
            news_html += '</div>';
          }
        }
        news_html += '</div>';
        news_content_id.innerHTML = news_html;

      // ブログ詳細一覧ページ
      } else {
        if( news_content_class[0] != undefined ) {
          let news_html = '<ul class="row-cols-2 row-cols-lg-3">';
          for ( let index = 0; index < news_length; index++ ) {
            const element = json_contents[index], 
                  url     = element.link != undefined ? element.link : '/blog/' + target +'/detail?date_id=' + element.id,
                  change_date = date_change(element.date);
            news_html += '<li class="c-card-extend">';
            news_html += '<figure><a href="' + url + '" style="background-image:url(' + element.image.url +')"></a></figure>';
            news_html += '<p class="c-post-content"><span class="c-post-info-date">' + change_date + '</span><span class="c-post-info-title"><a href="' + element.link + '">' + element.title + '</a></span></p>';
            news_html += '</li>';
          }
          news_html += '</ul>';
          news_content_class[0].insertAdjacentHTML('beforeend', news_html);
        }
      }
    } );
  }

  // プロフィールページ
  if( profile_page_flag ) {
    fetch("https://uemura5683.microcms.io/api/v1/blog", {
        headers: {
          "X-API-KEY": ApiKey
        }
      })
      .then(res => res.json())
      .then(json => {
          document.getElementById("title").innerHTML = "<h2>" + json.title + "</h2>";
          document.getElementById("img").innerHTML = "<img src='" + json.image.url + "' alt='" + json.title + "'>";
          document.getElementById("description").innerHTML = json.description;
          document.getElementById("adobe").innerHTML = "<h3>" + json.skill[0].title + "</h3><div class='skill_detail'>" + json.skill[0].html + "</div>";
          document.getElementById("programing").innerHTML = "<h3>" + json.skill[1].title + "</h3><div class='skill_detail'>" + json.skill[1].html + "</div>";
          document.getElementById("cms").innerHTML = "<h3>" + json.skill[2].title + "</h3><div class='skill_detail'>" + json.skill[2].html + "</div>";
          document.getElementById("business").innerHTML = "<h3>" + json.skill[3].title + "</h3><div class='skill_detail'>" + json.skill[3].html + "</div>";
          document.getElementById("studynow").innerHTML = "<h3>" + json.skill[4].title + "</h3><div class='skill_detail'>" + json.skill[4].html + "</div>";
          console.log(json.skill);  
        } );
  }
}