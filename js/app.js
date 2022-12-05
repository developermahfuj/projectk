$(document).ready(function(){
    // $('.slider').slick({
    //     arrows:false,
    //     dots:true,
    //     appendDots:'.slider-dots',
    //     dotsClass:'dots'
    // });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let list = document.querySelector('.list');
    let list1 = document.querySelector('.list1');
    let list2 = document.querySelector('.list2');
    let list3 = document.querySelector('.list3');
    let list4= document.querySelector('.list4');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    list.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    list1.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    list2.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    list3.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });

    list4.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    
    });