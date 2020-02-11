const boardNo = Number($("#boardNo").val());
const boardCategoryNo = Number($("#boardCategoryNo").val());

function getBoardInfo(boardNo) {
    $.ajax({
        url: "/board/info/" + boardNo,
        type: "get",
        success: (result) => {
            const totalCnt = result.replyCnt;

            $("#title").val(result.title);
            $("#content").html(result.content);
            $("#replyTotalCnt").html(totalCnt);

            getReplyList(1, totalCnt)
        }
    });
}

function getReplyList(pageNum, totalCnt) {
    $.get("/reply/list/" + boardNo, {pageNum: pageNum}, (result) => {
        let str = "";
        for (let i = 0; i < result.length; i++) {
            const timestamp = new Date(result[i].createDt);
            const month = timestamp.getMonth() + 1;
            const date = timestamp.getDate();

            str += "<li class= ''><div class='header'>" +
                "<strong class='text-dark bold'>" + result[i].writer + "</strong>" +
                "<small class='pull-right text-muted'>" + timestamp.getFullYear() + "-" + calendar(month, 2) + "-" + calendar(date, 2) + "</small>" +
                "<p>" + result[i].reply + "</p> </div></li>"
        }

        $("#replyList").html(str);

        pageMaker(pageNum, totalCnt)
    })
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

function pageAction(i, totalCnt) {
    getReplyList(i, totalCnt);
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