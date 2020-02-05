const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

const cookies = (getCookie("APPLICATION_LOCALE"));
if (cookies === 'de') {
    $('#langIcon').html('<i class="flag-icon flag-icon-de mr-2"></i>');
    $('#de').addClass('active');
} else if (cookies === 'en') {
    $('#langIcon').html('<i class="flag-icon flag-icon-us mr-2"></i>');
    $('#en').addClass('active');
} else {
    $('#langIcon').html('<i class="flag-icon flag-icon-kr mr-2"></i>');
    $('#ko').addClass('active');
}

$('.set-language').click(function () {
    const getLanguage = $(this).closest("a").attr('id');
    window.location.replace("index?lang=" + getLanguage);
});

$('#team').click(() => {
    $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/team"}, null, "/team?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#player').click(() => {
    $(".content").load("/player?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/player"}, null, "/player?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#honours').click(() => {
    $(".content").load("/honours?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/honours"}, null, "/honours?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#news').click(() => {
    $(".content").load("/news?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/news"}, null, "/news?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#football').click(() => {
    $(".content").load("/football?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/football"}, null, "/football?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#freeBoard').click(() => {
    $.ajax({
        url: "/freeBoard?lang=" + getCookie('APPLICATION_LOCALE'),
        data: {boardCategoryNo: 1},
        type: "get",
        success: (result) => {
            $(".content").html(result);
        }
    });
    history.pushState({data: "/freeBoard", boardCategoryNo: 1}, null, "/freeBoard?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#multiMedia').click(() => {
    $.ajax({
        url: "/multiMedia?lang=" + getCookie('APPLICATION_LOCALE'),
        data: {boardCategoryNo: 2},
        type: "get",
        success: (result) => {
            $(".content").html(result);
        }
    });
    history.pushState({data: "/multiMedia", boardCategoryNo: 2}, null, "/multiMedia?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#notice').click(() => {
    $(".content").load("/notice?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/notice"}, null, "/notice?lang=" + getCookie('APPLICATION_LOCALE'));
});

//이벤트 감지해서 뒤로가기 불러오는 ajax
$(window).on('popstate', function (event) {
    const data = event.originalEvent.state;
    $.ajax({
        url: data.data + "?lang=" + getCookie('APPLICATION_LOCALE'),
        data: {boardCategoryNo: data.boardCategoryNo, boardNo: data.boardNo},
        type: "get",
        success: (result) => {
            $(".content").html(result);
        }
    })
});