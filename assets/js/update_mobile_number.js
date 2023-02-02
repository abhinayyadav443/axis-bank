$(document).ready(function(){
    $(".update_mobile__number_page .btn_yes").click(function(){
        $(".feedback_yes").show();
    })

    //thnk you page
    $(".update_mobile__number_page .enter_details").click(function(){
        $(".debit_content, .feedback").fadeOut(300);
        $(".debit_content_4").show();
    })

});