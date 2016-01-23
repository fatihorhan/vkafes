(function() {
    'use strict';

    angular
        .module('vkafes',[])
        .provider('jsErrorHandler', jsErrorHandlerProvider);

    /* @ngInject */
    function jsErrorHandlerProvider() {
		var me = this;
		
		me.raise = function(ex, scope, ask_comment){	
			me.exceptionData.exception = {message: ex.message, stack:ex.stack};
			me.exceptionData.location = window.location.toString();
			me.exceptionData.user_agent = window.navigator.userAgent;
			me.exceptionData.scope = {};
			if(ask_comment == null)
				ask_comment = me.config.ask_comment;
			if(ask_comment==true)
				me.exceptionData.user_comment = prompt("Hata oluştu ve gönderilecek. Eklemek istedğiniz notunuz var mı?");
			console.log(me.exceptionData);
			console.log(scope);
			for(var a in scope){
				if(a.toString().substring(0,1)!="$")
					me.exceptionData.scope[a] = JSON.stringify(scope[a]);
			}
			
			me.config.http.post(me.config.api_url, JSON.stringify(me.exceptionData));
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
			location: null,
			user_agent:null,
            scope: null,
			user_comment: null,
        };
		
		me.config = {
			api_url: null,
			ask_comment: true,
			http:null,
		};
		        
        // Service
        this.$get = function($http) {
			me.config.http = $http;
            return me;
        };
    }
})();

