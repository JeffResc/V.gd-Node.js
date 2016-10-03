var vgd = require('./');

vgd.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://v.gd/ddwyMm
});

vgd.custom('http://google.com', 'MyGoogleShortcut', function(res) {
	console.log(res); // If the custom URL of MyGoogleShortcut is actually available, it should return http://v.gd/MyGoogleShortcut
});

vgd.lookup('http://v.gd/ddwyMm', function(res) {
	console.log(res); //Returns a longer version of http://v.gd/ddwyMm - http://google.com
});
