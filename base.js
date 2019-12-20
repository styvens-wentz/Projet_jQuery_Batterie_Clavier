const $body = $('body');

$body.on('keydown', function (event) {
    $('.key').each(function () {
        if(event.which === $(this).data('key')) {
            $(this).addClass('playing');
        }
    });
    $('audio').each(function () {
        if(event.which === $(this).data('key')) {
            const audio = new Audio($(this).attr('src'));
            audio.play()
        }
    });
});

$body.on('keyup', function (event) {
    $('.key').each(function () {
        if(event.which === $(this).data('key')) {
            $(this).removeClass('playing')
        }
    });
});