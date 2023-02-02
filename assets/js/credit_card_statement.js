$(document).ready(function(){
    // Card Multi 
    // $(".checkbox_label").click(function(){
    //     $(".checkbox_label").removeClass("checked_label")
    //     console.log($(this).children("input[name=check]"))
    //     if ($('input[name=check]:checked').length > 0) {
    //         $(this).addClass("checked_label");
    //     }
    // });
    $(".select_debit_card .cards li.cards_content").click(function(){
        $(".select_debit_card .cards li.cards_content").removeClass("checked_label");
        if ($(this).children("input[name=check]") != "checked") {
            $(this).children("input[name=check]").attr("checked",true);
            $(this).addClass("checked_label");
        }
    });

    //modal
    $(".credit_card_statement_page .debit_content_3 .submit_details").click(function() {
        $(".credit_card_statement_page .credit_modal").show();
    })

    $(".credit_card_statement_page .download").click(function() {
        $(".credit_card_statement_page .credit_modal").show();
    })

    $(".credit_card_statement_page .close_credit_modal").click(function(){
        $(".credit_card_statement_page .credit_modal").hide();
    })
    
    $(".credit_card_statement_page .credit_modal .credit_modal_content").click(function(e) {
        e.stopPropagation();
    }) 

    $(".credit_card_statement_page .credit_modal").click(function() {
        $(this).hide();
    })

    $('.credit_card_statement_page #no_btn').on("click",function(){
        $('#carouselCreditControls').carousel(4);
    });



    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })
});