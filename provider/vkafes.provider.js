(function() {
    'use strict';

    angular
        .module('app')
        .provider('vkafes', vkafesProvider);

    /* @ngInject */
    function vkafesProvider() {
      
	  var exceptionData = {
            exception: null,
            scope: null
        };
		        
        // Service
        this.$get = function() {
            return {
                exception: exceptionData.exception,
                scope: exceptionData.scope
            };
        };
    }
})();

