const statePageNum = history.state.pageNum; // 현재 pageNum 상태 확인
const criteriaModel = {
    pageNum: statePageNum || -1
};

loadList(criteriaModel);

function loadList(criteriaModel) {

    const getTotalCnt = $.ajax({
        url: "/iconStorage/getTotalCnt/" + sessionUserNo, type: "get", async: false
    });

    const totalCnt = Number(getTotalCnt.responseText);

    $.get("/iconStorage/getUserRetainList/" + sessionUserNo, criteriaModel, (result) => {
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
                        "<p class='font-weight-bold text-dark mt-3'> <span class='text-wine bold'>이름 : </span>" + result[i].iconNm + "</p>" +
                        "<a class='href iconRepresent' id='" + result[i].iconNo + "'> 대표로 설정 </a>" +
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

        $(".iconRepresent").click(function () {
            const getIconNo = $(this).closest("a").attr('id');
            $.ajax({
                url: "/iconStorage/represent/" + sessionUserNo + "&" + getIconNo,
                type: "post",
                beforeSend: (xhr) => {
                    xhr.setRequestHeader(header, token);
                },
                success: () => {
                    alert("대표아이콘으로 설정 되었습니다.")
                }
            })
        });

    })
}


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
        data: "/iconStorage",
        pageNum: i
    }, null, "/iconStorage?lang=" + getCookie('APPLICATION_LOCALE') + "&pageNum=" + i);
}

