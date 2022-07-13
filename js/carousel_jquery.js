$(function(){
    $('#l1').click(function(){
        $('#carousel-1').show();
        $('#carousel-2').hide();
        $('#carousel-3').hide();
    });
    
    $('#l2').click(function(){
        $('#carousel-1').hide();
        $('#carousel-2').show();
        $('#carousel-3').hide();
    });

    $('#l3').click(function(){
        $('#carousel-1').hide();
        $('#carousel-2').hide();
        $('#carousel-3').show();
    });
});