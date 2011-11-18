$(document).ready(function() {
  	
	$('body').prepend('<div>' + $(window).width() + '</div>');
	$('#div').css('width',$(window).width()/4);
	//$.stylesheetInit();
	
	document.getElementById('ancho').value = $(window).width();
	// Call stylesheet init so that all stylesheet changing functions 
	// will work.
	
	function adjustStyle(width) {
	    width = parseInt(width);
	    if (width < 701) {
	        $("#size-stylesheet").attr("href", "styles/estilos.css");
			document.getElementById('ancho').value = "hoja 1";
	    } else if ((width >= 701) && (width < 900)) {
	        $("#size-stylesheet").attr("href", "styles/estilos2.css");
			document.getElementById('ancho').value = "hoja 2";
	    } else {
	       $("#size-stylesheet").attr("href", "styles/estilos3.css");
		   document.getElementById('ancho').value = "hoja 3";
	    }
		
		$('#foo2').carouFredSel({
			prev: '#prev2',
			next: '#next2',
			pagination: "#pager2",
			auto: false,
			infinite: false,
			circular: false
		});
		
	}
	
	$(function() {
	    adjustStyle($(this).width());
	    $(window).resize(function() {
	        adjustStyle($(this).width());
	    });
	});
	
});