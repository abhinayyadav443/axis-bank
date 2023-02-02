$(document).ready(function(){
    $(".life_time_credit_card_page .btn_yes").click(function(){
        $(".feedback_yes").show();
    })

    //thnk you page
    $(".life_time_credit_card_page .enter_details").click(function(){
        $(".debit_content, .feedback").fadeOut(300);
        $(".debit_content_4").show();
    })

    

});