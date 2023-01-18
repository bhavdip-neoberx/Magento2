/*
 * @Author: Zoe
 * @Date:   2020-11-16
 * @Last Modified by:   Zoe Trinh
 * @Last Modified time: 2021-01-29 11:28:51
 */

require(['jquery'],
    function($) {
        $(document).ready(function() {
            /*toggle top menu*/
            $('.topmenu-close').on('click', function(event) {
                event.preventDefault();
                $('html').toggleClass('toggle-top-menu');
            });

            /* close-cookie*/
            $('.cookie-close').on('click', function(event) {
                event.preventDefault();
                $('.magepow-gdpr-cookie-notice').addClass('disable');
            });
            setInterval(function() {
                var leftTimeNode = $('body').find('#product-addtocart-button');
                leftTimeNode.addClass('_show');
                setTimeout(function() { leftTimeNode.removeClass('_show') }, 1000);

            }, 6000);

            /*$(window).on("scroll", function() {
            	let scrollHeight = $(document).height();
            	let scrollPosition = $(window).height() + $(window).scrollTop();
            	if ((scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
            	    $(".stickyCart").addClass('_disabled');
            	}else{
            		$(".stickyCart").removeClass('_disabled');
            	}
            });*/

            'use strict';
            $('body').append('<div class="menu-overlay"></div>');
            $(".nav-desktop").mouseenter(function() {
                $('body').addClass('menu-open');

                $(".menu-overlay").fadeIn();
            });
            $('.nav-desktop').mouseleave(function() {
                $('body').removeClass('menu-open');
                $(".menu-overlay").hide();
            });
            $(".menu-overlay").mouseenter(function() {
                $(this).hide();
            });
            'use strict';
            $('.page-footer').append('<div class="overlay-bg"></div>');
            $(".block-title-vmagicmenu").on("click", function() {
                if ($(".block-title-vmagicmenu").hasClass("active")) {
                    $(".block-title-vmagicmenu").removeClass("active");
                    $("html").removeClass("open-nav-vertical");
                } else {
                    $(".block-title-vmagicmenu").addClass("active");
                    $("html").addClass("open-nav-vertical");

                }

            });


            $(window).resize(function() {
                var windowWidth = $(window).width();
                if (windowWidth > 767) {
                    $('.menu-ft .toggle-content').slideDown();
                }
                if (windowWidth == 767) {
                    $('.menu-ft').removeClass('opened');
                    $('.menu-ft .toggle-content').slideUp();
                }
            });
            $(".toggle-mobile").on('click', function(event) {
                if ($(window).width() > 767) {
                    event.stopPropagation();
                } else {
                    $(this).parent().hasClass('opened') ? $(this).parent().removeClass('opened') : $(this).parent().addClass("opened");
                    $(this).next().slideToggle();
                }
            });



            /*toggle search screen large*/
            $(".toggle-slide-search").on('click', function() {
                $("html").toggleClass("search-opened");
                $(".search-area").toggleClass("active");
            });
            $(".close-search-screen-large").on('click', function() {
                $(".toggle-slide-search").trigger("click");
            });


            $("#select-box-category").on("click", function() {
                var ul = document.getElementById("categories-box");

                if (ul.style.display === 'none') {
                    $(this).parent().addClass("active");
                    $(".minisearch").removeClass("all-categories-opened");
                } else {
                    $(this).parent().addClass("active");
                    $(".minisearch").addClass("all-categories-opened");

                }

            });
            $("#categories-box .cat-list li").on("click",function(){
                $(".minisearch").removeClass("all-categories-opened");
            });
           $('.rating-summary .rating-result').each(function(){
                $(this).children().attr('style', 'width:'+$(this).attr('title'));
            });
           $('.checkout-cart-index .action.tocart').on('click', function() {
                $(this).addClass('disabled');
           });
        });
    });