$(document).ready(function(){
	$(document).keydown(function(key){
		switch(parseInt(key.which, 10)){
			case 65:
				$('#pic2').animate({left: '-=10px'}, 'fast');
				break;
			case 83:
				$('#pic2').animate({top: '+=10px'}, 'fast');
				break;
			case 87:
				$('#pic2').animate({top: '-=10px'}, 'fast');
				break
			case 68:
				$('#pic2').animate({left: '+=10px'}, 'fast');
				break;
		}
	});
});