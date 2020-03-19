$('#regBtn').click(() => {
    $.get("/write?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 2}, (result) => {
        $(".content").html(result);
    });

    history.pushState({
        data: "/write",
        boardCategoryNo: 2
    }, null, "/write?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=" + boardCategoryNo);
});
