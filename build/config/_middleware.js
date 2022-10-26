"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    app.use((req, res, next) => {
        console.log(`URL: ${req.url} METHOD: ${req.method}`);
        next();
    });
    return;
};
