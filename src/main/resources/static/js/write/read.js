const boardNo = Number($("#boardNo").val());
const boardCategoryNo = Number($("#boardCategoryNo").val());

//자바스크립트로 넣는 경우 spring message 적용이 안되기 때문에 언어에 따라 설정
let mod = "수정";
let del = "삭제";

switch (getCookie('APPLICATION_LOCALE')) {
    case 'en':
        mod = 'Modify';
        del = 'Delete';
        break;
    case 'de':
        mod = 'eine Änderung vornehmen';
        del = 'auslöschen';
        break;
}

function getBoardInfo(boardNo) {
    $.get("/board/info/" + boardNo,(result) => {
        const totalCnt = result.replyCnt;

        $("#title").val(result.title);
        $("#content").html(result.content);
        $("#replyTotalCnt").html(totalCnt);

        getReplyList(1, totalCnt)
    });
    // $.ajax({
    //     url: "/board/info/" + boardNo,
    //     type: "get",
    //     success: (result) => {
    //         const totalCnt = result.replyCnt;
    //
    //         $("#title").val(result.title);
    //         $("#content").html(result.content);
    //         $("#replyTotalCnt").html(totalCnt);
    //
    //         getReplyList(1, totalCnt)
    //     }
    // });
}

function getReplyList(pageNum, totalCnt) {
    $.get("/reply/list/" + boardNo, {pageNum: pageNum}, (result) => {
        let str = "";
        for (let i = 0; i < result.length; i++) {
            const timestamp = new Date(result[i].createDt);
            const month = timestamp.getMonth() + 1;
            const date = timestamp.getDate();

            str += "<li class= ''><div class='header'>" +
                "<strong class='text-dark bold mr-3'>" + result[i].writer + "</strong>" +
                "<small class='pull-right text-muted mr-3'>" + timestamp.getFullYear() + "-" + calendar(month, 2) + "-" + calendar(date, 2) + "</small>" +
                "<span id='" + result[i].replyNo + "'><a class='small mr-1 replyModify' onclick='modifyArea(" + result[i].replyNo + ")'>" + mod + "</a>|<a class='small mr-1 replyDelete' onclick='deleteReply(" + boardNo + ", " + result[i].replyNo + ")'>" + del + "</a>" +
                "<p>" + result[i].reply + "</p> " +
                "<div id='modifyArea" + result[i].replyNo + "' class='row mt-2 mb-2'></div> " +
                "</div></li>"
        }

        $("#replyList").html(str);

        pageMaker(pageNum, totalCnt);

    })
}


function pageAction(i, totalCnt) {
    getReplyList(i, totalCnt);
}

function modifyArea(replyNo) {
    $("#modifyArea" + replyNo).html("<i class='icon-forward3'></i> <input id='modifyReply" + replyNo + "' style='width: 87%'><button id='submitModifyBtn" + replyNo + "' class='btn btn-default'>" + mod + "</button>");

    $("#submitModifyBtn" + replyNo).click(() => {
        const data = {
            replyNo: replyNo,
            reply: $("#modifyReply" + replyNo).val(),
        };
        $.ajax({
            url: "/reply/modify",
            type: "patch",
            data: data,
            success: () => {
                alert('성공');
                getReplyList(1, $("#replyTotalCnt").val())
            }
        })
    });
}

function deleteReply(boardNo, replyNo) {
    $.ajax({
        url: "/reply/delete",
        data: {replyNo: replyNo, boardNo: boardNo},
        type: 'patch',
        success: () => {
            alert('성공');
            getReplyList(1, $("#replyTotalCnt").val())
        }
    })
}

getBoardInfo(boardNo);

$("#replyReg").click(() => {
    const data = {
        reply: $("#reply").val(),
        boardNo: boardNo,
        writer: "admin", //ToDo 임시로
        userNo: 1 //ToDo 임시로
    };

    if (data.reply === "") {
        alert("내용 입력하세요.")
    } else {
        $.post("/reply/insert", data, getBoardInfo(boardNo))
    }
});

$("#list").click(() => {
    history.back()
});

$("#modify").click(() => {
    const data = {
        boardNo: boardNo, boardCategoryNo: boardCategoryNo,
        title: $("#title").val(), content: $("#content").html(), writer: "admin"//Todo 세션에서 닉네임 가져오기
    };
    $.get("/modify?lang=" + getCookie('APPLICATION_LOCALE'), {
        boardNo: boardNo,
        boardCategoryNo: boardCategoryNo
    }, (result) => {
        $(".content").html(result);
        $("#title").val(data.title);
        $('#summernote').summernote('code', data.content);
        $("#writer").val(data.writer);

        history.pushState({
            data: "/modify",
            boardCategoryNo: boardCategoryNo,
            boardNo: boardNo
        }, null, "/modify?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=" + boardCategoryNo + "&boardNo=" + boardNo);
    })
});

$("#del").click(() => {
    $.ajax({
        url: "/board/delete/" + boardNo,
        type: "patch",
        success: () => {
            alert("성공");
            history.back();
        }
    });
});

$("#good").click(() => {
    const data = {
        userNo: 1,
        boardNo: boardNo,
    };
    $.get("/good/check", data, (result) => {
        if (result === 0) {
            $.post("/good/good", data, () => {
                alert("성공")
            })
        } else {
            alert("추천할 수 없습니다.")
        }
    })
});

$("#badBtn").click(() => {
    const data = {
        userNo: 1,
        boardNo: boardNo,
    };
    $.get("/good/check", data, (result) => {
        if (result === 0) {
            $.post("/good/bad", data, () => {
                alert("성공")
            })
        } else {
            alert("추천할 수 없습니다.")
        }
    })
});