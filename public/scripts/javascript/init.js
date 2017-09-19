(function($){
  $(function(){

    $('.button-collapse').sideNav();

    setInterval(
    ()=>{      
      if ($('.parallax').css('transform')=='none'){
        $('.parallax').parallax();}
      }
      ,1000);


  }); // end of document ready
})(jQuery); // end of jQuery name space
