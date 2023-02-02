$(document).ready(function() {
    // Card Multi 
    // $(".checkbox_label").click(function(){
    //     if ($(this).children().find('.checkbox').prop("checked")) {
    //         $(this).addClass("checked_label");
    //     } else {
    //         $(this).removeClass("checked_label");
    //     }
    // });

    $(".select_debit_card .cards li.cards_content").click(function(){
        $(".select_debit_card .cards li.cards_content").removeClass("checked_label");
        $(".select_debit_card .cards li.cards_content").children("input[name=check]").attr("checked",false);
        if ($(this).children("input[name=check]") != "checked") {
            $(this).children("input[name=check]").attr("checked",true);
            $(this).addClass("checked_label");
        }
    });
    
    $(".repayment_schedule_page .debit_content_3 .enter_details").click(function() {
        $(".credit_modal").show();
    })

    $(".repayment_schedule_page .download").click(function() {
        $(".credit_modal").show();
    })

    $(".repayment_schedule_page .close_credit_modal").click(function(){
        $(".credit_modal").hide();
    })
    $('.repayment_schedule_page #no_btn').on("click",function(){
        $('#carouselLoanControls').carousel(3);
    });
})