$(document).ready(function () {
    if(!('webkitSpeechRecognition' in window)) {
        $('#searchVoice').remove();
    }

    $(".service").attr("data-paths", function () {
        var path = $(this).attr("data-paths");
        for (var i = 1; i <= path; i++) {
            $(this).find("a .icons").append("<span class=path" + i + "></span>");
        }
    })

    var resulttranscript;

    $('.wfh__images .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.latest__announcements .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.my__latest_offer .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        lazyLoad: true,
        animateOut: 'spinOut',
        animateIn: 'spinIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.plan_smart .owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 3
            },
            1150: {
                items: 4
            },
            1366: {
                items: 4
            }
        }
    });
    $('.download_here .owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        stagePadding: 20,
        autoplayHoverPause: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 3
            },
            1024: {
                items: 4
            }

        }
    });


    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".Articles_for .Articles-carousel");
        console.log(owlPost, checkWidth)
        if (checkWidth <= 767) {
            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
              }
          owlPost.removeClass('owl-carousel');
        } else if (checkWidth > 768) {
          owlPost.addClass('owl-carousel');
          owlPost.owlCarousel({
            loop: false,
            margin:18,
            nav: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            autoplay: false,
            autoplayTimeout: 3000,
            stagePadding:10,
            responsive: {
                767: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 3
                }
    
            }
          });
        }
      }
      postsCarousel();
      $(window).resize(()=> {
        postsCarousel()
      });	

    $('.serviceDropdown .owl-carousel').owlCarousel({
        loop:false,
        margin: 10,
        nav:true,
        dots:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        lazyLoad: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            990:{

                items:7
            }
        }
    })

    $('.select2_dropdown').select2({
        placeholder: "Select product",
        minimumResultsForSearch: Infinity
    });

    var query1 = '';
	$('.sub_dropdown_menu').click(function() {
		 query1 = $(this).find('.select2');
	})
	$('.query_step').addClass('show');

    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //modal start

    
    $(".modal_tab").click(function () {
        $(".raise_complaint_modal").show();
        $('body').addClass('modal-open');
    })

    $(".nodal_modal_tab").click(function () {
        $(".nodal_officer_modal").show();
        $('body').addClass('modal-open');
    })
    
    $(".principal_nodal_modal_tab").click(function () {
        $(".principal_nodal_officer_modal").show();
        $('body').addClass('modal-open');
    })
    $(".chat_agent").click(function () {
        $(".chat_agent_modal").show();
        $('body').addClass('modal-open');
    })
    $(".speak_us").click(function () {
        $(".speak_us_modal").show();
        $('body').addClass('modal-open');
    })
    $("#speak").click(function(){
        $(".contact_modal").show();
        $('body').addClass('modal-open');
    })
    $(".connect_email").click(function () {
        $(".connect_email_modal").show();
        $('body').addClass('modal-open');
    })

    $(".modal_container").click(function(){
        $(this).hide();
        $(".select2_dropdown").val('').trigger('change');
    })
    $(".raise_complaint_modal").click(function(){
        $(this).show();
    })

    $(".modal_content").click(function(e){
        e.stopPropagation(); //stopping propagation here
    })

    $(".close").click(function(){
        $(".modal_container").hide();
        $('body').removeClass('modal-open');
        
    })



    // for query dropdown

    $('.dropdownQueryButton').on('click', function (event) {
        $('#serviceDropdown').removeClass("show");
        $('.queryDropdown').toggleClass("show");
    });
    $(".close_service").click(function(){
        $("#serviceDropdown").removeClass('show');
        $(".queryDropdown").removeClass('show');
        $(".select2_dropdown").val("").trigger('change');
    })

    // submit functionality
    // $(".submit_query_btn").attr('disabled',true);

    $('.submit_query_btn').click(function() {
        $(this).parent().parent().find('.query_section').addClass('show');
        if($('.query_section.show .select2').find('.select2-selection.select2-selection--single .select2-selection__rendered .select2-selection__placeholder').length > 0) {
            $(".submit_query_btn").addClass('disable');
            $(".submit_query_btn").removeClass('enables');
        } else {
            $(".submit_query_btn").removeClass('disable');
            $(".submit_query_btn").addClass('enables');
        }
    });
    
    // for service dropdown

