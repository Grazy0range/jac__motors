$(document).ready(function() {
    
    var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });
    
    // Селекты комлплектации 
    $('.select1').select2({
        placeholder: "Модель",
        // allowClear: true
    });
    
    $('#sl2').select2({
        placeholder: "Двигатель",
        // allowClear: true
    });
    
    // Input mask
	$(function () {
		$.mask.definitions['~'] = '[49]';
		$("input[type='tel']").mask("+7 (~99) 999-99-99");
	});

	$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('input[type="tel"]').click(function(){
    $(this).setCursorPosition(4);  // set position number
  });
});

// pop-up
$(document).on('click', '.js-modal', function() {
    const src = $(this).data('src');
    
    $(src).addClass('model-open');
}); 

$(document).on("click", ".close-btn, .bg-overlay", function(){
    $(".model-open").removeClass('model-open');
});

// Скрываем дисклеймер 
$('.js-hidden').on('click', function() {
    $('.footer__block').slideToggle();
    $('.js-hidden span').toggle();
});


