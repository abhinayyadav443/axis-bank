$(document).ready(function(){
    $(".survey_page .checkbox").click(function(){
        var group = "input:checkbox[name='"+$(this).attr("name")+"']";
        $(group).attr("checked",false);
        $(this).attr("checked",true);
    });   

    var limit = 2;
    $('.survey_page .checkbox').on('change', function(evt) {
        if($(this).parents(".answer").siblings().find(".checkbox:checked").length >= limit) {
            this.checked = false;
            console.log("false")
        } else {
            console.log("true")
        }
    });

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

     //thnk you page
     $(".survey_page .enter_details").click(function(){
        $(".debit_content").fadeOut(300);
        $(".debit_content_4").show();
    })
})