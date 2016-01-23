(function() {
    'use strict';

    angular
        .module('vkafes')
        .config(jsErrorHandlerConfig);

    /* @ngInject */
    function jsErrorHandlerConfig(jsErrorHandlerProvider) {
        console.log("dasd");
    }
})();