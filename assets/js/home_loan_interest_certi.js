$(document).ready(function(){
    // Card Multi 
    // $(".checkbox_label").click(function(){
    //     $(".checkbox_label").removeClass("checked_label")
    //     if ($('input[name=check]:checked').length > 0) {
    //         $(this).addClass("checked_label");
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

    //date picker
    $('.date_picker_input').datepicker({
        orientation: "bottom"
    }); 

    $(".date_picker_input").change(function(){
        if ($(this).val()== "") {
            $(this).siblings(".datapicker_label").show();
        } else {
            $(this).siblings(".datapicker_label").hide();
        }
    })

    //select
    $('.home_loan_interest_certi_page .choose_year').select2();

    //modal
    $(".home_loan_interest_certi_page .debit_content_3 .submit_details").click(function() {
        $(".home_loan_interest_certi_page .credit_modal").show();
    })

    $(".home_loan_interest_certi_page .download").click(function() {
        $(".home_loan_interest_certi_page .credit_modal").show();
    })

    $(".home_loan_interest_certi_page .close_credit_modal").click(function(){
        $(".home_loan_interest_certi_page .credit_modal").hide();
        $(".home_loan_interest_certi_page .credit_modal_2").show();
    })
    
    $(".home_loan_interest_certi_page .credit_modal_2 .credit_modal_content").click(function(e) {
        e.stopPropagation();
    }) 
    $(".home_loan_interest_certi_page .credit_modal .credit_modal_content").click(function(e) {
        e.stopPropagation();
    }) 

    $(".home_loan_interest_certi_page .credit_modal").click(function() {
        $(this).hide();
    })

    $('.home_loan_interest_certi_page #no_btn').on("click",function(){
        $(".credit_modal_2").hide();
        $('#carouselAgriAccControls').carousel(4);
    });

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })
});