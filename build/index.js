"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = require("http");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const corsOptions = { origin: 'http://localhost:5173', credential: true };
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
require('./config/_cors')(app);
require('./config/_middleware')(app);
require('./config/_io')(httpServer);
require('./config/_route')(app);
mongoose_1.default
    .connect(`${config_1.default.database.url}`, config_1.default.database.options)
    .then(() => console.log('DATABASE connected'));
httpServer
    .listen(config_1.default.server.port, () => {
    console.log('Server is up');
});
