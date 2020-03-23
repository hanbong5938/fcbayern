$("#signUpBtn").click(() => {

        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");
        const signUpData = {
            userId: $("#userId").val(),
            userPw: $("#userPw").val(),
            userNm: $("#userNm").val(),
            email: $("#email").val(),
        };

        $.ajax({
            type: "post",
            url: "/user/signUp",
            data: signUpData,
            beforeSend: (xhr) => {
                xhr.setRequestHeader(header, token);
            },
            success: () => {
                alert("성공?")
            }
        })
    }
);