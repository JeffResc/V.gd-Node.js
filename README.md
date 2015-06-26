[![NPM](https://nodei.co/npm/vgd.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/vgd/)

# V.gd
[http://v.gd](http://v.gd) URL Shortener Node.js Module

Example Shorten:

First run ```npm install vgd``` to install the v.gd package to your system.

```javascript
var vgd = require('vgd');

vgd.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://v.gd/ddwyMm
});

vgd.custom('http://google.com', 'MyGoogleShortcut', function(res) {
	console.log(res); // If the custom URL of MyGoogleShortcut is actually available, it should return http://v.gd/MyGoogleShortcut
});

vgd.lookup('http://v.gd/ddwyMm', function(res) {
	console.log(res); //Returns a longer version of http://v.gd/ddwyMm - http://google.com
});
```

[This Package Is Under The GPL-3.0 License](https://raw.githubusercontent.com/AlphaT3ch/v.gd/master/LICENSE.txt)
