$( document ).ready(function() {
    $('select').selectric();
});


function btn_open_menu() {
	var elem = document.getElementById('menu_mobile');
	var pos = -200;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == 0) {
			clearInterval(id);
		}
		else{
			pos+=10;
			elem.style.left = pos + "px ";
		}
	}
}

function btn_close_menu() {
	var elem = document.getElementById('menu_mobile');
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == -200) {
			clearInterval(id);
		}
		else{
			pos-=10;
			elem.style.left = pos + "px ";
		}
	}
}