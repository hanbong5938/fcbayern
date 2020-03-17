const regBtn = $("#reg");
const modBtn = $("#mod");
const boardNo = $("#boardNo").val();
if (boardNo > 0) {
    regBtn.hide();
} else {
    modBtn.hide();
}

//카테고리 불러오기
$.ajax({
    url: "/board/category",
    dataType: "JSON",
    method: "get",
    success: (data) => {
        for (let i = 0; i < data.length; i++) {
            $('#category').append('<option value="' + data[i].boardCategoryNo + '">' + data[i].categoryNm + '</option>');
        }
        //가져온 값으로 select option 선택하기 위해서
        const boardCategoryNo = $("#boardCategoryNo").val();
        $("#category").val(boardCategoryNo + "");
    }
});

//이미지가 콜백 형식으로 업로드 되기 때문에 미리 글을 생성해놓은 뒤 state
$('#summernote').summernote({
    placeholder: '내용을 입력하세요.',
    tabsize: 2,
    height: 300,
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,
    lang: 'ko-KR',
    //콜백 onImageUpload 통해서 aws에 저장후 바로 불러와서 본문에 삽입하도록처리
    callbacks: {
        onImageUpload: (uploadFiles) => {
            for (let i = 0; i < uploadFiles.length; i++) {
                sendFile(uploadFiles[i]);
            }
        }
    }
});

//summernote 콜백 작동시킬 때 사용하기 위한 ajax
function sendFile(uploadFiles) {
    const formData = new FormData();

    formData.append('uploadFile', uploadFiles);

    $.ajax({
        url: '/boardAttach/insertImg',
        processData: false,
        contentType: false,
        data: formData,
        type: 'POST',
        success: (result) => {
            //uuid 와 folderPath 분리하기 위해
            const path = result.split("/");
            let temp = "";
            for (let i = 0; i < path.length - 1; i++) {
                temp += path[i] + "/";
            }

            const boardAttach = {
                uploadPath: 'boardAttach' + temp,
                uuid: path[path.length - 1]
            };

            const url = '/aws/getImg?fileName=' + boardAttach.uuid + '&directory=' + boardAttach.uploadPath;
            //summernote에 aws에서 저장된 이미지 불러와서 삽입
            $('#summernote').summernote("insertImage", url);
            // <img src="'+ url +'" width="480" height="auto"/>
        }
    })
}

function successRead(boardData) {
    const userNo = 1;
    $.ajax({
        method: "get",
        url: "/board/infoLast/" + userNo,
        success: (lastBoardNo) => {
            const boardNo = lastBoardNo.boardNo;

            $.get("/read?lang=" + getCookie('APPLICATION_LOCALE'), {
                boardCategoryNo: boardData.boardCategoryNo,
                boardNo: boardNo
            }, (result) => {
                $(".content").html(result);
                history.pushState({
                    data: "/read",
                    boardCategoryNo: boardData.boardCategoryNo, boardNo: boardNo
                }, null, "/read?lang=" + getCookie('APPLICATION_LOCALE') + "&boardNo=" + boardNo);
            })
        }
    });


}

//등록 버튼
regBtn.click(() => {
    const boardData = {
        title: $("#title").val(),
        content: $('#summernote').summernote('code'),
        writer: "admin", //ToDo 로그인 이후 수정
        userNo: 1, //ToDo 로그인 이후 수정
        boardCategoryNo: $('#category option:selected').val()
    };

    $.ajax({
        url: "/board/insertInfo",
        type: "post",
        data: JSON.stringify(boardData),
        contentType: "application/json; charset=utf-8",
        success: () => {
            alert("성공");
            successRead(boardData);
        }
    });
});

modBtn.click(() => {
    const boardData = {
        boardNo: boardNo,
        title: $("#title").val(),
        content: $('#summernote').summernote('code'),
        writer: "admin", //ToDo 로그인 이후 수정
        userNo: 1, //ToDo 로그인 이후 수정
        boardCategoryNo: $('#category option:selected').val()
    };

    $.ajax({
        url: "/board/modify",
        type: "patch",
        data: boardData,
        success: () => {
            alert("성공");
            successRead(boardData);
        }
    });
});