$(document).ready(function() {
    $('#demo').on('mouseenter mouseleave', function(event) {
        if(event.type === 'mouseenter') {
        $('button').text("Welcome! Stay forever!").css('color', 'green');
        } else {
        $('button').text("Don't leave me this way!").css('color', 'yellow');
        }
    });
});