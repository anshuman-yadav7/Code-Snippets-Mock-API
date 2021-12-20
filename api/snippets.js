const snippets = [
    {
        "id": 1,
        "type": "get",
        "snippet": `
        router.use((req, res, next) => {
            if (!req.user || !req.user.isAdmin) {
             res.status(401).json({ error: 'Unauthorized' });
             return;
            }

            next();
        });`
    },
    {
        "id": 2,
        "type": "post",
        "snippet": `
        router.post('/books/add', async (req, res) => {
            try {
                const book = await Book.add(Object.assign({ userId: req.user.id }, req.body));
                res.json(book);
            } catch (err) {
                logger.error(err);
                res.json({ error: err.message || err.toString() });
            }
        });`
    },
    {
        "id": 3,
        "type": "get",
        "snippet": `
        router.get('/books', async (req, res) => {
            try {
             const books = await Book.list();
             res.json(books);
            } catch (err) {
             res.json({ error: err.message || err.toString() });
            }
        });`
    },
    {
        "id": 4,
        "type": "fromNode",
        "snippet": `
        // Start listening
        Promise.fromNode(cb => {
            api.listen(config.LANDO_API_PORT, cb);
        })
        // Load our routes
            .then(() => {
            fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
            require("./routes/file")(api, handler, {config, slack});
            log.info('Loaded route %s', file);
            });
            log.info('Listening on port: %s', config.LANDO_API_PORT);
        });`
    },
    {
        "id": 5,
        "type": "post",
        "snippet": `
        router.post('/torrents/delete', (req, res) => {
            const {deleteData, hash: hashes} = req.body;
            const callback = ajaxUtil.getResponseFn(res);
           
            req.services.clientGatewayService
             .removeTorrents({hashes, deleteData})
             .then(callback)
             .catch(err => {
              callback(null, err);
             });
        });;`
    },
    {
        "id": 6,
        "type": "app.use",
        "snippet": `
        app.use(serveStatic(path.join(__dirname, '../playground'), {
            lastModified: false,
            etag: false,
            setHeaders: (res, url) => {
             if (url.indexOf('/index.html') !== -1) {
              res.setHeader('Cache-Control', 'no-cache');
             }
            }
        }));`
    },
    {
        "id": 7,
        "type": "get",
        "snippet": `
        // Rooms
        router.get('/rooms', [User.isAuthenticated, function(req, res, next) {
            Room.find(function(err, rooms){
                if(err) throw err;
                res.render('rooms', { rooms });
            });
        }]);`
    },
    {
        "id": 8,
        "type": "fromNode",
        "snippet": `
        // Main logix
        Promise.fromNode(cb => {
            api.listen(config.LANDO_METRICS_PORT, cb);
            })
            .then(() => {
            log.info('Listening on port: %s', config.LANDO_METRICS_PORT);
        });`
    },
    {
        "id": 9,
        "type": "get",
        "snippet": `
        router.get('/books/detail/:slug', async (req, res) => {
            try {
             const book = await Book.getBySlug({ slug: req.params.slug });
             res.json(book);
            } catch (err) {
             res.json({ error: err.message || err.toString() });
            }
        });`
    },
    {
        "id": 10,
        "type": "get",
        "snippet": `
        // Basic HTTP response
        app.get('/', (req, res) => {
            res.header('Content-type', 'text/html');
            return res.end('<h1>DANCING DANCING STARLIGHT</h1>');
        });`
    }
]

module.exports = {
    snippets
}