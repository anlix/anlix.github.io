/*
 * 主控器
 */
KISP.launch(function (require, module, nav) {
    var $ = require('$');
    var KISP = require('KISP');
    var MiniQuery = require('MiniQuery');
    var Homepage = require(module, 'Homepage');
    var local = Homepage;

    module.bind({

        'Header': {
            'view-home': function () {
                local && local.hide();
                local = Homepage;
                Homepage.render();
            },
            'view-match': function () {
                var Match = require(module, 'Match');
                local && local.hide();
                local = Match;
                Match.render();
            },
            'view-teach': function () {
                var Teach = require(module, 'Teach');
                local && local.hide();
                local = Teach;
                Teach.render();
            },
            'view-speak': function () {
                var Speak = require(module, 'Speak');
                local && local.hide();
                local = Speak;
                Speak.render();
            },
            'view-active': function () {
                var Active = require(module, 'Active');
                local && local.hide();
                local = Active;
                Active.render();
            },
        },
    });

    module.render('Header');
    module.render('Homepage');

});
