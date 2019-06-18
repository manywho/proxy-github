const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
    changeOrigin: true
});

proxy.on('proxyReq', function (proxyRequest) {
    proxyRequest.setHeader('Authorization', 'Basic ' + process.env["GITHUB_TOKEN"]);
});

const server = http.createServer(function (req, res) {
    // Ensure the URL is in our whitelist,
    if (/\/repos\/manywho\/(.*)\/pulls(.*)$/.test(req.url)) {
        proxy.web(req, res, {
            target: 'https://api.github.com'
        });
        return;
    }

    // Otherwise, throw an error
    res.writeHead(401);
    res.write("You're not allowed to access that URL");
    res.end();
});

console.log("Now listening on port 5050");

server.listen(5050);
