(function() {
    'use strict';

    angular
        .module('app')
        .config(vkafesConfig);

    /* @ngInject */
    function vkafesConfig(vkafesProvider) {
        console.log("dasd");
    }
})();