$(document).ready(function() {
	$('button').click(function(){
		$(this).after('<img class="pic" src="http://www.digitaltrends.com/wp-content/uploads/2012/08/Apple-is-victorious-Android-is-screwed.jpg">');
	});

	$(document).on('click', '.pic', function(){
		$(this).remove();
	}):
});
