$('#profileReg').click(function () {
    // $(".content").load("/team?lang=" + getCookie('APPLICATION_LOCALE'));
    $(".content").load("/profileReg");
});
const formData = {
    fileName: "66299ae7-1409-4048-81e9-77365de0e549_Neuer.webp",
    directory: "profileAttach/2020/01/23/"
};

$.ajax({
    url: '/profile/getImg',
    // processData: false,
    // contentType: false,
    data: formData,
    type: 'GET',
    success: () => {
        // $("#profileImg").innerHTML()
    }
})
