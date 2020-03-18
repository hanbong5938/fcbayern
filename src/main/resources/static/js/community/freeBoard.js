$('#regBtn').click(() => {
    $.get("/write?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 1}, (result) => {
        $(".content").html(result);
    });
    // $.ajax({
    //     url: "/write?lang=" + getCookie('APPLICATION_LOCALE'),
    //     data: {boardCategoryNo: 1},
    //     type: "get",
    //     success: (result) => {
    //         $(".content").html(result);
    //     }
    // });

    history.pushState({
        data: "/write",
        boardCategoryNo: 1
    }, null, "/write?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=" + boardCategoryNo);
});
