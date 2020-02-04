const boardCategoryNo = $("#boardCategoryNo").val();

$.ajax({
    url: "/board/infoList?boardCategoryNo=" + boardCategoryNo,
    type: "get",
    success: (result) => {

        let str = "";
        for (let i = 0; i < result.length; i++) {
            const timestamp = new Date(result[i].createDt);
            const month = timestamp.getMonth() + 1;
            const date = timestamp.getDate();

            str += "        <tr>\n" +
                "            <td class=\"text-left\"><a class='boardLink' href='#' id='" + result[i].boardNo + "'>" + result[i].title + "</a></td>\n" +
                "            <td>" + result[i].userNo + "</td>\n" +
                "            <td>" + timestamp.getFullYear() + "-" + cal(month, 2) + "-" + cal(date, 2) + "</td>\n" +
                "            <td>" + result[i].hit + "</td>\n" +
                "            <td>0</td>\n" +//ToDo 좋아요 아직 미적용
                "        </tr>"
        }
        $("#list").html(str);

        $(".boardLink").click(function () {
            const getBoardId = $(this).closest("a").attr('id');
            $(".content").load("/board/info?lang=" + getCookie('APPLICATION_LOCALE'), {boardNo: getBoardId});
        });
    }
});

function cal(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}