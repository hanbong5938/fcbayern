//카테고리 불러오기
$.ajax({
    url: "/board/category",
    dataType: "JSON",
    method: "get",
    success: (data) => {
        alert(data);
        for (let i = 0; i < data.length; i++) {
            $('#category').append('<option value="' + data[i].boardCategoryNo + '">' + data[i].categoryNm + '</option>');
        }
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
    callbacks: {
        onImageUpload: (uploadFiles) => {
            for (let i = 0; i < uploadFiles.length; i++) {
                sendFile(uploadFiles[i]);
            }
        }
    }
});

$('#reg').click(() => {
    console.log($('#summernote').summernote('code'));
});

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
            console.log(result);
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

            const url = '/boardAttach/getImg?fileName=' + boardAttach.uuid + '&directory=' + boardAttach.uploadPath;

            $('#summernote').summernote("insertImage", url);
            // <img src="'+ url +'" width="480" height="auto"/>
        }
    })


}