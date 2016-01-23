# vkafes
Javascript hatalarını yakalayıp kafese koyar.

Browserda oluşan javascript hatalarını yakalayıp serverda loglanmasına yardımcı olur.

Oluşan hatanın exception, scope değişkenleri ve URL'ini paketleyip istenen HTTP API'ye POST eder.

Kurulumu
=========
```
git clone https://github.com/fatihorhan/vkafes.git
cd vkafes
node api/node/api.js
````

- http://localhost:4444/todo.html adresinden angular örnek projesini görün.
- http://localhost:4444/pure.html adresinden saf javascript örnek projesini görün.

Gereksinimler
==============
- Node.js

Hataları saklayıp gönderilmesi (saf javascript)
=============
HTML'inize error_handler.js'i include edin:
	`<script type="text/javascript" src="pure/error_handler.js"></script>
API url'ini belirtin:
```
<script>
	VKafes.config.api_url = "/saveerror";
</script>
```

Hatayı yakaladınız yerde gönderilmesi için vkafes'e verin:
```
function buttonClick(){
	try{
		hata_uret();
	}catch(e){
		VKafes.raise(e);
	}
}
```

Hataları saklayıp gönderilmesi (angularjs)
HTML'inize error_handler.js'i include edin:
`<script src="provider/vkafes.provider.js"></script>
`<script src="provider/config.vkafes.handler.js"></script>

Uygulama modülünüze dependency olarak ekleyin:
`angular.module('todoApp', ['vkafes'])

Hata yakalamak istediğiniz controller'da jsErrorHandler provider'ını dependency olarak ekleyin:
`angular.module('todoApp', ['vkafes'])
`.controller('TodoListController', function(jsErrorHandler, $scope, $http) {

Hatayı yakaladınız yerde gönderilmesi için vkafes'e verin:
```
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
	  try{
	  	x();
	} catch(e){
		jsErrorHandler.raise(e, $scope, false);
	}
	  todoList.todoText = '';
    };
```

Hataların Görüntülenmesi
=========================
Gönderilecek olan hata aşağıdaki gibidir:
![log örneği](vkafes/logdata.png?raw=true)

Hataları HTTP JSON API üzerinden aşağıdaki adresten görebilirsiniz:
http://localhost:4444/errors

Hatalar node api/node/api.js komutunu çalıştırdığınız dizindeki errors.db sqlite3 dosyasında.
