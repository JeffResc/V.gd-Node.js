# V.gd
[http://v.gd](http://v.gd) URL Shortener Node.js Module

Example Shorten:

First run ```npm install vgd``` to install the v.gd package to your system.

```javascript
var vgd = require('vgd');

vgd.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://v.gd/ddwyMm
});
```