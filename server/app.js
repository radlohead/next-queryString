const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
        const realPage = '/post';
        const queryParams = {title: req.params.id};
        app.render(req, res, realPage, queryParams);
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen('3000', (err) => {
        if (err) throw err;
        console.log('react on server 3000 port');
    });
}).catch((e) => {
    console.error(e.stack);
    process.exit(1);
});