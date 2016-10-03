var get = require('./get');

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
    }
};
