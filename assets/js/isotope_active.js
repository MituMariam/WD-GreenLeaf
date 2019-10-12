//Active isotope with JQuery code:

$('.project-list').isotope({
    itemSelector: '.single-project',
    layoutMode: 'fitRows'
});

//Isotope click function

$('.filters ul li').click(function ( ){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.project-list').isotope({
        filter: selector
    });
    return false;

});
