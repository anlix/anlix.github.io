define('/Header', function (require, module, exports) {
    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KISP = require('KISP');
    var panel = KISP.create('Panel', '#div-panel-header');

    panel.on('init', function () {
        panel.$.delegate('[data-cmd="view-home"]', {
            'click': function () {
                panel.fire('view-home');
            }
        });
        panel.$.delegate('[data-cmd="view-match"]', {
            'click': function () {
                panel.fire('view-match');
            }
        });
        panel.$.delegate('[data-cmd="view-teach"]', {
            'click': function () {
                panel.fire('view-teach');
            }
        });
        panel.$.delegate('[data-cmd="view-speak"]', {
            'click': function () {
                panel.fire('view-speak');
            }
        });
        panel.$.delegate('[data-cmd="view-active"]', {
            'click': function () {
                panel.fire('view-active');
            }
        });

    });

    panel.on('hide', function () {});
    panel.on('show', function () {});

    panel.on('render', function () {});

    return panel.wrap();


});