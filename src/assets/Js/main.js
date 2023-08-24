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

    // Navbar On Scroll
    
    $(window).scroll(function(){

        if ( $(window).scrollTop() > 50 ) {
            $('nav').addClass('nav-fixed');
        } else{
            $('nav').removeClass('nav-fixed');
        }
    });

    /////////////////////////////////////////////////////

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