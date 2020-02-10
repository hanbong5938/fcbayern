const boardNo = Number($("#boardNo").val());

function getBoardInfo(boardNo) {
    $.ajax({
        url: "/board/info/" + boardNo,
        type: "get",
        success: (result) => {
            $("#title").val(result.title);
            $("#content").html(result.content);

            $.get("/reply/list/" + boardNo, null, (result) => {
                let str = "";
                for (let i = 0; i < result.length; i++) {
                    const timestamp = new Date(result[i].createDt);
                    const month = timestamp.getMonth() + 1;
                    const date = timestamp.getDate();

                    str += "<li class= 'left'><div class='header'>" +
                        "<strong class='text-dark bold'>" + result[i].writer + "</strong>" +
                        "<small class='pull-right text-muted'>" + timestamp.getFullYear() + "-" + calendar(month, 2) + "-" + calendar(date, 2) + "</small>" +
                        "<p>" + result[i].reply + "</p> </div></li>"
                }
                $("#replyList").html(str);
            })

        }
    });
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

