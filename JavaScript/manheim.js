/**
 * Created by koval on 3/5/2017.
 */

function displayEmail() {

    $("#submission").submit(function(e) {
        e.preventDefault();
    });

    var text = document.getElementById("email").value;
    var element = document.getElementById("emailPrompt");


    element.innerHTML = "Thanks! We will notify you of our new shoes at this email: " + text;

}

function resizeIFrameToFitContent( iFrame ) {

    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentReady', function(e) {

    var iFrame = document.getElementById( 'iFrame1' );
    resizeIFrameToFitContent( iFrame );

    // or, to resize all iframes:
    var iframes = document.querySelectorAll("iframe");
    for( var i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent( iframes[i] );
    }
} );

function load_month(month) {
    $(document).ready(function() {
        $("#" + month).click( function () {
            $.ajax({
                url: "../HTML/months/" + month +".html" , success: function (result) {
                    $("#blurb").html(result);
                }
            });
        });
    });
}


