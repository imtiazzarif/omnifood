$(document).ready(function(){
//sticky navigation        
    $('.js--features--section').waypoint(function(direction){
        if(direction == 'down'){
            $('.nav-1').addClass('white');
        }else {
            $('.nav-1').removeClass('white')
        }
    },{
        offset:'81px'
    })
    //scrolling 
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -70
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });

  ///animate css
  $('.js--wp--1').waypoint(function(){
      $('.js--wp--1').addClass('animate__animated animate__bounceInRight')
  },{
      offset:'60%'
  })
  $('.js--wp--0').waypoint(function(){
      $('.js--wp--0').addClass('animate__animated animate__fadeInDown')
  },{
      offset:'50%'
  })
  $('.js--wp--2').waypoint(function(){
      $('.js--wp--2').addClass('animate__animated animate__bounceInUp')
  },{
      offset:'50%'
  })
  $('.js--wp--3').waypoint(function(){
      $('.js--wp--3').addClass('animate__animated animate animate__bounceInRight')
  },{
      offset:'50%'
  })
  $('.js--wp--4').waypoint(function(){
      $('.js--wp--4').addClass('animate__animated animate__fadeIn')
  },{
      offset:'50%'
  })
  $('.js--wp--5').waypoint(function(){
      $('.js--wp--5').addClass('animate__animated animate__pulse')
  },{
      offset:'50%'
  })
  //phone navigation 
  $('.phone-nav').click(function(e){
    
    let icon = $('.phone-nav ion-icon');
      if(icon.attr('name') == 'menu-outline'){
        icon.attr('name','close-outline')
      }else {
        icon.attr('name','menu-outline')
      }
      $('.nav__list').slideToggle(400)
      e.preventDefault()
  })
  
})