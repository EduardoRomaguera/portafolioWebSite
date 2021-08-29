window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100) {
        var elem = document.getElementById("colorBackground").className = "mainContainer0b";
}
}

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});


