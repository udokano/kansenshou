// JavaScript Document

//TOP__PAGE__HEADER__ARROW&FIXED
var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
  //SP
  $(window).on("scroll", function () {
    if ($(window).scrollTop() == 0) {
      $(".sp__slide-header").css({ opacity: "0", visibility: "hidden" });
    } else {
      $(".sp__slide-header").css({ opacity: "1", visibility: "inherit" });
    }
  });
} else {
  //PC
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $("#js-slide").addClass("is-arw");
      $("#site-header.top").removeClass("is-fixed");
    } else {
      $("#js-slide").removeClass("is-arw");
      $("#site-header.top").addClass("is-fixed");
    }
  });
}



//TOP_MENU_link
$('.js-link').on('click', function (e) {
  e.stopPropagation();
  e.preventDefault();

  location.href = $(this).attr('data-url');
})


//TOP PAGE MENU ANCHOR HOVER

$(".js-anchor.anchor-menu01 span").mouseover(
  function () {
    if (!$(this).hasClass("is-select")) {
      $(".js-anchor.anchor-menu01 span").not(this).removeClass("is-select");
      $(this).addClass("is-select");
    }
  }
);

$(".js-anchor.anchor-menu02 span").mouseover(
  function () {
    if (!$(this).hasClass("is-select")) {
      $(".js-anchor.anchor-menu02 span").not(this).removeClass("is-select");
      $(this).addClass("is-select");
    }
  }
);

$(".js-anchor.anchor-menu03 span").mouseover(
  function () {
    if (!$(this).hasClass("is-select")) {
      $(".js-anchor.anchor-menu03 span").not(this).removeClass("is-select");
      $(this).addClass("is-select");
    }
  }
);
$(".js-anchor.anchor-menu04 span").mouseover(
  function () {
    if (!$(this).hasClass("is-select")) {
      $(".js-anchor.anchor-menu04 span").not(this).removeClass("is-select");
      $(this).addClass("is-select");
    }
  }
);

$(".js-anchor.anchor-menu05 span").mouseover(
  function () {
    if (!$(this).hasClass("is-select")) {
      $(".js-anchor.anchor-menu05 span").not(this).removeClass("is-select");
      $(this).addClass("is-select");
    }
  }
);

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
  var headerHight = 100; //ヘッダの高さ
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
