(function() {
    'use strict';

    angular
        .module('vkafes',[])
        .provider('jsErrorHandler', jsErrorHandlerProvider);

    /* @ngInject */
    function jsErrorHandlerProvider() {
		var me = this;
		
		me.raise = function(ex){	
			me.exceptionData.exception = ex;
			console.log(me.exceptionData);
		}
		
		me.exceptionData = {
            exception: null,
            scope: null
        };
		        
        // Service
        this.$get = function() {
            return me;
        };
    }
})();

