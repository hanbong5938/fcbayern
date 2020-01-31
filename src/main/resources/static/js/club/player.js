$('#profileReg').click(function () {
    // $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
    $(".content").load("/profileReg");
});

function profileInfoList() {
    return new Promise((resolve) => {
        $.ajax({
            url: '/profile/infoList',
            type: 'GET',
            success: (result) => {
                resolve(result);
            }
        })
    })
}

$.ajax({
    type: 'GET',
    url: '/profile/category',
    dataType: "JSON",
    success: ((data) => {
        profileInfoList().then(
            function profileInfoList(result) {

                $.ajax({
                    url: '/profileAttach/getAttachList',
                    type: 'GET',
                    success: (attachData) => {

                        let str = "";
                        for (let i = 0; i < data.length; i++) {
                            const profileFilter = result.filter((element) => {
                                return element.profileCategoryNo === data[i].profileCategoryNo;
                            });
                            //반복문 통해 카테고리 멸로 필터링

                            for (let j = 0, list = profileFilter.length || 0; j < list; j++) {
                                const attachFilter = attachData.filter((element) => {
                                    return element.profileNo === profileFilter[j].profileNo;
                                });
                                //id fk 로 filter처리를 해서 하나만 남겨 배열 0을 통해 첨부파일 정보 획득

                                str = "<div class='container-custom'>\n" +
                                    "            <h1 class='bold profile-category'>" + data[i].categoryNm + "</h1>\n" +
                                    "            <div class='col-lg-12'>\n" +
                                    "                <div class='row'>\n" +
                                    "                    <div class='col-lg-3'>\n" +
                                    "                        <div class='profile-img text-center'>\n" +
                                    "                            <img src='/profileAttach/getImg?fileName=" + attachFilter[0].uuid + "&directory=" + attachData[0].uploadPath + "' alt=''>\n" +
                                    "                            <div>\n" +
                                    "                                <span class='text-primary'>" + profileFilter[j].profileNm + "</span></div>\n" +
                                    "                            <div>\n" +
                                    "                                <span>" + profileFilter[j].birthDate + "</span>\n" +
                                    "                            </div>\n" +
                                    "                        </div>\n" +
                                    "                    </div>\n" +
                                    "                </div>\n" +
                                    "            </div>\n" +
                                    "        </div>"
                            }
                        }
                    // <%--<img class="img-fluid"	src="/profile/getImg?fileName=66299ae7-1409-4048-81e9-77365de0e549_Neuer.webp&directory=profileAttach/2020/01/23/">--%>

                        $("#profileList").html(str);
                    }
                });
            }
        )
    })
});