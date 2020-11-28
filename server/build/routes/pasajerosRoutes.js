"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PasajerosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Holapasajeros'));
    }
}
const pasajerosRoutes = new PasajerosRoutes();
exports.default = pasajerosRoutes.router;
