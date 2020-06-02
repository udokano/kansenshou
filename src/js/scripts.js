// JavaScript Document


var url = location.href;

console.log(url);

if (url.match("/access.html")) {
  $('.p-pages-visual').addClass("p-pages-visual--bg-access");
}







//TOP_MENU_link
$('.js-link').on('click', function (e) {
  e.stopPropagation();
  e.preventDefault();

  location.href = $(this).attr('data-url');
})




//TOP__PAGE__slide

$(function () {
  $("#js-slide").slick({
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,

    slidesToShow: 3,
    prevArrow: '<div class="arrow prev"></div>',
    nextArrow: '<div class="arrow next"></div>',
    responsive: [
      {
        //モバイル時のスライド
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          autoplay: false
        }
      }
    ]
  });
});

$(function () {
  //スムーススクロール
  var headerHight = 0; //ヘッダの高さ
  $('a[href^=#]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
});


//HEADER NAV URL部分一致

$(function () {
  $('.header__nav ul li a').each(function () {
    //現在ページのURLの末尾を取得
    var activeUrl = location.pathname.split("/")[2]; // 2階層目
    //テスト出力
    console.log(activeUrl);
    //valu(カテゴリースラッグ)取得
    var href = $(this).attr('href');
    //テスト出力
    //console.log(href);
    if (href == activeUrl) {
      $(this).addClass("is-active");
    }
  });
});
//SP
$(function () {
  $('.nav-link li a').each(function () {

    var activeUrl = location.pathname.split("/")[2]; // 2階層目
    //テスト出力
    //console.log(activeUrl);
    //valu(カテゴリースラッグ)取得
    var href = $(this).attr('href');
    //テスト出力
    //console.log(href);
    if (href == activeUrl) {
      $(this).addClass("is-active");
    }
  });
});


//Q&A ページ高さ揃える
$(window).on("load resize", function () {
  if ($(this).width() >= 768) {
    setTimeout(function () {
      var maxH = 0;
      $(".main-flex").find(".section-inner").each(function () {
        if ($(this).height() > maxH) maxH = $(this).height();
      });
      $(".main-flex").find(".section-inner").height(maxH);
    }, 200);
  }
});



//PRICE PAGE SP アコーディアン
$(function () {
  $(".toggle-btn").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("js-open");
  });

});
