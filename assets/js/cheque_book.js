
$(document).ready(function () {
    // Card Multi 
    // $(".checkbox_label").click(function(){
    //     if ($(this).children().find('.checkbox').prop("checked")) {
    //         $(this).addClass("checked_label");
    //     } else {
    //         $(this).removeClass("checked_label");
    //     }
    // });

    $(".select_debit_card .cards li.cards_content").click(function() { 
        if ($(this).children(".checkbox").is(":checked")) {
            $(this).removeClass("checked_label");
            $(this).children(".checkbox").attr("checked",false);
        } else {
            $(this).children(".checkbox").attr("checked",true);
            $(this).addClass("checked_label");
        }
    });

    $(".cheque_book_request_page .debit_content_3 .submit_details").click(function() {
        $(".cheque_book_request_page .cheque_modal").show();
    })

    $(".cheque_book_request_page .credit_btn").click(function() {
        $(".cheque_book_request_page .cheque_modal").hide();
        $(".cheque_book_request_page .cheque_modal_2").show();
    })
    
    $(".cheque_book_request_page .cheque_modal_2 .credit_modal_content").click(function(e) {
        e.stopPropagation();
    }) 
    $(".cheque_book_request_page .cheque_modal_2").click(function() {
        $(this).hide();
    })
    $(".cheque_modal_2 .credit_btn_2").click(function() {
        $(".cheque_book_request_page .cheque_modal_2").hide();
    })

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })
    
});