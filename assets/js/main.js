
$(document).ready(function(){


    $(".btn-1").mouseover(function (e) { 
        $($(this).children('img')).attr('src', 'assets/images/right-angle.svg');
    }).mouseout(function (e) {
        $($(this).children('img')).attr('src', 'assets/images/right-angle-1.svg');
    });


    $(".btn-2").mouseover(function (e) { 
        $($(this).children('img')).attr('src', 'assets/images/right-angle.svg');
    }).mouseout(function (e) {
        $($(this).children('img')).attr('src', 'assets/images/right-angle-1.svg');
    });



    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1,
                nav:true
            },
            768: {
                items: 3,
                nav:true
            },
            1140: {
                items: 3,
                nav:true
            },
            1110: {
                items: 3,
                nav:true,
                loop:false
            }
        }
    })


    $("#shp_bg").mouseover(function(){
        $("#heding_one").hide();
    });

    $("#shp_bg").mouseout(function(){
        $("#heding_one").show().delay(5000);
    });


    $("#shp_bg1").mouseover(function(){
        $("#heding_two").hide();
    });

    $("#shp_bg1").mouseout(function(){
        $("#heding_two").show().delay(5000);
    });


    $("#shp_bg2").mouseover(function(){
        $("#heding_three").hide();
    });

    $("#shp_bg2").mouseout(function(){
        $("#heding_three").show().delay(5000);
    });



    $("#shp_bg3").mouseover(function(){
        $("#heding_four").hide();
    });

    $("#shp_bg3").mouseout(function(){
        $("#heding_four").show().delay(5000);
    });


    $("#shp_bg4").mouseover(function(){
        $("#heding_five").hide();
    });

    $("#shp_bg4").mouseout(function(){
        $("#heding_five").show().delay(5000);
    });

    $("#shp_bg5").mouseover(function(){
        $("#heding_six").hide();
    });

    $("#shp_bg5").mouseout(function(){
        $("#heding_six").show().delay(5000);
    });


    $("#shp_bg6").mouseover(function(){
        $("#heding_sevn").hide();
    });

    $("#shp_bg6").mouseout(function(){
        $("#heding_sevn").show().delay(5000);
    });


    $("#shp_bg7").mouseover(function(){
        $("#heding_eight").hide();
    });

    $("#shp_bg7").mouseout(function(){
        $("#heding_eight").show().delay(5000);
    });


    $("#prdct-1").mouseover(function(){
        $("#shp_now").show()
        
    });

    $("#prdct-1").mouseout(function(){
        $("#shp_now").hide();
    });



    $("#prdct-2").mouseover(function(){
        $("#shp_now1").show()
        
    });

    $("#prdct-2").mouseout(function(){
        $("#shp_now1").hide();
    });



    $("#prdct-3").mouseover(function(){
        $("#shp_now2").show()
        
    });

    $("#prdct-3").mouseout(function(){
        $("#shp_now2").hide();
    });


    $("#prdct-4").mouseover(function(){
        $("#shp_now3").show()
        
    });

    $("#prdct-4").mouseout(function(){
        $("#shp_now3").hide();
    });


    $("#prdct-5").mouseover(function(){
        $("#shp_now4").show()
        
    });

    $("#prdct-5").mouseout(function(){
        $("#shp_now4").hide();
    });


    $("#prdct-6").mouseover(function(){
        $("#shp_now5").show()
        
    });

    $("#prdct-6").mouseout(function(){
        $("#shp_now5").hide();
    });





});




