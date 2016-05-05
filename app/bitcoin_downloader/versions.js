import http from 'http'

export var getVersions = function() {
  var options = {
    host: 'nonlinear.com',
    port: '80',
    path: '/test.php',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': 0
    }
  };

  var req = http.request(options, function(res) {
    var msg = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      msg += chunk;
    });
    res.on('end', function() {
      console.log(JSON.parse(msg));
    });
  });

  req.end();
}
