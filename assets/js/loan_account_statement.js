
$(document).ready(function () {
    // Card Multi 
    // $(".select_debit_card .cards li.cards_content").click(function() { 
    //     if ($(this).children(".checkbox").is(":checked")) {
    //         $(this).removeClass("checked_label");
    //         $(this).children(".checkbox").attr("checked",false);
    //     } else {
    //         $(this).children(".checkbox").attr("checked",true);
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

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

});