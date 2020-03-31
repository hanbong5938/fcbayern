//세션에 있는 값 가져오기 위해서 사용
const sessionUserNo = $("#sessionUserNo").val();
const sessionUserId = $("#sessionUserId").val();
const sessionUserNm = $("#sessionUserNm").val();
const sessionEmail = $("#sessionEmail").val();
const sessionAuthNo = $("#sessionAuthNo").val();
const sessionAuthNm = $("#sessionAuthNm").val();

//토큰과 같이 전송하지 않으면 405에러 발생
const token = $("meta[name='_csrf']").attr("content");
const header = $("meta[name='_csrf_header']").attr("content");

const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    //쿠키 기본값 설정
    return value ? value[2] : 'ko';
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

$('.iconShopLink').click(() => {
    $(".content").load("/iconShop?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/iconShop"}, null, "/iconShop?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.iconStorageLink').click(() => {
    $(".content").load("/iconStorage?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/iconStorage"}, null, "/iconStorage?lang=" + getCookie('APPLICATION_LOCALE'));
});

//load 사용해서 모달 외부에서 불러온다.
$('#signIn').click(() => {
    $(".modal-content").load("/signInModal");
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

replaceLockIcon(sessionUserNo);

//아이콘 교체
function replaceLockIcon(sessionUserNo) {
    if (!isNaN(sessionUserNo) || sessionUserNo === 0) {
        $("#lockIcon").html(' <a id="signOut" onclick="signOut()">' +
            '<i class="material-icons">lock_open</i></a>');
    }
}

function signOut() {
    $.ajax({
        url: "/signOut",
        type: "post",
        beforeSend: (xhr) => {
            xhr.setRequestHeader(header, token);
        },
        // success: () => {
        //     alert("로그아웃 되었습니다.");
        //     location.href = '/';
        // }

        success: () => {
            $('#modal').modal("hide");
            iziToast.success({
                // theme: 'dark',
                icon: 'icon-person',
                title: 'Success,',
                message: 'SignOut!',
                pauseOnHover: false,
                progressBarColor: 'rgb(0, 255, 184)',
                close: false,
                titleColor: 'black',
                messageColor: 'black',
                timeout: 2000,
                position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
                buttons: [
                    ['<button class="text-dark">Close</button>', function (instance, toast) {
                        // location.href = "/";
                        iziToast.hide({
                            transitionOut: 'fadeOutUp'
                        }, toast);
                    }, true]
                ],
                onClosing: function () {
                    location.href = "/";
                }
            });
        },
        error: () => {
            iziToast.error({
                title: 'Fail',
                message: 'Please, try again.',
            });

        }
    })
}

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


//유저 아이콘 불러오기


function getUserIcon(userNo) {
    let getIconImg = '';

    const getIconNo = $.ajax({
        url: "/iconShop/checkRepresent/" + userNo,
        type: "get",
        async: false
    });
    if (Number(getIconNo.responseText) !== 0) {
        $.ajax({
            url: "/iconShopAttach/getAttachImg/" + getIconNo.responseText,
            type: "get",
            async: false,
            success: (result) => {
                getIconImg = userIcon(result)
            }
        });
    } else {
        getIconImg = ""
    }

    return getIconImg;
}

function userIcon(result) {
    return "<img class='' src='/aws/getImg?fileName=" + result.uuid + "&directory=" + result.uploadPath + "' alt='아이콘 이미지'> ";
}
