# vkafes
Javascript hatalarını yakalayıp kafese koyar.

Browserda oluşan javascript hatalarını yakalayıp serverda loglanmasına yardımcı olur.

Oluşan hatanın exception, scope değişkenleri ve URL'ini paketleyip istenen HTTP API'ye POST eder.

İleriki Hedefler
================
- Server'da .NET, nodejs ve rails'da API hazırlanması ve oluşan hataların görüntülemesi için panel.
- Hatalara öncelik verilmesi ve çözülüp çözülmediğinin takibi.

Kullanımı
=========
git clone https://github.com/fatihorhan/vkafes.git
cd vkafes
node api/node/api.js

http://localhost:4444/todo.html adresinden angular örnek projesini görün.
http://localhost:4444/pure.html adresinden saf javascript örnek projesini görün.

Gereksinimler
==============
Node.js