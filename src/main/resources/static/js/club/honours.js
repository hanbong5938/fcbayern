$('#honoursReg').click(function () {
    $(".content").load("/honoursReg?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/honoursReg"}, null, "/honoursReg?lang=" + getCookie('APPLICATION_LOCALE'));
});

function honoursInfoList() {
    return new Promise((resolve) => {
        $.get("/honours/getInfoList", (result) => {
            resolve(result);
        })
    })
}

$.get("/honours/category", (data) => {
    $.get("/honours/getInfoList", (result) => {
            $.get("/honoursAttach/getAttachList", (attachData) => {
                    console.log(data);
                    console.log(result);
                    console.log(attachData);

                    let str = "";
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
                            "                                        <img class='img-widthAuto' src='images/honours/germanChampionship.png' alt=''>" +
                            "                                    </td>" +
                            "                                    <td>" +
                            "                                        <h1 class='text-wine'>X 29<i class='icon-plus'></i></h1>" +//ToDo 숫자
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
                            "                                    <div id='carousel" + i + "' class='carousel slide' data-ride='carousel'>";

                        for (let j = 0, list = honoursFilter.length || 0; j < list; j++) {
                            const attachFilter = attachData.filter((element) => {
                                return element.honoursNo === honoursFilter[j].honoursNo;
                            });
                            console.log(0%3);

                            //우선 캐러샐 이너 for문 한번 더돌려야하나 아니 j%3
                            //id fk 로 filter 처리를 해서 하나만 남겨 배열 0을 통해 첨부파일 정보 획득
                            str += "                                        <!-- Carousel items -->" +
                                "                                        <div class='carousel-inner'>" +
                                "                                            <div class='carousel-item active'>" +
                                "                                                <div class='row'>" +
                                "                                                    <div class='col-md-4'>" +
                                "                                                        <a>" +
                                "                                                            <img src='images/honoursSeason/2019_header.jpg' alt='Image'" +
                                "                                                                 style='max-width:100%;'>" +
                                "                                                            <span class='text-gray'>Season 2018/2019</span>" +
                                "                                                        </a>" +
                                "                                                    </div>" +
                                "                                                    <div class='col-md-4'>" +
                                "                                                        <a>" +
                                "                                                            <img src='images/honoursSeason/2018_header.jpg' alt='Image'" +
                                "                                                                 style='max-width:100%;'>" +
                                "                                                            <span class='text-gray'>Season 2017/2018</span>" +
                                "                                                        </a>" +
                                "                                                    </div>" +
                                "                                                    <div class='col-md-4'>" +
                                "                                                        <a>" +
                                "                                                            <img src='images/honoursSeason/2017_header.jpg' alt='Image'" +
                                "                                                                 style='max-width:100%;'>" +
                                "                                                            <span class='text-gray'>Season 2016/2017</span>" +
                                "                                                        </a>" +
                                "                                                    </div>" +
                                "                                                </div>" +
                                "                                                <!--.row-->" +
                                "                                            </div>" +
                                "                                            <!--.item-->" +
                                "                                            <div class='carousel-item'>" +
                                "                                                <div class='row'>" +
                                "                                                    <div class='col-md-4'>" +
                                "                                                        <a>" +
                                "                                                            <img src='images/honoursSeason/2017_header.jpg' alt='Image'" +
                                "                                                                 style='max-width:100%;'>" +
                                "                                                            <span class='text-gray'>Season 2016/2017</span>" +
                                "                                                        </a>" +
                                "                                                    </div>" +
                                "                                                    <div class='col-md-4'>" +
                                "                                                        <a>" +
                                "                                                            <img src='images/honoursSeason/2017_header.jpg' alt='Image'" +
                                "                                                                 style='max-width:100%;'>" +
                                "                                                            <span class='text-gray'>Season 2016/2017</span>" +
                                "                                                        </a>" +
                                "                                                    </div>" +
                                "                                                    <div class='col-md-4'>" +
                                "                                                        <a>" +
                                "                                                            <img src='images/honoursSeason/2013_header.jpg' alt='Image'" +
                                "                                                                 style='max-width:100%;'>" +
                                "                                                            <span class='text-gray'>Season 2012/2013</span>" +
                                "                                                        </a>" +
                                "                                                    </div>" +
                                "                                                </div>" +
                                "                                                <!--.row-->" +
                                "                                            </div>" +
                                "                                            <!--.item-->" +
                                "                                        </div>" +
                                "                                        <!--.carousel-inner-->" +
                                "                                    </div>\n" +
                                "                                    <!--.Carousel-->" +
                                "                                </div>" +
                                "                            </div>" +
                                "                        </div>" +
                                "                        <div class='mb-2 mt-4'>" +
                                "                            <ol class='carousel-indicators'>" +
                                "                                <li data-target='#carousel" + i + "' data-slide-to='0' class='active'></li>" +
                                "                                <li data-target='#carousel" + i + "' data-slide-to='1'></li>" +
                                "                            </ol>" +
                                "                        </div>" +
                                "                    </div>" +
                                "                </div>"
                        }//end for j
                    }//end for i
                    $("#nationalHonours").html();
                }
            )
        }
    )
});
// $.ajax({
//     type: 'GET',
//     url: '/profile/category',
//     success: ((data) => {
//         profileInfoList().then(
//             function profileInfoList(result) {
//
//                 $.ajax({
//                     url: '/profileAttach/getAttachList',
//                     type: 'GET',
//                     success: (attachData) => {
//
//                         let str = "";
//                         for (let i = 0; i < data.length; i++) {
//                             const profileFilter = result.filter((element) => {
//                                 return element.profileCategoryNo === data[i].profileCategoryNo;
//                             });
//                             //반복문 통해 카테고리 별로 필터링
//
//                             for (let j = 0, list = profileFilter.length || 0; j < list; j++) {
//                                 const attachFilter = attachData.filter((element) => {
//                                     return element.profileNo === profileFilter[j].profileNo;
//                                 });
//                                 const date = new Date(profileFilter[j].birthDate);
//                                 const month = calendar(date.getMonth() + 1, 2);
//                                 const day = calendar(date.getDate(), 2);
//                                 //id fk 로 filter 처리를 해서 하나만 남겨 배열 0을 통해 첨부파일 정보 획득
//                                 str += "<div class='container-custom'>\n" +
//                                     "            <h1 class='bold profile-category'>" + data[i].categoryNm + "</h1>\n" +
//                                     "            <div class='col-lg-12'>\n" +
//                                     "                <div class='row'>\n" +
//                                     "                    <div class='col-lg-3'>\n" +
//                                     "                        <div class='profile-img text-center'>\n" +
//                                     "                            <img src='/aws/getImg?fileName=" + attachFilter[0].uuid + "&directory=" + attachFilter[0].uploadPath + "' alt=''>\n" +
//                                     "                            <div>\n" +
//                                     "                                <span class='text-primary'>" + profileFilter[j].profileNm + "</span></div>\n" +
//                                     "                            <div>\n" +
//                                     "                                <span>" + date.getFullYear() + "-" + month + "-" + day + "</span>\n" +
//                                     "                            </div>\n" +
//                                     "                        </div>\n" +
//                                     "                    </div>\n" +
//                                     "                </div>\n" +
//                                     "            </div>\n" +
//                                     "        </div>"
//                             }
//                         }
//
//                         $("#profileList").html(str);
//                     }
//                 });
//             }
//         )
//     })
// });