const boardCategoryNo = $("#boardCategoryNo").val();
const totalCnt = $("#totalCnt").val();
const searchBtn = $("#searchBtn");

let url = "";
switch (boardCategoryNo) {
    case 1:
        url = "/freeBoard";
        break;
    case 2:
        url = "/multiMedia";
        break;
    case 3:
        url = "/football";
        break;
    //ToDo 보드 카테고리 추가시 추가
}

function loadList(criteriaModel) {
    $.ajax({
        url: "/board/infoList?boardCategoryNo=" + boardCategoryNo,
        type: "get",
        data: criteriaModel,
        success: (result) => {
            let str = "";
            for (let i = 0; i < result.length; i++) {
                const timestamp = new Date(result[i].createDt);
                const month = timestamp.getMonth() + 1;
                const date = timestamp.getDate();

                str += "        <tr>\n" +
                    "            <td class=\"text-left\"><a class='boardLink' onclick='' id='" + result[i].boardNo + "'>" + result[i].title + "</a></td>\n" +
                    "            <td>" + result[i].writer + "</td>\n" +
                    "            <td>" + timestamp.getFullYear() + "-" + calendar(month, 2) + "-" + calendar(date, 2) + "</td>\n" +
                    "            <td>" + result[i].hit + "</td>\n" +
                    "            <td>0</td>\n" +//ToDo 좋아요 아직 미적용
                    "        </tr>"

            }
            $("#list").html(str);

            const pageNum = criteriaModel.pageNum;

            pageMaker(pageNum);

            $(".boardLink").click(function () {
                const getBoardId = $(this).closest("a").attr('id');
                $.ajax({
                    url: "/read?lang=" + getCookie('APPLICATION_LOCALE'),
                    data: {boardNo: getBoardId},
                    type: "get",
                    success: (result) => {
                        $(".boardContent").html(result);
                        history.pushState({
                            data: "/read",
                            boardNo: getBoardId
                        }, null, '/read?lang=' + getCookie('APPLICATION_LOCALE') + '&boardNo=' + getBoardId);

                    }
                });
            });
        }
    });
}

function pageMaker(pageNum) {
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
        pageStr += "<li class='page-item" + active + "'><a class='page-link' onclick='pageAction("+i+")'>" + i + "</a></li>\n"
    }

    if (next) {
        pageStr += "<li class=\"page-item\"><a class=\"page-link\">></a></li>\n"
    }

    pageStr += "</ul>";

    $("#pageArea").html(pageStr);

}

function pageAction(i) {
    const criteriaModel = {
        type: $("#type").val(),
        keyword: $("#keyword").val(),
        boardCategoryNo: boardCategoryNo,
        pageNum: i
    };
    loadList(criteriaModel);
    history.pushState({
        data: url,
        boardCategoryNo: criteriaModel.boardCategoryNo,
        type: criteriaModel.type,
        keyword: criteriaModel.keyword,
        pageNum: i
    }, null, url + "?lang=" + getCookie('APPLICATION_LOCALE') + "&type=" + criteriaModel.type + "&keyword=" + criteriaModel.keyword + "&pageNum=" + i);
}

searchBtn.click(function () {
    const criteriaModel = {
        type: $("#type").val(),
        keyword: $("#keyword").val(),
        boardCategoryNo: boardCategoryNo,
        pageNum: 1
    };
    loadList(criteriaModel);
    history.pushState({
        data: url,
        boardCategoryNo: criteriaModel.boardCategoryNo,
        type: criteriaModel.type,
        keyword: criteriaModel.keyword,
    }, null, url + "?lang=" + getCookie('APPLICATION_LOCALE') + "&type=" + criteriaModel.type + "&keyword=" + criteriaModel.keyword);
});
const criteriaModel = {
    boardCategoryNo: boardCategoryNo,
    pageNum: 1
};
loadList(criteriaModel);
//페이지시 로딩강제로 하기위해서 바로 킬릭하도록 적용
// searchBtn.trigger("click");
