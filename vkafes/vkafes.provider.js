(function() {
    'use strict';

    angular
        .module('app')
        .provider('vkafes', vkafesProvider);

    /* @ngInject */
    function vkafesProvider() {
       
        // Service
        this.$get = function() {
            return {
                ""
            };
        };
    }
})();

