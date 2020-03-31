//로그인 전송
$("#signInBtn").click(() => {

        const signInData = {
            userId: $("#userId").val(),
            userPw: $("#userPw").val(),
            rem: $("#rem").val(),
        };

        $.ajax({
            type: "post",
            url: "/signIn",
            data: signInData,
            beforeSend: (xhr) => {
                xhr.setRequestHeader(header, token);
            },
            success: () => {
                // alert("로그인 되었습니다.");
                $('#modal').modal("hide");
                iziToast.success({
                    // theme: 'dark',
                    icon: 'icon-person',
                    title: 'Hello,',
                    message: 'Welcome!',
                    pauseOnHover: false,
                    progressBarColor: 'rgb(0, 255, 184)',
                    close: false,
                    titleColor: 'black',
                    messageColor: 'black',
                    timeout: 2000,
                    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
                    buttons: [
                        ['<button class="text-dark">Close</button>', function (instance, toast) {
                            location.href = "/";
                        }, true]
                    ],
                    onClosing: function () {
                        location.href = "/";
                    }
                });
                // $("#modal").modal('hide');
                // replaceLockIcon(0);
                //ajax로 세션값 하나하나 받아오는 것은 비효율적이기에 location 사용해서 새로고침
            },
            error: () => {
                iziToast.error({
                    title: 'Fail',
                    message: 'Please, try again.',
                });

            }
        })
    }
);

//가입모달
$("#signUpLink").click(() => {
    $(".modal-content").load("/signUpModal");
});

document.addEventListener('iziToast-closing', function (data) {
    if (data.detail.class == 'test') {
        location.href = "/";
    }
});
