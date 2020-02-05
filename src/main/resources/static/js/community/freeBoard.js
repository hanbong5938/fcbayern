$('#regBtn').click(() => {
    $.ajax({
        url: "/write?lang=" + getCookie('APPLICATION_LOCALE'),
        data: {boardCategoryNo: 1},
        type: "get",
        success: (result) => {
            $(".content").html(result);
        }
    });

    history.pushState({
        data: "/write",
        boardCategoryNo: 1
    }, null, "/write?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=1");
});