// $('#demo').html('Hello freaks!');

// jQuery SELECTORS
// $(document).ready(function() {
//     $('#demo').html('Hello freaks!');
// })

// EVENTS
$(document).ready(function() {
    $('#trigger').click(function() {
        $('#demo').html('hi freaks');
    })
})

// with 'on' we can select multiple events
$(document).ready(function() {
    $('#greeting').on('mouseenter mouseleave', function(event) {
        if(event.type === 'mouseenter') {
        $('#greeting').css('color', 'red');
        } else {
            $('#greeting').css('color', 'green');
        }
    });
});