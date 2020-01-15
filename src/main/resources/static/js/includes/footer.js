$('#team').click(function () {
    // $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
    $(".content").load("/club/team");
});

$('#player').click(function () {
    // $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
    $(".content").load("/club/player");
});