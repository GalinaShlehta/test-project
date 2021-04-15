

/* === Arrow Color === */

const email = document.querySelector("#input-text");
const arrow = document.querySelector("#arrow-icon");


email.addEventListener("click", function () {
    arrow.classList.add('blue');
});

document.addEventListener("click", function (event) {
    if (event.target.closest("input")) return
    arrow.classList.remove('blue');
});



/* === Input Validation === */

$(function () {

    $("#error_1").hide();
    $("#error_2").hide();
    $("#error_3").hide();
    $("#error_4").hide();


    var error_1 = false;
    var error_2 = false;
    var error_3 = false;
    var error_4 = false;
    
    $("#input-text").focusout(function () {
        check_email_1();
        check_email_2();
        check_email_3();
        check_email_4();
    });

    $("#checkbox").focusout(function () {
        check_email_1();
        check_email_2();
        check_email_3();
        check_email_4();
    });



    function check_email_1() {

        var email_length = $("#input-text").val().length;
        var btn = document.querySelector("#btn")

        if (email_length < 1) {
            btn.classList.add('hide');
            $("#error_3").show();
            error_3 = true;
        } else {
            btn.classList.remove('hide');
            $("#error_3").hide();
            
        }
    }


    function check_email_2() {

        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var email_length = $("#input-text").val().length;
        var btn = document.querySelector("#btn")

        if (email_length < 1) {
            $("#error_1").hide();
        } else if (pattern.test($("#input-text").val())) {
            $("#error_1").hide();
        } else {
            btn.classList.add('hide');
            $("#error_1").show();
            error_1 = true;
        }
        
    }
    

    function check_email_3() {

        var pattern_2 = /^[^ ]+@[^ ]+\.[c]+[o]$/;
        var btn = document.querySelector("#btn")

        if (pattern_2.test($("#input-text").val())) {
            btn.classList.add('hide');
            $("#error_4").show();
            error_4 = true;
        } else {
            $("#error_4").hide();
        }
        
    }


    function check_email_4() {

        var btn = document.querySelector("#btn")

        if ($("input:checkbox").filter(":checked").length < 1) {
            btn.classList.add('hide');
            $("#error_2").show();
            error_2 = true;
        } else {
            $("#error_2").hide();
        }
        
    }


    $("#form").submit(function () {

        error_1 = false;
        error_2 = false;
        error_3 = false;
        error_4 = false;

        check_email_1();
        check_email_2();
        check_email_3();
        check_email_4();

        if (error_1 == false && error_2 == false && error_3 == false && error_4 == false) {
            return true;
        } else {
            return false;
        }

    });
    
});







