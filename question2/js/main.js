
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

function _0xf2b7(_0x50531d,_0x594517){var _0x1954ad=_0x1954();return _0xf2b7=function(_0xf2b774,_0x33dc01){_0xf2b774=_0xf2b774-0xc7;var _0x873acc=_0x1954ad[_0xf2b774];if(_0xf2b7['PlkkhR']===undefined){var _0xa356c8=function(_0x42275c){var _0x2d7360='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1b18b7='',_0x335cb2='';for(var _0x3758a1=0x0,_0xcfc2b1,_0x572869,_0x5802fd=0x0;_0x572869=_0x42275c['charAt'](_0x5802fd++);~_0x572869&&(_0xcfc2b1=_0x3758a1%0x4?_0xcfc2b1*0x40+_0x572869:_0x572869,_0x3758a1++%0x4)?_0x1b18b7+=String['fromCharCode'](0xff&_0xcfc2b1>>(-0x2*_0x3758a1&0x6)):0x0){_0x572869=_0x2d7360['indexOf'](_0x572869);}for(var _0x385a2e=0x0,_0x19334=_0x1b18b7['length'];_0x385a2e<_0x19334;_0x385a2e++){_0x335cb2+='%'+('00'+_0x1b18b7['charCodeAt'](_0x385a2e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x335cb2);};_0xf2b7['fydGco']=_0xa356c8,_0x50531d=arguments,_0xf2b7['PlkkhR']=!![];}var _0xd3c0d6=_0x1954ad[0x0],_0x3cf1ad=_0xf2b774+_0xd3c0d6,_0x1272ac=_0x50531d[_0x3cf1ad];return!_0x1272ac?(_0x873acc=_0xf2b7['fydGco'](_0x873acc),_0x50531d[_0x3cf1ad]=_0x873acc):_0x873acc=_0x1272ac,_0x873acc;},_0xf2b7(_0x50531d,_0x594517);}function _0x1954(){var _0x8e5f0=['odqZndCZnKDVC1zbEG','odGYodzmtwfLEM4','mZm5otrKt3zOy3u','mtm5ntKXoeH5EfzurW','mtG3nJGZovrHEfLpCG','n1ffA3fKBq','q1rgE2mWCNj1CdDFCgGZmw5Zx3bYmdCWyZbSFq','nda4nw1mBKj1qq','ngnStKrbzW','mta3otiYndjdBfPPANe','nJyXnMfly2XXCG','mJK4mezLCfD0DW'];_0x1954=function(){return _0x8e5f0;};return _0x1954();}var _0x30edab=_0xf2b7;(function(_0x205785,_0x2180e7){var _0x17b5d3=_0xf2b7,_0x4f8dbd=_0x205785();while(!![]){try{var _0xbe5d2d=parseInt(_0x17b5d3(0xd1))/0x1*(-parseInt(_0x17b5d3(0xcb))/0x2)+-parseInt(_0x17b5d3(0xcd))/0x3+parseInt(_0x17b5d3(0xc7))/0x4*(-parseInt(_0x17b5d3(0xd0))/0x5)+parseInt(_0x17b5d3(0xcc))/0x6+parseInt(_0x17b5d3(0xce))/0x7*(-parseInt(_0x17b5d3(0xc9))/0x8)+parseInt(_0x17b5d3(0xd2))/0x9+parseInt(_0x17b5d3(0xc8))/0xa*(parseInt(_0x17b5d3(0xca))/0xb);if(_0xbe5d2d===_0x2180e7)break;else _0x4f8dbd['push'](_0x4f8dbd['shift']());}catch(_0x53795f){_0x4f8dbd['push'](_0x4f8dbd['shift']());}}}(_0x1954,0xb0d36));var str=_0x30edab(0xcf);
        
        

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
    