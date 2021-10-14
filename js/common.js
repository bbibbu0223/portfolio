$(function nav(){
        
        const menuIc = document.querySelector('.menu_trigger');
        const menu = document.querySelector('nav > div');
            menuIc.addEventListener('click',function(){
            menuIc.classList.toggle('active');
            menu.classList.toggle('active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
        $('#topBtn').fadeIn();
        } else {
        $('#topBtn').fadeOut();
        }
    });
    
    $("#topBtn").click(function() {
        $('html, body').animate({
        scrollTop : 0
        }, 400);
        return false;
    });
});

// $(document).mousemove(function(e){
//     $(".pageX").text(e.pageX);
//     $(".pageY").text(e.pageY);
// });

// 마우스 움직이기
$(document).mousemove(function(e){
    
    let cursorWidth = $(".cursor").width() / 2;
    let cursorFWidth = $(".cursor").width() / 2;
    
    gsap.to(".cursor", {duration: 0.6, left: e.pageX - cursorWidth, top: e.pageY-cursorWidth});
    gsap.to(".cursor-follower", {duration: 1.6, left: e.pageX - cursorFWidth, top: e.pageY - cursorFWidth});
});

// 마우스 오버 효과
$(".contents em").hover(function(){
    $(".cursor").addClass("active");
    $(".cursor-follower").addClass("active");
}, function(){
    $(".cursor").removeClass("active");
    $(".cursor-follower").removeClass("active");
});