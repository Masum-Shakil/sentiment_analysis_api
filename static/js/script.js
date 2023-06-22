document.getElementById('loadingIndicator').style.display = 'none';

$(document).ready(function() {
    
    $('#sentiment-form').submit(function(event) {
        event.preventDefault();
        var text = $('#text-input').val();
        
        $.ajax({
            type: 'POST',
            url: sentimentAnalysisUrl,
            data: JSON.stringify({'text': text}),
            contentType: 'application/json',
            
            beforeSend: function() {
                $('#loadingIndicator').show();
            },
            
            success: function(data) {

                if (data.sentiment == 'POSITIVE'){
                    $('#result').html(`<div class="alert alert-success" role="alert">The inputted text sentiment is: ${data.sentiment}</div>`);
                } else if (data.sentiment == 'NEGATIVE') {
                    $('#result').html(`<div class="alert alert-warning" role="alert">The inputted text sentiment is: ${data.sentiment}</div>`);
                } else {
                    $('#result').html(`<div class="alert alert-primary" role="alert">The inputted text sentiment is: ${data.sentiment}</div>`);
                }

                $('#loadingIndicator').hide();
            },

            error: function(xhr, status, error) {
                $('#result').html(`<div class="alert alert-danger" role="alert">Something is wrong</div>`);
                $('#loadingIndicator').hide();
              }
        });
    });
});