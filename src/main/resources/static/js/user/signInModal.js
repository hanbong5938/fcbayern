//로그인 전송
$("#signInBtn").click(() => {

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
                alert("성공");
                // $("#modal").modal('hide');
                // replaceLockIcon(0);
                //ajax로 세션값 하나하나 받아오는 것은 비효율적이기에 location 사용해서 새로고침
                location.href = "/";
            }
        })
    }
);

//가입모달
$("#signUpLink").click(() => {
    $(".modal-content").load("/signUpModal");
});