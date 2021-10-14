
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();

    // if(scrollTop > $("#section2").offset().top){
    //     $("#section2").addClass("show");
    // }

    $(".reveal").each(function(){
        if(scrollTop + $(window).height() > $(this).offset().top){
            $(this).addClass("show");
        }
    });
});