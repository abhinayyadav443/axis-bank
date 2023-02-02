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
    $('.date_picker_content').datepicker({
        orientation: "bottom",
        format: 'dd/mm/yyyy',
    });

    $(".date_picker_input").change(function(){
        if ($(this).val()== "") {
            $(this).siblings(".datapicker_label").show();
        } else {
            $(this).siblings(".datapicker_label").hide();
        }
    })

    //modal
    $(".agri_account_statement_page .debit_content_3 .submit_details").click(function() {
        $(".agri_account_statement_page .credit_modal").show();
    })

    $(".agri_account_statement_page .download").click(function() {
        $(".agri_account_statement_page .credit_modal").show();
    })

    $(".agri_account_statement_page .close_credit_modal").click(function(){
        $(".agri_account_statement_page .credit_modal").hide();
    })
    
    // $(".credit_modal_2 .credit_modal_content").click(function(e) {
    //     e.stopPropagation();
    // }) 
    $(".agri_account_statement_page .credit_modal .credit_modal_content").click(function(e) {
        e.stopPropagation();
    }) 

    $(".credit_modal").click(function() {
        $(this).hide();
    })

    $('.agri_account_statement_page #no_btn').on("click",function(){
        $('#carouselAgriAccControls').carousel(4);
    });

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

    
});