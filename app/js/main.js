$(function(){

	$('.menu-link, .order').on('click', function() {

	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 470,   // по умолчанию «400»
	        easing: "linear" // по умолчанию «swing»
	    });
	     
	    return false;
	});

	$('.menu-burger').on('click',function(){
        $('.menu').slideToggle();
    });
    $('.menu-burger').on('click',function(){
    	$('.menu-burger').toggleClass('active');
    });

    $('.menu-link').on('click',function(){
    	if($('.menu-burger').hasClass('active')){
	    	$('.menu').slideToggle();
	    	$('.menu-burger').removeClass('active');
    	}
    });

});