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

$('.teamLink').click(() => {
    $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/team"}, null, "/team?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.playerLink').click(() => {
    $(".content").load("/player?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/player"}, null, "/player?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.honoursLink').click(() => {
    $(".content").load("/honours?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/honours"}, null, "/honours?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.newsLink').click(() => {
    $(".content").load("/news?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/news"}, null, "/news?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.footballLink').click(() => {
    $.get("/football?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 3}, (result) => {
        $(".content").html(result);
    });
    history.pushState({
        data: "/football",
        boardCategoryNo: 3
    }, null, "/football?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.freeBoardLink').click(() => {
    $.get("/freeBoard?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 1}, (result) => {
        $(".content").html(result);
    });
    history.pushState({
        data: "/freeBoard",
        boardCategoryNo: 1
    }, null, "/freeBoard?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.multiMediaLink').click(() => {
    $.get("/multiMedia?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 2}, (result) => {
        $(".content").html(result);
    });
    history.pushState({
        data: "/multiMedia",
        boardCategoryNo: 2
    }, null, "/multiMedia?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.noticeLink').click(() => {
    $.get("/notice?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 4}, (result) => {
        $(".content").html(result);
    });
    history.pushState({
        data: "/notice",
        boardCategoryNo: 4
    }, null, "/notice?lang=" + getCookie('APPLICATION_LOCALE'));
});

//load 사용해서 모달 외부에서 불러온다.
$('#login').click(() => {
    $(".modal-content").load("/loginModal");
    console.log("modal")
});

//이벤트 감지해서 뒤로가기 불러오는 ajax
$(window).on('popstate', function (event) {
    const data = event.originalEvent.state;

    //push 된 history 없는 경우 처리하기 위하여
    if (data === null) {
        location.href = "/index";
    } else {
        $.get(data.data + "?lang=" + getCookie('APPLICATION_LOCALE'), {
            boardCategoryNo: data.boardCategoryNo,
            boardNo: data.boardNo,
            type: data.type,
            keyword: data.keyword,
            pageNum: data.pageNum
        }, (result) => {
            $(".content").html(result);

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