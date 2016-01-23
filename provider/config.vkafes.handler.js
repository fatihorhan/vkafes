(function() {
    'use strict';

    angular
        .module('vkafes')
        .config(jsErrorHandlerConfig);

    /* @ngInject */
    function jsErrorHandlerConfig(jsErrorHandlerProvider) {
        jsErrorHandlerProvider.config.api_url = "/handle_error";
        jsErrorHandlerProvider.config.ask_comment = true;
    }
})();