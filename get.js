const https = require('https');

module.exports = function(url, cb) {
  https.get(url, function(res) {
    let body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      cb.call(this, body);
    });
  });
};
