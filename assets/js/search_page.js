$(document).ready(function(){
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
        $('.searchVoice').css('display', 'none');
        $('.searchClear').css('display', 'flex');
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
})