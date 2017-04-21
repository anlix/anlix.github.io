
; (function (KISP) {

    //业务端模块的默认配置
    KISP.data({


    });


    // KISP 内部模块所需要的默认配置
    KISP.config({
        'API': {
            url: 'http://mob.cmcloud.cn/ServerCloud/vCRM/',
            ext: '',
        },
        'LocalStorage': {
            name: 'mall-36C4C118',
        },
        'SessionStorage': {
            name: 'mall-36C4C118',
        },
        'App': {
            animated: false,
        },
        'App/Nav': {
            /**
            * 以异步方式加载到的 html 要附加到的容器。
            * 仅针对独立打包的情况。
            */
            container: 'body>center',
        },
        'View': {
           //background: 'red',
        },
        'Proxy': {
            base: 'api/',
        },
        'SSH': {
            console: true,
        },
        'SSH.API': {
            //prefix: 'APP004052.uequery.UESmsServiceController.',
            prefix: 'kis.APP002293.uesale.UESaleController.',
            netid: -1,
        },
    });

    //针对测试环境
    /**weber.test.begin*/

    KISP.config({
        'SSH/Server/Config': {
            //host: 'http://kd.cmcloud.cn:8080', //测试环境专用。 发布到正式环境前记得去掉。
        },
    });

    /**weber.test.end*/


    //针对开发环境
    /**weber.debug.begin*/

    KISP.data({
        'SSH.API': {
        },
    });

    KISP.config({
        'SSH': {
            console: true,
        },

        'SSH.API': {
            eid: '4016572',
            //eid: '2467638',
            //openid: 'oTUmtt7mMqfkO2uKjkPca0Eo_CuY'
            openid: 'oTUmtt11tftJrnnuBs5cBWkFDSDc'
        },

        'Proxy': {
            delay: {
                min: 500,
                max: 1500
            },
        },
    });

    //开发阶段，把 define 变成全局变量
    window.define = KISP.require('Module').define;

    //window.onerror = function (msg, a, b) {
    //    alert([msg, a, b].join(', '));
    //};


    var alert = window.alert;
    window.alert = function () {
        var $ = KISP.require('$');
        var args = [].slice.call(arguments, 0);
        args = $.Array.keep(args, function (item, index) {
            if (typeof item == 'object') {
                return JSON.stringify(item, null, 4);
            }
            return String(item);
        });

        alert(args.join(', '));

    };

    KISP.data('build-time', '会自动更新');

    /**weber.debug.end*/



})(KISP);


