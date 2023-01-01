
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function f1(str) {
 
     if(!str || str.length < 2 ||
        typeof str!== 'string') {
    return 'Not valid';
     }

    const revArray = [];
    const length = str.length - 1;

    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    return revArray.join('');
    }


function verify(){
        var pw = document.getElementById("pass").value;
        var un = document.getElementById("user").value;

        var str ="<--" + window.btoa(pw) + "-->"
        

        if(un == "UaViShUnTeR" ){
        if( f1(pw) == "UaViShUnT"){
            window.alert("That is the correct password. Here's the flag")
            window.alert(str);
        }
        }
        else{
            window.alert("Please Enter the correct password");
        }
        
    }
    