$(document).ready(function(){
    $(".disputed_transaction_page .btn_yes").click(function(){
        $(".disputed_transaction_page .feedback_yes").show();
    })

    //thnk you page
    $(".disputed_transaction_page .enter_details").click(function(){
        $(".disputed_transaction_page .debit_content, .feedback").fadeOut(300);
        $(".disputed_transaction_page .debit_content_4").show();
    })

});