$('.dropdownServiceButton').on('click', function (event) {
    $('.queryDropdown').removeClass("show");
    $('.serviceDropdown').toggleClass("show");
    
    if ($(window).width() < 576){
    $('.web_sub_services').remove();
    }
    else {
    $('.mob_sub_services').remove();
    }
    });
    
    $('[data-toggle="collapse"]').on('mouseenter', function() {
    $(this).parents('.items').find('.collapse').collapse('show');
    });
    
    $('.services_card').on('click', function (event) {
    $('.services_card').removeClass('show');
    $('.collapse').removeClass('show');
    $('.sub_services_card').find('.collapse').removeClass('show');
    $(this).toggleClass("show");
    var pos = $('.services_card.show').offset();
    // $('.sub_services').css('paddingLeft', pos.left);
    // $('.sub_services.show::before').css('left', pos.left+50);
    });
    
    $('.serviceDropdown .owl-nav').on('click', function (event) {
    $('.services_card').removeClass('show');
    $('.collapse').removeClass('show');
    $('.sub_services_card').find('.collapse').removeClass('show');
    $('.web_sub_services').find('.sub_services').removeClass('show');
    });
    
    // for service dropdown ends

    /*voice search*/
    $('.searchVoice').on('click', function() {

		if('webkitSpeechRecognition' in window) {
			var speechRecognizer = new webkitSpeechRecognition();
			speechRecognizer.continuous = true;
			speechRecognizer.interimResults = true;
			speechRecognizer.lang = 'en-US';
			speechRecognizer.start();

			var finalTranscripts = '';

			speechRecognizer.onresult = function(event) {
				var interimTranscripts = '';
				for(var i = event.resultIndex; i < event.results.length; i++){
					var transcript = event.results[i][0].transcript;
					transcript.replace("\n", "<br>");
					if(event.results[i].isFinal) {
						finalTranscripts += transcript;
					}else{
						interimTranscripts += transcript;
					}
				}
				$('.result').val(finalTranscripts);
                $('.result').attr('value', finalTranscripts)
                resulttranscript = finalTranscripts;
                var value = $('.result').val().toLowerCase();
                if (resulttranscript.length>=3) {
                    speechRecognizer.stop();
                    $(".search_val .search_val_item").filter(function() {
                        $(".result_container").show();
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                } else {
                    $(".result_container").hide();
                }
                
			};
			speechRecognizer.onerror = function (event) {

			};
		}
    });

    $('.result').on('input', function(){
		if($(this).val === "") {
			$('.searchVoice').css('display', 'flex');
			$('.searchClear').css('display', 'none');
		} else {
			$('.searchVoice').css('display', 'none');
			$('.searchClear').css('display', 'flex');
		}
    });

    $('.searchClear').on('click', function(){
        $('.result').val('');
        $('.searchVoice').css('display', 'flex');
        $('.searchClear').css('display', 'none');
    });

    //filter functionality
    $(".result").on("input", function() {
        var value = $(this).val().toLowerCase();
        if (value.length>=3) {
            $(".search_val .search_val_item").filter(function() {
                $(".result_container").show();
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        } else {
            $(".result_container").hide();
        }
    });

    $(document).mouseup(function(e){
        if(!$('.result_container').is(e.target)){
            $('.result_container').hide();
        }
    });

    $('.select2').on('mouseenter', function() {
        var count = $(this).parent().find('select').find('option').length;
        if(count <= 1) {
            $(this).find('.select2-selection').addClass("disable");
        } else {
            $(this).find('.select2-selection').removeClass("disable");
        }
    });
    
    $(".searchClear").click(function(){
        $(".result_container").hide();
    });

    // voice search ends here
    var dropdownPos = $('.header_container').height(); 
    $('.dropdown-menu').css('top', dropdownPos-2);
    $(window).resize(function () {
        var dropdownPos = $('.header_container').height(); 
        $('.dropdown-menu').css('top', dropdownPos-2);
    });

    //search icon
    $('.icon-input .search_icon').click(function(){ 
        $(this).attr('href','search_page.html');
    });

    //zoom functionality
    $(function() {
        $('.big').on('click', function() {
            $('html').css('font-size',"18px");  
            $(".queries-resolved p").addClass("queries_big"); 
            $(".queries-resolved p").removeClass("queries_small") 
        });
        $('.normal').on('click', function() {
            $('html').css('font-size',"16px");
            $(".queries-resolved p").removeClass("queries_big"); 
            $(".queries-resolved p").removeClass("queries_small") 
        });
        
        $('.f-small').on('click', function() {
            $('html').css('font-size',"14px");
            $(".queries-resolved p").addClass("queries_small")
            $(".queries-resolved p").removeClass("queries_big"); 
        });
    });

    //dark mode functionality
    $(".contrast1").click(function(){
       var att = $(this).attr("data-theme","dark")

    })

    setInterval(function(){ 
        $( '.button--sonar' ).trigger( "click" );
    }, 5000);
   //select2
   $('.notruncate .select2-selection.select2-selection--single').addClass('wrap');

    // other request page
    //update email
   $(".update_email").click(function(){
    $(".modal_email").show();
    })
    //update address
   $(".update_address").click(function(){
    $(".modal_address").show();
    })
    //update debit
   $(".generate_debit").click(function(){
    $(".modal_debit").show();
    })
    //update credit
   $(".generate_credit").click(function(){
    $(".modal_credit").show();
    })
    //update loan
   $(".loan_repay").click(function(){
    $(".modal_loan").show();
    })

    //other request
    //update email
    $(".internet_banking_btn_open_email").click(function(){
        $(this).attr("href", "https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/"); // Set herf value
        $(this).attr('target','_blank');
    })
    //update address
    $(".internet_banking_btn_open_address").click(function(){
        $(this).attr("href", "https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/"); // Set herf value
        $(this).attr('target','_blank');
    })
    //update debit
    $(".internet_banking_btn_open_debit").click(function(){
        $(this).attr("href", "https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/"); // Set herf value
        $(this).attr('target','_blank');
    })
    // update credit
    $(".internet_banking_btn_open_credit").click(function(){
        $(this).attr("href", "https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/"); // Set herf value
        $(this).attr('target','_blank');
    })
    // update loan
    $(".internet_banking_btn_open_loan").click(function(){
        $(this).attr("href", "https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/"); // Set herf value
        $(this).attr('target','_blank');
    })

    //loader
    function loader() {
        $('body').addClass('loader_active');
    }

    $(".internet_banking_btn_close").click(function(){
        $(".credit_modal_2").hide();
    })

    //skip to main content
    $(".skip_content").click(function(){
        window.scrollTo(0, $(".container-fluid").offset().top);
    })

    //reset
    $(".reset").click(function(){
        $(".form-control").val('');
    })

    //common_js
    // Card Multi 
    // $(".checkbox_label").click(function(){
    //     $(".checkbox_label").removeClass("checked_label")
    //     if ($('input[name=check]:checked').length > 0) {
    //         $(this).addClass("checked_label");
    //     }
    // });

    //date picker
    // $('.date_picker_content').datepicker({
    //     orientation: "bottom",
    //     format: 'dd/mm/yyyy',
    // });

    // $(".date_picker_input,.date_image").change(function(){
    //     if ($(this).val()== "") {
    //         $(this).siblings(".datapicker_label").show();
    //     } else {
    //         $(this).siblings(".datapicker_label").hide();
    //     }
    // })

    //common_js ends

    //agri_account_statement
    //modal
    // $(".agri_account_statement_page .debit_content_3 .submit_details").click(function() {
    //     $(".credit_modal").show();
    // })

    // $(".agri_account_statement_page .debit_buttons .download").click(function() {
    //     $(".credit_modal").show();
    // })

    // $(".agri_account_statement_page .credit_modal .close_credit_modal").click(function(){
    //     $(".credit_modal").hide();
    // })
    
    // $(".agri_account_statement_page .credit_modal .credit_modal_content").click(function(e) {
    //     e.stopPropagation();
    // }) 

    // $(".agri_account_statement_page .credit_modal").click(function() {
    //     $(this).hide();
    // })

    // $('.agri_account_statement_page .credit_modal #no_btn').on("click",function(){
    //     $('#carouselAgriAccControls').carousel(4);
    // });
    //agri_account statement js ends

    //apppreciation starts
    // $('.appreciation_page .select_box_container .select_input').select2({
    //     placeholder: "Please Select",
    // });

    // $('.appreciation_page .select_box_container .select_input').on('change', function() {
    //     ($(this).siblings('.debit_label').addClass("active_1"));
    // });
    
    // $(".appreciation_page .no_placeholder").select2({
    //     placeholder: "",
    // });

    // //thnk you page
    // $(".appreciation_page .enter_details").click(function(){
    //     $(".appreciation_page .debit_content").fadeOut(300);
    //     $(".appreciation_page .debit_content_4").show();
    // })
    //apppreciation ends

    //cheque_book_request starts
    // $(".cheque_book_request_page .debit_content_3 .submit_details").click(function() {
    //     $(".cheque_book_request_page .cheque_modal").show();
    // })

    // $(".cheque_book_request_page .credit_btn").click(function() {
    //     $(".cheque_book_request_page .cheque_modal").hide();
    //     $(".cheque_book_request_page .cheque_modal_2").show();
    // })
    
    // $(".cheque_book_request_page .cheque_modal_2 .credit_modal_content").click(function(e) {
    //     e.stopPropagation();
    // }) 
    // $(".cheque_book_request_page .cheque_modal_2").click(function() {
    //     $(this).hide();
    // })
    // $(".cheque_book_request_page .cheque_modal_2 .credit_btn_2").click(function() {
    //     $(".cheque_modal_2").hide();
    // })
    //cheque_book_request ends

    //credit card statement starts
     //modal
    //  $(".credit_card_statement_page .debit_content_3 .submit_details").click(function() {
    //     $(".credit_modal").show();
    // })

    // $(".credit_card_statement_page .download").click(function() {
    //     $(".credit_modal").show();
    // })
    
    // $(".credit_card_statement_page .credit_modal .credit_modal_content").click(function(e) {
    //     e.stopPropagation();
    // }) 

    // $(".credit_card_statement_page .credit_modal").click(function() {
    //     $(this).hide();
    // })

    // $('.credit_card_statement_page .credit_modal #no_btn').on("click",function(){
    //     $('#carouselCreditControls').carousel(4);
    // });

    //credit card statement ends

    //credit_page.js starts
    
    // $(".credit_page .international_usage").click(function(event) {
    //     event.stoppropagation();
    // })
    //credit_page page ends

    //disputed_transaction starts 
    // $(".disputed_transaction_page .btn_yes").click(function(){
    //     $(".feedback_yes").show();
    // })

    //thnk you page
    // $(".disputed_transaction_page .enter_details").click(function(){
    //     $(".debit_content, .feedback").fadeOut(300);
    //     $(".debit_content_4").show();
    // })
    //disputed_transaction ends

    // .grievance_redressal_page js

    //  $('.grievance_redressal_page .select_input').select2({
    //     placeholder: "Please Select A Product",
    // });

    // $('.grievance_redressal_page .select_input').on('change', function() {
    //     ($(this).siblings('.debit_label').addClass("active_1"));
    // });
    
    // $(".grievance_redressal_page .no_placeholder").select2({
    //     placeholder: "",
    // });

     //thnk you page
    //  $(".grievance_redressal_page .enter_details").click(function(){
    //     $(".debit_content").fadeOut(300);
    //     $(".debit_content_4").show();
    // })

    // home_loan_interest_certi_page js

    // $(".home_loan_interest_certi_page .debit_content_3 .submit_details").click(function() {
    //     $(".home_loan_interest_certi_page .credit_modal").show();
    // })

    // $(".home_loan_interest_certi_page .download").click(function() {
    //     $(".home_loan_interest_certi_page .credit_modal").show();
    // })

    // $(".home_loan_interest_certi_page .close_credit_modal").click(function(){
    //     $(".home_loan_interest_certi_page .credit_modal").hide();
    // })

    // $(".home_loan_interest_certi_page .credit_modal .credit_modal_content").click(function(e) {
    //     e.stopPropagation();
    // }) 

    // $(".home_loan_interest_certi_page .credit_modal").click(function() {
    //     $(this).hide();
    // })

    // $('.home_loan_interest_certi_page #no_btn').on("click",function(){
    //     $('.home_loan_interest_certi_page #carouselAgriAccControls').carousel(4);
    // });

    // inner_template_page js

    // $(".inner_template_page .btn_yes").click(function(){
    //     $(".inner_template_page .feedback_yes").show();
    // })

    // not_helpful_page js

    // $(".not_helpful_page .chat_agent").click(function () {
    //     $(".not_helpful_page .chat_agent_modal").show();
    // })
    // $(".not_helpful_page .speak_us").click(function () {
    //     $(".not_helpful_page .speak_us_modal").show();
    // })
    // $(".not_helpful_page #speak").click(function(){
    //     $(".not_helpful_page .contact_modal").show();
    // })
    // $(".not_helpful_page .connect_email").click(function () {
    //     $(".not_helpful_page .connect_email_modal").show();
    // }) 

    //  send email page js

    // $(".send_email_page .enter_details").click(function(){
    //     $(".send_email_page .credit_modal").show();
    // })

    // $(".send_email_page .credit_btn_1").click(function() {
    //     $(".send_email_page .credit_modal").hide();
    //     $(".send_email_page .compose_mail_container").addClass("active_1").show();
    // });

    // var arr = [];
    // $('.send_email_page #upload').fileupload({
    //     change : function (e, data) {
    //         var maxSize = 0;
    //         $(".send_email_page .error").hide();
    //         $.each(data.files, function (index, file) {
    //             maxSize += file.size;
    //             arr.push(file);
    //             if(maxSize > 5000000) {
    //                 $(".send_email_page .file_allowed").show();
    //                 return false;
    //             } else if(arr.length > 5) {
    //                 $(".send_email_page .error").show();
    //                 return false;
    //             } else {
    //                 $(".send_email_page .file_list").append("<li class='send_email_page file-chosen'>"+file.name+" "+"<span class='icon-close upload_icon'></span>"+"  "+"</li> "+" ");
    //             }
    //         });
    //     },
    //     limitMultiFileUploads: 5,
    //     maxNumberOfFiles: 5,
    //     limitMultiFileUploadSize: 5000000,
    //     acceptFileTypes: /(\.|\/)(jpe?g|png|pdf;l)$/i
    // });
    
    // $(".send_email_page .submit").click(function(){
    //     $(".send_email_page .compose_mail_container").hide();
    // })
    
    // $('.send_email_page .file_list').on('click', 'li.send_email_page.file-chosen .upload_icon', function() {
    //     $(this).parent().remove();
    //     arr.pop();
    //     console.log(arr);
    // });

    // survey page Js

    // $(".survey_page .checkbox").click(function(){
    //     var group = "input:checkbox[name='"+$(this).attr("name")+"']";
    //     $(group).attr("checked",false);
    //     $(this).attr("checked",true);
    // });   

    // var limit = 2;
    // $('.survey_page .checkbox').on('change', function(evt) {
    //     if($(this).parents(".answer").siblings().find(".checkbox:checked").length >= limit) {
    //         this.checked = false;
    //         console.log("false")
    //     } else {
    //         console.log("true")
    //     }
    // });
});
