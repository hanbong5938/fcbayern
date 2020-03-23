//로그인 전송
$("#signInBtn").click(() => {

        //토큰과 같이 전송하지 않으면 405에러 발생
        const token = $("meta[name='_csrf']").attr("content");
        const header = $("meta[name='_csrf_header']").attr("content");
        const signInData = {
            userId: $("#userId").val(),
            userPw: $("#userPw").val(),
        };

        $.ajax({
            type: "post",
            url: "/signIn",
            data: signInData,
            beforeSend: (xhr) => {
                xhr.setRequestHeader(header, token);
            },
            success: () => {
                alert("성공?")
            }
        })
    }
);

//가입모달
$("#signUpLink").click(() => {
    $(".modal-content").load("/signUpModal");
});