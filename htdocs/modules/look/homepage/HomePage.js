define('/Homepage', function (require, module, exports) {
    var $ = require('$');
    var KISP = require('KISP');
    var MiniQuery = require('MiniQuery');
    var view = KISP.create('View', '#div-view-home')

    view.on('init',function(){
        view.$.delegate('[data-cmd="bootstrap"]',{
            'click': function(){
                window.open('../htdocs/testboots.html');
            }
        });

         view.$.delegate('[data-cmd="submit"]',{
            'click': function(){
              console.log('测试');
            }
        });

    });

    
    view.on('hide',function(){

    });
    view.on('render',function(){
        // view.show();
    });
     return view.wrap();
});