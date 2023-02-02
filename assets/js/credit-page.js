
$(document).ready(function () {
    // Card Multi         
    // $(".checkbox_label").click(function(){
    //     $(".checkbox_label").removeClass("checked_label")
    //     if ($('input[name=check]:checked').length > 0) {
    //         $(this).addClass("checked_label");
    //     }
    // }); 
    
    $(".select_debit_card .cards .cards_content").click(function() { 
        if ($(this).children(".checkbox").is(":checked")) {
            $(this).removeClass("checked_label");
            $(this).children(".checkbox").attr("checked",false);
        } else {
            $(this).children(".checkbox").attr("checked",true);
            $(this).addClass("checked_label");
        }
    });

    $(".international_usage_block .international_usage .switch .checkbox_switch").click(function(){
        if ($(this).is(":checked")) {
            $(this).attr("checked",true);
            console.log("false");
        } else {
            $(this).attr("checked",false);
            console.log("true");
        }
    });

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })
});