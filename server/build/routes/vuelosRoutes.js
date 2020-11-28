"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class VuelosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('vuelosdisponibles'));
    }
}
const vuelosRoutes = new VuelosRoutes();
exports.default = vuelosRoutes.router;
