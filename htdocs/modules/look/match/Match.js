define('/Match', function (require, module, exports) {
    var $ = require('$');
    var KISP = require('KISP');
    var MiniQuery = require('MiniQuery');
    var view = KISP.create('View', '#div-view-match')

    view.on('init',function(){

    });
    view.on('render', function () {
        view.show();
    });
    return view.wrap();
});