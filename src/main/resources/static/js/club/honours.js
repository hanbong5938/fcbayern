$('#honoursReg').click(function () {
    $(".content").load("/honoursReg?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/honoursReg"}, null, "/honoursReg?lang=" + getCookie('APPLICATION_LOCALE'));
});

function makeHonoursList(data, result, attachData, checkInternational) {
    let str = "";
    let interStr = "";
    let carouselItemStr = "<div class='carousel-item'><div class='row'>";
    let carouselNum = 0;
    let carouselIndicator = "";

    for (let i = 0; i < data.length; i++) {

        const honoursFilter = result.filter((element) => {
            return element.honoursCategoryNo === data[i].honoursCategoryNo;
        });

        str += " <div class='card'>" +
            "                    <div class='card-body'>" +
            "                        <a class='card-link' data-toggle='collapse' href='#category" + i + "'>" +
            "                            <table class='table-borderless'>" +
            "                                <tr>" +
            "                                    <td>" +
            "                                        <img class='img-widthAuto' src='/aws/getImg?fileName=" + data[i].fileNm + "&directory=honoursCategoryAttach/' alt='트로피 이미지'>" +
            "                                    </td>" +
            "                                    <td>" +
            "                                        <h1 class='text-wine'><span class='mr-2'>X</span>" + honoursFilter.length + "<span class='ml-2'>+</span></h1>" +//ToDo 숫자
            "                                        <small class='text-gray'>" + data[i].categoryNm + "</small>" +
            "                                    </td>" +
            "                                </tr>" +
            "                            </table>" +
            "                        </a>" +
            "                    </div>" +
            "                    <div id='category" + i + "' class='collapse'>" +
            "                        <div class='card-body pt-0'>" +
            "                            <div class='row blog'>" +
            "                                <div class='col-md-12'>" +
            "                                    <div id='carousel" + carouselNum + "' class='carousel slide' data-ride='carousel'>" +
            "                                     <!-- Carousel items -->" +
            "                                        <div class='carousel-inner'>" +
            "                                            <div class='carousel-item active'>" +
            "                                                <div class='row'>";

        interStr = str;

        //id fk 로 filter 처리를 해서 하나만 남겨 배열 0을 통해 첨부파일 정보 획득
        //aws 에서 첨부파일가져오고 honoursFilter 배열에 있는 honoursNm 가져온다.
        for (let j = 0, list = honoursFilter.length || 0; j < list; j++) {
            const attachFilter = attachData.filter((element) => {
                return element.honoursNo === honoursFilter[j].honoursNo;
            });

            //캐러셀 active 와 item 나누기 위해서
            if (j <= 2) {
                str +=
                    "<div class='col-md-4'>" +
                    "  <a>" +
                    "   <img src='/aws/getImg?fileName=" + attachFilter[0].uuid + "&directory=" + attachFilter[0].uploadPath + "' alt='' style='max-width:100%;'>\n" +
                    "   <span class='text-gray'>" + honoursFilter[j].honoursNm + "</span>" +
                    "  </a>" +
                    "</div>";
            }

            if (j > 2) {
                carouselItemStr +=
                    "<div class='col-md-4'>" +
                    "  <a>" +
                    "   <img src='/aws/getImg?fileName=" + attachFilter[0].uuid + "&directory=" + attachFilter[0].uploadPath + "' alt='' style='max-width:100%;'>\n" +
                    "   <span class='text-gray'>" + honoursFilter[j].honoursNm + "</span>" +
                    "  </a>" +
                    "</div>";
            }

            //carousel-item 3개씩 끊기 위해서
            if (j > 2 && j % 3 === 2) {
                carouselItemStr += "</div>" +
                    "</div>" +
                    "<div class='carousel-item'><div class='row'>";
            }

            //indicator 갯수
            if (j % 3 === 0) {
                carouselIndicator += "<li data-target='#carousel" + carouselNum + "' data-slide-to='" + j / 3 + "'></li>";
            }
        }//end for j

        carouselItemStr += "</div>" +
            //row
            "</div>";
        //carousel-item

        str +=
            "                                                </div>" +
            "                                                <!--.row-->" +
            "                                            </div>" +
            "                                            <!--.item-->" +
            carouselItemStr +
            "                                        </div>" +
            "                                        <!--.carousel-inner-->" +
            "                                    </div>" +
            "                                    <!--.Carousel-->" +
            "                                </div>" +
            "                                <!--.col-md-12-->" +
            "                            </div>" +
            "                             <!--.row-->" +
            "                        </div>" +
            "                        <!--.card-body pt-0-->" +
            "                        <div class='mb-2 mt-4'>" +
            "                            <ol class='carousel-indicators'>" +
            carouselIndicator +
            "                            </ol>" +
            "                        </div>" +
            "                        <!--.mb-2 mt-4-->" +
            "                    </div>" +
            "                    <!--.category-->" +
            "</div>" +
            "<!--.card-->";
        carouselNum++;

        //초기화 위해서 사용
        carouselItemStr = "<div class='carousel-item'><div class='row'>";
        carouselIndicator = "";
    }//end for i


    if (checkInternational === false) {
        const id = "#nationalHonours";
        $(id).html(str);
    } else {
        const id = "#internationalHonours";
        $(id).html(str);
    }

}

$.get("/honours/category", (data) => {
    $.get("/honours/getInfoList", (result) => {
            $.get("/honoursAttach/getAttachList", (attachData) => {

                    const nationalData = data.filter((element) => {
                        return element.international === false
                    });

                    const internationalData = data.filter((element) => {
                        return element.international === true
                    });

                    makeHonoursList(nationalData, result, attachData, false);
                    makeHonoursList(internationalData, result, attachData, true);

                }
            )
        }
    )
});
