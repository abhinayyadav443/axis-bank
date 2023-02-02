$(document).ready(function() {
    $('.appreciation_page .select_input').select2({
        placeholder: "Please Select",
    });

    $('.appreciation_page .select_input').on('change', function() {
        ($(this).siblings('.debit_label').addClass("active_1"));
    });
    
    $(".appreciation_page .no_placeholder").select2({
        placeholder: "",
    });

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

    //thnk you page
    $(".appreciation_page .enter_details").click(function(){
        $(".appreciation_page .debit_content").fadeOut(300);
        $(".appreciation_page .debit_content_4").show();
    })
});