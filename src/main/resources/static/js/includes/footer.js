const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

const cookies = (getCookie("APPLICATION_LOCALE"));
if (cookies === 'ja') {
    $('#langIcon').html('<i class="flag-icon flag-icon-de mr-2"></i>');
    $('#de').addClass('active');
} else if (cookies === 'en') {
    $('#langIcon').html('<i class="flag-icon flag-icon-us mr-2"></i>');
    $('#en').addClass('active');

} else {
    $('#langIcon').html('<i class="flag-icon flag-icon-kr mr-2"></i>');
    $('#ko').addClass('active');

}

$('.set-language').click(() => {
    const getLanguage = $(this).closest("a").attr('id');
    window.location.replace("index?lang=" + getLanguage);
});

$('#team').click(() => {
    $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#player').click(() => {
    $(".content").load("/player?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#honours').click(() => {
    $(".content").load("/honours?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#news').click(() => {
    $(".content").load("/news?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#football').click(() => {
    $(".content").load("/football?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#freeBoard').click(() => {
    $(".content").load("/freeBoard?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#multiMedia').click(() => {
    $(".content").load("/multiMedia?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#notice').click(() => {
    $(".content").load("/notice?lang=" + getCookie('APPLICATION_LOCALE'));
});
