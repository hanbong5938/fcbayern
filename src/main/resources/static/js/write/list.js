const boardCategoryNo = $("#boardCategoryNo").val();
const searchBtn = $("#searchBtn");
const statePageNum = history.state.pageNum; // 현재 pageNum 상태 확인
const typeState = history.state.type;
const keywordState = history.state.keyword;
//keyword 랑 저장하기 위해서
$("#type").val(typeState || "t");
$("#keyword").val(keywordState);

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

//정보 가져오는 function
function loadList(criteriaModel) {
    $.ajax({
        url: "/board/infoList",
        type: "get",
        data: criteriaModel,
        success: (result) => {
            console.log(result)
            //페이징처리 위해서 갯수 가져오는 ajax
            $.get("/board/totalCnt", criteriaModel, (totalCnt) => {
                let str = "";
                for (let i = 0; i < result.length; i++) {
                    const timestamp = new Date(result[i].createDt);
                    const month = timestamp.getMonth() + 1;
                    const date = timestamp.getDate();

                    str += "        <tr>\n" +
                        "            <td class=\"text-left text-gray\"><a class='boardLink text-primary' onclick='' id='" + result[i].boardNo + "'>" + result[i].title + "</a>" + " [" + result[i].replyCnt + "]" + "</td>\n" +
                        "            <td>" + result[i].writer + "</td>\n" +
                        "            <td>" + timestamp.getFullYear() + "-" + calendar(month, 2) + "-" + calendar(date, 2) + "</td>\n" +
                        "            <td>" + result[i].hit + "</td>\n" +
                        "            <td>0</td>\n" +//ToDo 좋아요 아직 미적용
                        "        </tr>"

                }
                $("#list").html(str);

                const pageNum = criteriaModel.pageNum;
                if (pageNum === -1) {
                    pageMaker(1, totalCnt);
                } else {
                    pageMaker(pageNum, totalCnt)
                }

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
            });
        }
    });
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
        pageStr += "<li class='page-item" + active + "'><a class='page-link' onclick='pageAction(" + i + ")'>" + i + "</a></li>\n"
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
        pageNum: criteriaModel.pageNum
    }, null, url + "?lang=" + getCookie('APPLICATION_LOCALE') + "&type=" + criteriaModel.type + "&keyword=" + criteriaModel.keyword + "&pageNum=" + criteriaModel.pageNum);
});

//페이지 로딩시 초기값 가져오기 위해서
let criteriaModel = {
    type: typeState,
    keyword: keywordState,
    boardCategoryNo: boardCategoryNo,
    pageNum: statePageNum || -1
};

loadList(criteriaModel);
