$(document).ready(function(){
    $(".inner_template_page .btn_yes").click(function(){
        $(".feedback_yes").show();
    })

    $(".inner_template_page .call_us_modal").click(function(){
        $(".contact_modal").show();
    })

    $(".inner_template_page .inner_email").click(function(){
        $(".credit_modal").show();
    })

    //thnk you page
    $(".inner_template_page .enter_details").click(function(){
        $(".debit_content, .feedback").fadeOut(300);
        $(".debit_content_4").show();
    })

});