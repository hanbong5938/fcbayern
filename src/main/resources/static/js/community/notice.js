$('#regBtn').click(() => {
    $.get("/write?lang=" + getCookie('APPLICATION_LOCALE'), {boardCategoryNo: 4}, (result) => {
        $(".content").html(result);
    });

    history.pushState({
        data: "/write",
        boardCategoryNo: 4
    }, null, "/write?lang=" + getCookie('APPLICATION_LOCALE') + "&boardCategoryNo=" + boardCategoryNo);
});
