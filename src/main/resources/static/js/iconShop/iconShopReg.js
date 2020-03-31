const drop = $("#drop");
let uploadFiles = [];

function preview(file, idx) {
    const reader = new FileReader();
    reader.onload = ((f, idx) => {
        return (e) => {
            const div = '<div class ="thumb">' +
                '<div class="close" data-idx="' + idx + '">X</div>' +
                '<img src="' + e.target.result + '" title="' + escape(f.name) + '" alt=""/>' +
                '</div>';
            $("#thumbnails").append(div);
        };
    })(file, idx);
    reader.readAsDataURL(file);
}

//promise 사용위해 이미지 삽입시
function insertImg(formData) {
    return new Promise((resolve) => {
        $.ajax({
            url: '/iconShopAttach/insertImg',
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST',
            beforeSend: (xhr) => {
                xhr.setRequestHeader(header, token);
            },
            success: (result) => {
                //uuid 와 folderPath 분리하기 위해
                const path = result.split("/");
                let temp = "";
                for (let i = 0; i < path.length - 1; i++) {
                    temp += path[i] + "/";
                }

                const iconShop = {
                    uploadPath: 'iconShopAttach' + temp,
                    uuid: path[path.length - 1]
                };
                resolve(iconShop);
            }
        })
    })
}

$(drop).on("dragenter", (e) => { //드래그 요소가 들어왔을떄
    $(this).addClass('drag-over');
}).on("dragleave", (e) => { //드래그 요소가 나갔을때
    $(this).removeClass('drag-over');
}).on("dragover", (e) => { //이 부분 없으면 드래그한 이미지가 현재 파일에
    e.stopPropagation();
    e.preventDefault();
}).on("drop", (e) => { //드래그한 항목을 떨어뜨렸을때
    e.preventDefault();
    $(this).removeClass('drag-over');

    const files = e.originalEvent.dataTransfer.files;//드랍한 파일

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const size = uploadFiles.push(file); //업로드 목록에 추가
        preview(file, size - 1);//미리 보기 만들기
    }
});


$("#btnSubmit").click(() => {
    const formData = new FormData();
    $.each(uploadFiles, (i, file) => {
        if (file.upload !== 'disable') { //삭제하지 않은 이미지만 업로드 항목으로 추가
            formData.append('uploadFile', file);
        }
    });

    const data = {
        iconNm: $("#iconNm").val(),
        iconPrice: $("#iconPrice").val(),
        iconCnt: $("#iconCnt").val()
    };

    $.ajax({
        url: '/iconShop/insertIcon',
        data: data,
        type: "post",
        beforeSend: (xhr) => {
            xhr.setRequestHeader(header, token);
        },
        success: () => {
            insertImg(formData).then(
                function insertAttachInfo(iconShop) {
                    $.ajax({
                        type: "post",
                        url: "/iconShopAttach/insertAttachInfo",
                        data: iconShop,
                        beforeSend: (xhr) => {
                            xhr.setRequestHeader(header, token);
                        },
                        success: () => {
                            iziToast.success({
                                icon: 'icon-person',
                                title: 'Success!,',
                                message: 'Buy icon!',
                                pauseOnHover: false,
                                progressBarColor: 'rgb(0, 255, 184)',
                                close: false,
                                titleColor: 'black',
                                messageColor: 'black',
                                timeout: 2000,
                                position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
                                onClosing: function () {
                                    $(".content").load("/iconShop?lang=" + getCookie('APPLICATION_LOCALE'));
                                    history.pushState({data: "/iconShop"}, null, "/iconShop?lang=" + getCookie('APPLICATION_LOCALE'));
                                }
                            });
                        },
                        error: () => {
                            iziToast.error({
                                title: 'Fail',
                                message: 'Please, Try again.',
                            });
                        }
                    })
                }
            )
        }
    })
});

$("#thumbnails").click(".close", (e) => {
    const $target = $(e.target);
    const idx = $target.attr("data-idx");
    uploadFiles[idx].upload = 'disable';//삭제된 항목에 대해서 처리하기 위해서

    $target.parent().remove(); //섬네일 삭제
});
