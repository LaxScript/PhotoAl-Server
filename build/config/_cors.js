"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origun', 'http://localhost:5173');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, token');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
    });
    return;
};
