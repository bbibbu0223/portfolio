$(function(){
    // 엘리먼트 스크롤시 위로 올라오기
    
    function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
    }
    
    // function isElementRightToLeft(elem2, triggerDiff2) {
    //     const { right } = elem2.getBoundingClientRect();
    //     const { innerWidth } = window;
    //     return right > innerWidth + (triggerDiff2 || 0);
    // }
    
    function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
        })
    }
    
    // function handleScroll2() {
    //     const elems2 = document.querySelectorAll('.right-left-scroll');
    //     elems2.forEach(elem => {
    //     if (isElementRightToLeft(elem2, -20)) {
    //         elem2.style.opacity = "0";
    //         elem2.style.transform = 'translateX(70px)';
    //     } else {
    //         elem2.style.opacity = "1";
    //         elem2.style.transform = 'translateX(0px)';
    //     }
    //     })
    // }
    
    
    
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('scroll', handleScroll2);
    });

