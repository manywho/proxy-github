var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  secure: true
});

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
//
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('Authorization', 'Basic ' + process.env["GITHUB_TOKEN"]);
});

var server = http.createServer(function(req, res) {
  console.log(req.url);

  if (/\/repos\/manywho\/(.*)\/pulls(.*)$/.test(req.url)) {
    proxy.web(req, res, {
      target: 'https://api.github.com'
    });
  } else {
    res.writeHead(401);
    res.write("You're not allowed to access that URL");
    res.end();
  }
});

console.log("listening on port 5050");

server.listen(5050);
