var get = require('./get');
var uu = require('url-unshort')();

module.exports = {
    shorten: function(url, cb) {
        get('https://v.gd/create.php?format=simple&url=' + encodeURIComponent(url), function (body) {
            cb(body.split("\n")[0]);
        });
    },
    custom: function(url, text, cb) {
      	get('https://v.gd/create.php?format=simple&url=' + encodeURIComponent(url) + '&shorturl=' + encodeURIComponent(text), function (body) {
        		cb(body.split("\n")[0]);
      	});
    },
    lookup: function(url, cb) {
        get('https://v.gd/forward.php?format=simple&shorturl=' + encodeURIComponent(url), function (body) {
        		cb(body.split("\n")[0]);
        });
    },
    resolve: function (url, cb) {
        uu.expand(url)
            .then(function (url) {
                if (url) cb(null, url);
                // no shortening service or an unknown one is used
                else cb('This url can\'t be expanded', null);
            })
            .catch(function (err) { cb(err, null); });
    }
};
