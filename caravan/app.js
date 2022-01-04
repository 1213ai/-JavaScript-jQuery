$(function(){
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop: 0
    },800);
    event.preventDefault();
  });
});

$(function(){
  $('.nav-list-item').mousepver(function(){
    $('.nav-list-item').css({'background-color': 'black'});
  });
});