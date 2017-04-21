
// if (typeof jQuery === 'undefined') {
//   throw new Error('Bootstrap\'s JavaScript requires jQuery')
// }

// +function ($) {
//   'use strict';
//   var version = $.fn.jquery.split(' ')[0].split('.')
//   if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
//     throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
//   }
// }(jQuery);


var btn = document.getElementById('testbtn');

 btn.addEventListener("click",function(){

     var SM = new SimpleModal({"btn_ok":"Confirm button"});
        SM.show({
          "model":"confirm",
          "callback": function(){
            alert("Action confirm!");
          },
          "title":"Confirm Modal Title",
          "contents":"Lorem ipsum dolor sit amet..."
        });
        //  $('#mymotal').modal('show');
    });
