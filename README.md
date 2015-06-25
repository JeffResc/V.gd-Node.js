[![NPM](https://nodei.co/npm/vgd.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/vgd/)

# V.gd
[http://v.gd](http://v.gd) URL Shortener Node.js Module

[![Coverage Status](https://coveralls.io/repos/AlphaT3ch/v.gd/badge.svg)](https://coveralls.io/r/AlphaT3ch/v.gd)
[![Travis CI Status](https://travis-ci.org/AlphaT3ch/v.gd.svg)](https://travis-ci.org/AlphaT3ch/v.gd)

Example Shorten:

First run ```npm install vgd``` to install the v.gd package to your system.

```javascript
var vgd = require('vgd');

vgd.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://v.gd/ddwyMm
});

vgd.lookup('http://v.gd/ddwyMm', function(res) {
	console.log(res); //Returns a longer version of http://v.gd/ddwyMm - http://google.com
});
```

[This Package Is Under The GPL-3.0 License](https://raw.githubusercontent.com/AlphaT3ch/v.gd/master/LICENSE.txt)