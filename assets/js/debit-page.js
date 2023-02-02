
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
        // alert("clicked")
        if ($(this).children(".checkbox").is(":checked")) {
            $(this).removeClass("checked_label");
            $(this).children(".checkbox").attr("checked",false);
        } else {
            $(this).children(".checkbox").attr("checked",true);
            $(this).addClass("checked_label");
        }
    });

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    });

});