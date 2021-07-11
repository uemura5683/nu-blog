if (process.browser) {

  let html                  = document.documentElement,
      body                  = document.body,
      headers               = document.getElementsByClassName( 'header' ),
      footers               = document.getElementsByClassName( 'footer' ),
      overlay               = document.getElementsByClassName( 'overlay' ),
      top_page              = document.getElementById( 'top-page' ),
      search_form           = document.getElementById( 'searchform' ),
      search_input          = document.getElementById( 'search_input' ),      
      search_btn            = document.getElementById( 'search_icon' ),
      top_animation_bg      = document.getElementById( 'animaton_bg' ),
      top_page_flag         = top_page != null ? true : false;

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
      let searchparams = search_input.value;
          location.href = '/search/' + searchparams;      
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
      }
    }
  }
}