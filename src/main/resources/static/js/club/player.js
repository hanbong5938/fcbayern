const profileReg = $('#profileReg');

profileReg.click(function () {
    $(".content").load("/profileReg?lang=" + getCookie('APPLICATION_LOCALE'));
    history.pushState({data: "/profileReg"}, null, "/profileReg?lang=" + getCookie('APPLICATION_LOCALE'));

});

//권한 낮으면 등록버튼 숨기게
if (Number(sessionAuthNo) >= 3 || isNaN(Number(sessionAuthNo))) {
    profileReg.hide();
}

function profileInfoList() {
    return new Promise((resolve) => {
        $.get("/profile/infoList", (result) => {
            resolve(result);
        })
    })
}


$.get("/profile/category", ((data) => {
    profileInfoList().then(
        function profileInfoList(result) {
            $.get("/profileAttach/getAttachList", (attachData) => {
                let str = "";
                //반복문 통해 카테고리 별로 필터링
                for (let i = 0; i < data.length; i++) {
                    const profileFilter = result.filter((element) => {
                        return element.profileCategoryNo === data[i].profileCategoryNo;
                    });

                    str += "<div class='container-custom'>\n" +
                        "            <h1 class='bold profile-category'>" + data[i].categoryNm + "</h1>\n" +
                        "            <div class='col-lg-12'>\n" +
                        "            <div class='row'>";
                    for (let j = 0, list = profileFilter.length || 0; j < list; j++) {
                        const attachFilter = attachData.filter((element) => {
                            return element.profileNo === profileFilter[j].profileNo;
                        });
                        const date = new Date(profileFilter[j].birthDate);
                        const month = calendar(date.getMonth() + 1, 2);
                        const day = calendar(date.getDate(), 2);

                        //id fk 로 filter 처리를 해서 하나만 남겨 배열 0을 통해 첨부파일 정보 획득
                        str += "                    <div class='col-lg-3'>\n" +
                            "                        <div class='profile-img text-center' style='overflow: hidden;'>\n" +
                            "                            <img src='/aws/getImg?fileName=" + attachFilter[0].uuid + "&directory=" + attachFilter[0].uploadPath + "' alt='' style='margin-left: -23%; margin-bottom: -200" +
                            "%; '>\n" +
                            "                            <div class=''>\n" +
                            "                                <span class='text-primary'  style='background-color: white'>" + profileFilter[j].profileNm + "</span></div>\n" +
                            "                            <div>\n" +
                            "                                <span style='background-color: white'>" + date.getFullYear() + "-" + month + "-" + day + "</span>\n" +
                            "                            </div>\n" +
                            "                        </div>\n" +
                            "                    </div>\n";
                    }
                    str += "        </div>" +
                        "          </div>" +
                        "         </div>";
                }

                $("#profileList").html(str);
            })
        }
    )
}));