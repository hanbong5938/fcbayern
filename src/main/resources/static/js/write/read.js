const boardNo = Number($("#boardNo").val());
$.ajax({
    url: "/board/info/" + boardNo,
    type: "get",
    success: (result) => {
        $("#title").val(result.title);
        $("#content").html(result.content);
    }
});