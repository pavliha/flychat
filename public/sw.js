importScripts('bower_components/sw-toolbox/sw-toolbox.js'); // Update path to match your own setup

self.toolbox.router.get('/(.*)', function(req, vals, opts) {
    return toolbox.networkFirst(req, vals, opts)
        .catch(function(error) {
            if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
                return toolbox.cacheOnly(new Request('/offline'), vals, opts);
            }
            throw error;
        });
});