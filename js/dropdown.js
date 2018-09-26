$(".filter__item-js div").click(()=>{
	$(".dropdown__list").slideToggle();
	  $(".dropdown__list .dropdown__list").css("display","none")
  
  });
  $(".dropdown__list .dropdown__item").click(function(){
	$(".dropdown__list .dropdown__list").slideUp();
	$(this).find('.dropdown__list').slideToggle();
  })
  
  
  $(window).resize(()=>{
	if($(window).width()>768){
	  $(".dropdown__list").removeAttr("style")
	}
  })