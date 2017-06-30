$(document).ready(function() {
	$('#schedule').click(function() {
	    $('#scheduleModal').fadeIn(250);
	});

	$('.close').click(function() {
	    $(this).parent().fadeOut(250);
	});
});