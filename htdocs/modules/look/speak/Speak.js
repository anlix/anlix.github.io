define('/Speak', function (require, module, exports) {
    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KISP = require('KISP');
    var view = KISP.create('View', '#div-view-speak')

    view.on('init', function () {

    });
    view.on('render', function () {
        view.show();
    });
    return view.wrap();
});