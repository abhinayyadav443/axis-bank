$(document).ready(function () {
    $(".not_helpful_page .chat_agent").click(function () {
        $(".chat_agent_modal").show();
    })
    // $(".speak_us").click(function () {
    //     $(".speak_us_modal").show();
    // })
    $(".not_helpful_page .call_us_modal").click(function(){
        $(".contact_modal").show();
    })
    $(".not_helpful_page .connect_email").click(function () {
        $(".connect_email_modal").show();
    })

    $(".not_helpful_page .send_email").click(function(){
        $(".credit_modal").show();
    })

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

});





