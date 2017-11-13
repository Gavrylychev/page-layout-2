$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
  });

  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

$(function(){
	createSticky($('#header'));
});

function createSticky(sticky) {
	if (typeof sticky !== 'undefined') {
		var	pos = sticky.offset().top,
				win = $(window);

		win.on('scroll', function() {
    		win.scrollTop() >= pos ? sticky.addClass('fixed') : sticky.removeClass('fixed');
		});
	}
}

$('#item3-block').mouseenter(
    function(){
      $('#item3-block').addClass('hidden');
      $('#hover-block').removeClass('hidden');
    }
  );

  $('#hover-block').mouseleave(
    function(){
      $('#hover-block').addClass('hidden');
      $('#item3-block').removeClass('hidden');
    }
  );
