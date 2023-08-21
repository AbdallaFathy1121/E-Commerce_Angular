$(window).on('load', function() {

    $(".navbar .department .dropdown-menu .menu .dept").each (function (){
        $(this ).mouseover (function (){
            var id = $(this).attr("id");
            $(".navbar .department .dropdown-menu section"). each(function (){
                if($(this).hasClass(id)){
                    $(this).addClass("active_sec").siblings().removeClass("active_sec");
                }
            });
        });
    });

    ////////////////////////////////////////////////////////

    $('.owl-item').each(function(){
        $('.owl-item').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            margin: 10,
            items: 7,
            responsive:{
                0:{
                    items:2,
                },
                576:{
                    items:3,
                },
                768:{
                    items:4,
                },
                992:{
                    items:6,
                },
                1200: {
                    items: 7,
                }
            }
        })
    });

    $('.owl-cover').each(function(){
        $('.owl-cover').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            lazyLoad: true,
            smartSpeed: 900,
            items: 1,
            autoplayTimeout: 6000
        })
    });

    $('.owl-pro').each(function(){
        $('.owl-pro').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            margin: 13,
            items: 4,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:3,
                },
                1200: {
                    items: 4,
                }
            }
        })
    });

    $('.owl-advert').each(function(){
        $('.owl-advert').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            margin: 20,
            items: 2,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200: {
                    items: 2,
                }
            }
        })
    });

    ////////////////////////////////////////////////////////

    
    $('.evaluate').click(function() {
        $('.ev-box').css({
            top: 0
        });
    });

    $(".ev-box .overlay").click(function() {
        $('.ev-box').css({
            top: '100%'
        });
    });

    $(".ev-box .star .one").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .two").removeClass('active');
        $(".ev-box .star .three").removeClass('active');
        $(".ev-box .star .four").removeClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(1);
    });

    $(".ev-box .star .two").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .three").removeClass('active');
        $(".ev-box .star .four").removeClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(2);
    });

    $(".ev-box .star .three").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .two").addClass('active');
        $(".ev-box .star .four").removeClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(3);
    });

    $(".ev-box .star .four").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .two").addClass('active');
        $(".ev-box .star .three").addClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(4);
    });

    $(".ev-box .star .five").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .two").addClass('active');
        $(".ev-box .star .three").addClass('active');
        $(".ev-box .star .four").addClass('active');
        $("#star").val(5);
    });
    ////////////////////////////////////////////////////

    // SLick in Product page

    $('.slider-single').each(function(){
        $('.slider-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            adaptiveHeight: true,
            infinite: true,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        });

        $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            loop: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
            infinite: true,
            responsive: [{
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }]
        });
        
        $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
            $('.slider-nav').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.slider-nav .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });
        
        $('.slider-nav').on('click', '.slick-slide', function(event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
        
            $('.slider-single').slick('slickGoTo', goToSingleSlide);
        });

    });
        
    ////////////////////////////////////////////

    // Navbar On Scroll
    
    $(window).scroll(function(){

        if ( $(window).scrollTop() > 50 ) {
            $('nav').addClass('nav-fixed');
        } else{
            $('nav').removeClass('nav-fixed');
        }
    });

    /////////////////////////////////////////////////////
    
    $(".payment .box").click(function() {
        $(".payment .box").each(function() {
            $(".payment .box").removeClass("active_box");
        });
        $(this).addClass("active_box");
    });

    ////////////////////////////////////////////////////

    $("#verfication_code").keypress(function(event){
        if($("#verfication_code").val().length > 4) {
            event.preventDefault();
        }
    });

    ////////////////////////////////////////////////////

    $(".login .box .input-group #eye1").click(function() {
        $("#pass").attr("type", "text");
        $(this).hide();
        $(".login .box .input-group #eye").show();
    });

    $(".login .box .input-group #eye").click(function() {
        $("#pass").attr("type", "password");
        $(this).hide();
        $(".login .box .input-group #eye1").show();
    });

    ////////////////////////////////////////////////////
    
    // Colors

    var color = '';
    $(".product form .colors span").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var x = $(this).css('backgroundColor');
        hexc(x);
        $(".product form #color").val(color);
    });


    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
          parts[i] = parseInt(parts[i]).toString(16);
          if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');
    }

    ////////////////////////////////////////////////////
    
    // Toggle icon
    $(".love").on("click", function(){
        $(this).addClass("hidden").siblings().removeClass("hidden");
        $(this).parent().toggleClass("active");
    });

    $(".button-love").click(function(){
        $(this).toggleClass("active").removeClass("hidden");
    });

    /////////////////////////

    // Cart Count
    $(".count .cart_count").val(1);

    $(".count .increment").on("click", function(){
        $(this).parent().children(".cart_count").val( function(i, oldval) {
            return parseInt( oldval, 10) + 1;
        });
    });
    
    $(".count .decrement").on("click", function(){
        if($(this).parent().children(".cart_count").val() != 1){
            $(this).parent().children(".cart_count").val( function(i, oldval) {
                return parseInt( oldval, 10) - 1;
            });
        }

    });

});