define('/Teach', function (require, module, exports) {
    var KISP = require('KISP');
    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var view = KISP.create('View','#div-view-teach')

    view.on('init', function () {

    });
    view.on('render', function () {
        view.show();
    });
    return view.wrap();
});