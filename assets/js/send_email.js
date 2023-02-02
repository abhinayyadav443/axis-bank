
$(document).ready(function () {
    $(".send_email_page .enter_details").click(function(){
        $(".send_email_page .debit_content").fadeOut(300);
        $(".send_email_page .compose_mail_container").show();
    })

    var arr = [];

    $('.send_email_page .upload-attachment').fileupload({
        change : function (e, data) {
            var maxSize = 0;
            $(".error").hide();
            var value;
            $.each(data.files, function (index, file) {
                maxSize += file.size;
                console.log(maxSize)
                arr.push(file);
                if(maxSize > 5000000) {
                    console.log("inside if")
                    $(".file_allowed").show();
                    return false;
                }
            });

            if (maxSize < 5000000) {
                $(this).siblings("label").children(".file_name")[0].innerHTML = data.files[0].name + "<span class='icon-close upload_icon'></span>";
                $(this).siblings(".upload_icon").show();
                $(this).siblings("label").children(".file_default").hide();
            }
        },
        limitMultiFileUploadSize: 5000000,
        acceptFileTypes: /(\.|\/)(jpe?g|png|pdf;l)$/i
    });
    
    $(".send_email_page .file_list .file-chosen .upload_icon").click(function(){
        console.log("eddw")
        $(this).siblings("label").children(".file_name")[0].innerHTML = "";
        $(this).siblings("label").children(".file_default").show();
        $(this).hide();
    })

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

    //compose mail container
    $(".send_email_page .submit").click(function(){
        $(".compose_mail_container").hide();
    })

     //thnk you page
     $(".send_email_page .submit").click(function(){
        $(".debit_content").fadeOut(300);
        $(".debit_content_4").show();
        $("body").css("overflow","auto");
    })
}); 
