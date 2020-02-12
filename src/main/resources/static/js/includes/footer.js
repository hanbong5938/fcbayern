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
    history.pushState({
        data: "/freeBoard",
        boardCategoryNo: 1
    }, null, "/freeBoard?lang=" + getCookie('APPLICATION_LOCALE'));
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
    history.pushState({
        data: "/multiMedia",
        boardCategoryNo: 2
    }, null, "/multiMedia?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#notice').click(() => {
    $(".content").load("/notice?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/notice"}, null, "/notice?lang=" + getCookie('APPLICATION_LOCALE'));
});

//이벤트 감지해서 뒤로가기 불러오는 ajax
$(window).on('popstate', function (event) {
    const data = event.originalEvent.state;

    //push 된 history 없는 경우 처리하기 위하여
    if (data === null) {
        location.href = "/index";
    } else {
        $.ajax({
            url: data.data + "?lang=" + getCookie('APPLICATION_LOCALE'),
            data: {
                boardCategoryNo: data.boardCategoryNo,
                boardNo: data.boardNo,
                type: data.type,
                keyword: data.keyword,
                pageNum: data.pageNum
            },
            type: "get",
            success: (result) => {
                $(".content").html(result);

            }
        })
    }
});

function calendar(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

//페이징 버튼 만드는 function
function pageMaker(pageNum, totalCnt) {
    let endNum = Math.ceil(pageNum / 10.0) * 10;
    const startNum = endNum - 9;

    const prev = startNum !== 1;
    let next = false;

    if (endNum * 10 >= totalCnt) {
        endNum = Math.ceil(totalCnt / 10.0);
    }

    if (endNum * 10 < totalCnt) {
        next = true;
    }

    let pageStr = "<ul class=\"pagination justify-content-center\">\n";

    if (prev) {
        pageStr += "<li class=\"page-item\"><a class=\"page-link\"><</a></li>\n"
    }

    for (let i = startNum; i <= endNum; i++) {
        const active = pageNum === i ? " active" : "";
        pageStr += "<li class='page-item" + active + "'><a class='page-link' onclick='pageAction(" + i + "," + totalCnt + ")'>" + i + "</a></li>\n"
    }

    if (next) {
        pageStr += "<li class=\"page-item\"><a class=\"page-link\">></a></li>\n"
    }

    pageStr += "</ul>";

    $("#pageArea").html(pageStr);

}