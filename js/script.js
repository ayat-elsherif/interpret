$(function(){
   
    $(window).scroll(function(){
      if($(window).scrollTop()>60){
        $('.top_nav').addClass('sticky');
      }else{
        $('.top_nav').removeClass('sticky');

      }
    });
    if($(window).scrollTop()>80){
        $('.top_nav').addClass('sticky');
      }else{
        $('.top_nav').removeClass('sticky');

      }
      var scrollToUp=$('.scroll-up');
      $(window).scroll(function(){
        ($(this).scrollTop()>=550)?scrollToUp.show():scrollToUp.hide();
        });
      
      scrollToUp.click(function(){
        $('html,body').animate({scrollTop:0},500);
      });
    
    $('#homeBlog').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })
    $('#othersArticle').owlCarousel({
      loop:true,
      dots:false,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:1
          },
          992:{
              items:1
          },
          1200:{
              items:2
          }
      }
  })

    $('[data-toggle="tooltip"]').tooltip({
        
        title:"Mon-Fri <br> 8:00AM-6:00PM <br>(GMT +2)",
        html:true
    });

    $('#navbarSupportedContent .nav-item').click(function(){
      $('#navbarSupportedContent').removeClass('show');
    });

    new WOW().init();

});