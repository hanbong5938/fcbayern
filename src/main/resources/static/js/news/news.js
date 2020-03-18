const boardCategoryNo = $("#boardCategoryNo").val();
const searchBtn = $("#searchBtn");
const statePageNum = history.state.pageNum; // 현재 pageNum 상태 확인
const typeState = history.state.type;
const keywordState = history.state.keyword;

//keyword 랑 저장하기 위해서
$("#type").val(typeState || "t");
$("#keyword").val(keywordState);

let url = "/news";

//정보 가져오는 function
function loadList(criteriaModel) {

    $.get("/board/infoList", criteriaModel, (result) => {
        //페이징처리 위해서 갯수 가져오는 ajax
        $.get("/board/totalCnt", criteriaModel, (totalCnt) => {
            let str = "<div class='col-lg-12'><div class='row'>";
            for (let i = 0; i < result.length; i++) {
                const timestamp = new Date(result[i].createDt);
                const month = timestamp.getMonth() + 1;
                const date = timestamp.getDate();
                let hours = timestamp.getHours();
                const minutes = timestamp.getMinutes();

                //섬네일용 이미지 가져오기 위한 ajax
                //비동기로 처리했을시 클라이언트 보다 속도가 느려 undefined 가 먼저 발생한 후 작동하는 현상을 해결하기 위해서 async false 지정하여
                //동기식으로 처리하게끔 처리
                $.ajax({
                    type: "get",
                    url: "/boardAttach/getInfo/" + result[i].boardNo,
                    async: false,
                    success: (thumb) => {
                        let thumbnail = "images/news/news.webp";
                        if (thumb !== "") {
                            // /aws/getImg?fileName=" + attachFilter[0].uuid + "&directory=" + attachFilter[0].uploadPath + "
                            thumbnail = "/aws/getImg?fileName=" + thumb.uuid + "&directory=" + thumb.uploadPath;
                        }

                        //정규식 사용하여 태그 제거하여 이미지 출력되는 현상 방지
                        let content = result[i].content.replace(/(<([^>]+)>)/ig, "");

                        //길이 제한 CSS 사용시 width 고정이 필요하기에
                        if (content.length >= 30) {
                            content = content.substring(0, 20) + "...";
                        }

                        //시간 출력
                        if (hours >= 13) {
                            hours -= 12;
                            hours = "오후 " + hours
                        } else {
                            hours = "오전 " + hours
                        }

                        str += "<div class='col-lg-4'><img class='img-heightAuto thumbnail' src='" + thumbnail + "' alt=''>\n" +
                            "<h4 class=\"text-primary mt-2 mb-1\"><a class='boardLink' id='" + result[i].boardNo + "'>" + result[i].title + "</a></h4>\n" +
                            "<p class=\"mb-1\">\n" +
                            content +
                            "</p>\n" +
                            "<span class=\"text-sm\">" + timestamp.getFullYear() + "-" + calendar(month, 2) + "-" + calendar(date, 2) + " | " + hours + ":" + minutes + "</span>\n" +
                            "</div>"
                    }
                })
            }

            str += "</div></div>";
            $("#list").html(str);

            const pageNum = criteriaModel.pageNum;
            if (pageNum === -1) {
                pageMaker(1, totalCnt);
            } else {
                pageMaker(pageNum, totalCnt)
            }

            $(".boardLink").click(function () {
                const getBoardId = $(this).closest("a").attr('id');
                // $.ajax({
                //     url: "/read?lang=" + getCookie('APPLICATION_LOCALE'),
                //     data: {boardNo: getBoardId, boardCategoryNo: 5},
                //     type: "get",
                //     success: (result) => {
                //         $(".boardContent").html(result);
                //         history.pushState({
                //             data: "/read",
                //             boardNo: getBoardId,
                //             boardCategoryNo: 5
                //         }, null, '/read?lang=' + getCookie('APPLICATION_LOCALE') + '&boardNo=' + getBoardId);
                //
                //     }
                // });

                $.get("/read?lang=" + getCookie('APPLICATION_LOCALE'), {
                    boardNo: getBoardId,
                    boardCategoryNo: 5
                }, (result) => {
                    $(".boardContent").html(result);
                    history.pushState({
                        data: "/read",
                        boardNo: getBoardId,
                        boardCategoryNo: 5
                    }, null, '/read?lang=' + getCookie('APPLICATION_LOCALE') + '&boardNo=' + getBoardId);
                })
            });
        });
    })
}

//페이지 이동 메서드
function pageAction(i) {
    const criteriaModel = {
        type: $("#type").val(),
        keyword: $("#keyword").val(),
        boardCategoryNo: 5,
        pageNum: i
    };
    loadList(criteriaModel);

    history.pushState({
        data: url,
        boardCategoryNo: 5,
        type: criteriaModel.type,
        keyword: criteriaModel.keyword,
        pageNum: i
    }, null, url + "?lang=" + getCookie('APPLICATION_LOCALE') + "&type=" + criteriaModel.type + "&keyword=" + criteriaModel.keyword + "&pageNum=" + i);
}

searchBtn.click(function () {
    const criteriaModel = {
        type: $("#type").val(),
        keyword: $("#keyword").val(),
        boardCategoryNo: 5,
        pageNum: 1
    };
    loadList(criteriaModel);
    history.pushState({
        data: url,
        boardCategoryNo: 5,
        type: criteriaModel.type,
        keyword: criteriaModel.keyword,
        pageNum: criteriaModel.pageNum
    }, null, url + "?lang=" + getCookie('APPLICATION_LOCALE') + "&type=" + criteriaModel.type + "&keyword=" + criteriaModel.keyword + "&pageNum=" + criteriaModel.pageNum);
});

//페이지 로딩시 초기값 가져오기 위해서
let criteriaModel = {
    type: typeState,
    keyword: keywordState,
    boardCategoryNo: 5,
    pageNum: statePageNum || -1
};

loadList(criteriaModel);


//등록 버튼
$('#regBtn').click(() => {
    $.get("/write?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 5}, (result) => {
        $(".content").html(result);
    });
    // $.ajax({
    //     url: "/write?lang=" + getCookie('APPLICATION_LOCALE'),
    //     data: {boardCategoryNo: 5},
    //     type: "get",
    //     success: (result) => {
    //         $(".content").html(result);
    //     }
    // });

    history.pushState({
        data: "/write",
        boardCategoryNo: 5
    }, null, "/write?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=5");
});
