const iconRegBtn = $("#iconRegBtn");

if (sessionAuthNo >= 3) {
    iconRegBtn.hide();
}

iconRegBtn.click(() => {
    $.get("/iconShopReg?lang=" + getCookie('APPLICATION_LOCALE'), (result) => {
        $(".content").html(result);
    });

    history.pushState({data: "/iconReg"},
        null, "/iconShopReg?lang=" + getCookie('APPLICATION_LOCALE'));
});
const statePageNum = history.state.pageNum; // 현재 pageNum 상태 확인
const criteriaModel = {
    pageNum: statePageNum || -1
};

loadList(criteriaModel);

function loadList(criteriaModel) {
    $.get("/iconShop/getTotalCnt", (totalCnt) => {
        $.get("/iconShop/getInfoList", criteriaModel, (result) => {
                let str = "";
                for (let i = 0; i < result.length; i++) {

                    $.ajax({
                        url: "/iconShopAttach/getAttachImg/" + result[i].iconNo,
                        // data: result[i].iconNo,
                        async: false,
                        success: (attachData) => {
                            if (i % 2 === 0) {
                                str += "<div class='col-lg-12 mt-1'><div class='row'>";
                            }

                            str += "<div class='col-lg-6'><div class='card-body' style='border:1px solid; padding:10px;'>" +
                                "<div class='col-lg-12'>" +
                                "<div class='row'>" +
                                "<div class='col-lg-4'>" +
                                "<div style='padding:30%; border: 1px solid lightslategrey' ><img style='display:block; margin-right: auto; margin-left: auto;' class='' src='/aws/getImg?fileName=" + attachData.uuid + "&directory=" + attachData.uploadPath + "' alt='아이콘 이미지'></div>" +
                                "</div>" +
                                "<div class='col-lg-8'>" +
                                "<p class='font-weight-bold text-dark'> <span class='text-wine bold'>이름 : </span>" + result[i].iconNm + "</p>" +
                                "<p> 가격 : " + result[i].iconPrice + " &nbsp;&nbsp;&nbsp; 수량 : " + result[i].iconCnt + "</p>" +
                                "<a class='href iconShopBuy' id='" + result[i].iconNo + "'> 구입 </a>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</div>";

                            if (i % 2 === 1) {
                                str += "</div></div></div></div>"
                            }

                        }
                    })//end get
                }

                $(".iconShopContainer").html(str);

                const pageNum = criteriaModel.pageNum;
                if (pageNum === -1) {
                    iconPageMaker(1, totalCnt);
                } else {
                    iconPageMaker(pageNum, totalCnt)
                }

                $(".iconShopBuy").click(function () {
                    const getIconNo = $(this).closest("a").attr('id');
                    $.ajax({
                        url: "/iconShop/buyIcon/" + sessionUserNo + "&" + getIconNo,
                        type: "post",
                        beforeSend: (xhr) => {
                            xhr.setRequestHeader(header, token);
                        },
                        success: () => {
                            alert("구입하였습니다.")
                        },
                        error: () => {
                            alert("포인트가 부족하거나 보유중 입니다..")
                        }
                    })
                    // $.get("/read?lang=" + getCookie('APPLICATION_LOCALE'), {
                    //     boardNo: getBoardId,
                    //     boardCategoryNo: boardCategoryNo
                    // }, (result) => {
                    //     $(".boardContent").html(result);
                    //     history.pushState({
                    //         data: "/read",
                    //         boardNo: getBoardId,
                    //         boardCategoryNo: boardCategoryNo
                    //     }, null, '/read?lang=' + getCookie('APPLICATION_LOCALE') + '&boardNo=' + getBoardId);
                    // })
                });

            }
        );//end get
    });
};

//페이징 버튼 만드는 function
function iconPageMaker(pageNum, totalCnt) {
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
        pageNum: i
    };
    loadList(criteriaModel);

    history.pushState({
        data: "/iconShop",
        pageNum: i
    }, null, "/iconShop?lang=" + getCookie('APPLICATION_LOCALE') + "&pageNum=" + i);
}