$(function () {

	$('.menu-link, .order, .readmore').on('click', function () {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 470,   // по умолчанию «400»
			easing: "linear" // по умолчанию «swing»
		});

		return false;
	});

	$('.menu-burger').on('click', function () {
		$('.menu').slideToggle();
	});
	$('.menu-burger').on('click', function () {
		$('.menu-burger').toggleClass('active');
	});

	$('.menu-link').on('click', function () {
		if ($('.menu-burger').hasClass('active')) {
			$('.menu').slideToggle();
			$('.menu-burger').removeClass('active');
		}
	});

//Отправка данных формы
	
	
	$(".ajax-contact-form").submit(function (event) {

    var formData = {
      user: $("#user").val(),
      phone: $("#phone").val(),
      message: $("#message").val(),
    };
    
    //console.log(formData);

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      

      if (!data.success) {
        if (data.errors.name) {
          $(".note").addClass("notification_error");
          $(".note").append(
            data.errors.name
          );
        }

        if (data.errors.phone) {
          $(".note").addClass("notification_error");
          $(".note").html(
            'Введите корректный телефон'
          );
        }

        
      } else {
        $(".note").html(
          '<p class="order-success">Ваше сообщение принято!</p>'
        );
        $('.ajax-contact-form')[0].reset();
		  
      }
    });

    event.preventDefault();
  });
	
});