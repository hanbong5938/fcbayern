$("#signUpBtn").click(() => {

        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");
        const signUpData = {
            userId: $("#userId").val(),
            userPw: $("#userPw").val(),
            userNm: $("#userNm").val(),
            email: $("#email").val(),
        };
        if (signUpData.userPw === $("#userPwCheck").val()) {

            $.ajax({
                type: "post",
                url: "/user/signUp",
                data: signUpData,
                beforeSend: (xhr) => {
                    xhr.setRequestHeader(header, token);
                },
                success: () => {
                    iziToast.success({
                        icon: 'icon-person',
                        title: 'Sign Up,',
                        message: 'Success!',
                        pauseOnHover: false,
                        progressBarColor: 'rgb(0, 255, 184)',
                        close: false,
                        titleColor: 'black',
                        messageColor: 'black',
                        timeout: 2000,
                        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
                        onClosing: function () {
                            $(".modal-content").load("/signInModal");
                        }
                    });
                },
                error: (result) => {
                    alert(JSON.stringify(result));
                    iziToast.error({
                        title: 'Fail',
                        message: 'Please, try again.',
                    });
                }
            })
        } else {
            $("#wrong").html("비밀번호를 확인해 주세요.")
        }
    }
);