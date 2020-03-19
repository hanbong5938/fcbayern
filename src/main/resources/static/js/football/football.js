$('#regBtn').click(() => {
    $.get("/write?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 3}, (result) => {
        $(".content").html(result);
    });

    history.pushState({
        data: "/write",
        boardCategoryNo: 3
    }, null, "/write?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=" + boardCategoryNo);
});
