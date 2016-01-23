var VKafes = {
		raise: function(ex, ask_comment){	
			console.log(this.config.api_url);
			this.exceptionData.exception = {message: ex.message, stack:ex.stack};
			this.exceptionData.location = window.location.toString();
			this.exceptionData.user_agent = window.navigator.userAgent;
			this.exceptionData.scope = {};
			if(ask_comment == null)
				ask_comment = this.config.ask_comment;
			
			if(ask_comment==true)
				this.exceptionData.user_comment = prompt("Hata oluştu ve gönderilecek. Eklemek istedğiniz notunuz var mı?");
			console.log(this.exceptionData);
			
		    var xhttp = new XMLHttpRequest();
				//Send the proper header information along with the request
	    		xhttp.open("POST", this.config.api_url, false);
				xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
		    	xhttp.send(JSON.stringify(this.exceptionData));
			
			//this.config.http.post(this.config.api_url, JSON.stringify(this.exceptionData));
		},
		
		exceptionData : {
            exception: null,
			location: null,
			user_agent:null,
            scope: null,
			user_comment: null,
        },
		
		config : {
			api_url: null,
			ask_comment: true,
			http:null,
		}
}