// DROPDOWN MENU

$(function(){

    $("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});


// IMAGE SLIDER

jQuery(function($) { 

  var $slider = $('.slider');
  var $slide = 'li';
  var $transition_time = 1000;
  var $time_between_slides = 4000;

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1;

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});