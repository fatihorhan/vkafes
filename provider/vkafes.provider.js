(function() {
    'use strict';

    angular
        .module('vkafes',[])
        .provider('jsErrorHandler', jsErrorHandlerProvider);

    /* @ngInject */
    function jsErrorHandlerProvider() {
		var me = this;
		
		me.raise = function(ex, scope, ask_comment){	
			me.exceptionData.exception = ex;
			me.exceptionData.scope = scope;
			if(ask_comment == null)
				ask_comment = me.config.ask_comment;
			if(ask_comment==true)
				me.exceptionData.user_comment = prompt("Hata oluştu ve gönderilecek. Eklemek istedğiniz notunuz var mı?");
			console.log(me.exceptionData);
		}
		
		me.guard = function(method){
			try{
				method();
			} catch(e){
				me.raise(e);
			}
		}
		
		me.exceptionData = {
            exception: null,
            scope: null,
			user_comment: null
        };
		
		me.config = {
			api_url: null,
			ask_comment: true,
		};
		        
        // Service
        this.$get = function() {
            return me;
        };
    }
})();

