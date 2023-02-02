$(document).ready(function() {
    $('.grievance_redressal_page .select_input').select2({
        placeholder: "Please Select A Product",
    });

    $('.grievance_redressal_page .select_input').on('change', function() {
        ($(this).siblings('.debit_label').addClass("active_1"));
    });
    
    // $(".no_placeholder").select2({
    //     placeholder: "",
    // });

    //modal
    $(".grievance_redressal_page .clickhere").click(function(){
        $(".grievance_redressal_page .credit_modal").show();
    })
    $(".grievance_redressal_page .credit_modal .credit_modal_content").click(function(e) {
        e.stopPropagation();
    }) 

    $(".credit_modal").click(function() {
        $(this).hide();
    })

    $(".grievance_redressal_page .close_credit_modal").click(function(){
        $(".grievance_redressal_page .credit_modal").hide();
    })

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

     //thnk you page
     $(".grievance_redressal_page .enter_details").click(function(){
        $(".grievance_redressal_page .debit_content").fadeOut(300);
        $(".grievance_redressal_page .debit_content_4").show();
    })

    //select 
    // $('.select_input').select2({
    //     templateResult: function (data) {    
    //       // We only really care if there is an element to pull classes from
    //       if (!data.element) {
    //         return data.text;
    //       }
      
    //       var $element = $(data.element);
      
    //       var $wrapper = $('<span></span>');
    //       $wrapper.addClass($element[0].className);
      
    //       $wrapper.text(data.text);
      
    //       return $wrapper;
    //     }
    //   });
});