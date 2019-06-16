// Show + Hide
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').hide();
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show();
    }
});


// Show + Hide => Toggle()
$('#btn-2').click(function() {
    $('#card-2').toggle();
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});

// fadeIn() , fadeOut() -> fadeToggle()
$('#btn-3').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-3').fadeOut();
    }
    else{
        $(this).text('HIDE');
        $('#card-3').fadeIn();
    }
});

$('#btn-4').click(function () {
   $('#card-4').fadeToggle(1000);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') :$(this).text('HIDE') ;
});

// slideup() , slideDown() -> slideToggle()
$('#btn-5').click(function () {
   if ($(this).text() === 'HIDE') {
       $(this).text('SHOW');
       $('#card-5').slideUp();
   } else {
       $(this).text('HIDE');
       $('#card-5').slideDown();
   }
});

$('#btn-6').click(function () {
    $('#card-6').slideToggle(1000);
    ($(this).text()==='HIDE')?$(this).text('SHOW') :$(this).text('HIDE') ;
});