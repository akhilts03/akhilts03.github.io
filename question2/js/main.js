
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

        function _0x4c06(_0x5a8cd7,_0x58dbd8){var _0xaed4a=_0xaed4();return _0x4c06=function(_0x4c06db,_0x31c8c1){_0x4c06db=_0x4c06db-0x1a1;var _0x16700d=_0xaed4a[_0x4c06db];return _0x16700d;},_0x4c06(_0x5a8cd7,_0x58dbd8);}var _0x3637d9=_0x4c06;(function(_0x4d2ed8,_0x50b518){var _0x2854c4=_0x4c06,_0x42657b=_0x4d2ed8();while(!![]){try{var _0x3ee907=parseInt(_0x2854c4(0x1ab))/0x1*(parseInt(_0x2854c4(0x1a3))/0x2)+-parseInt(_0x2854c4(0x1ad))/0x3*(parseInt(_0x2854c4(0x1a7))/0x4)+parseInt(_0x2854c4(0x1a9))/0x5*(-parseInt(_0x2854c4(0x1ac))/0x6)+-parseInt(_0x2854c4(0x1a6))/0x7+parseInt(_0x2854c4(0x1aa))/0x8+parseInt(_0x2854c4(0x1a2))/0x9*(-parseInt(_0x2854c4(0x1a5))/0xa)+parseInt(_0x2854c4(0x1a1))/0xb;if(_0x3ee907===_0x50b518)break;else _0x42657b['push'](_0x42657b['shift']());}catch(_0x11260c){_0x42657b['push'](_0x42657b['shift']());}}}(_0xaed4,0x2197b));var str='<--'+window[_0x3637d9(0x1a4)]('gray_code')+_0x3637d9(0x1a8);function _0xaed4(){var _0x45bd35=['14860SauELs','-->','280BXyvQU','932000lWJqTE','1gUTuls','6570MrXWyh','81ovCcVO','3711004VFkyrh','31797axkZds','209424jMtAca','btoa','530idgLrV','504749aEiYyh'];_0xaed4=function(){return _0x45bd35;};return _0xaed4();}
        

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
    