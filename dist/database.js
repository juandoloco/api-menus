"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
//import {config} from 'dotenv';
//config();
//si se desarrolla en entorno local activa este bloque de codigo
/*
export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password: 'davitzoL18',
    database: 'menusdb'
});
*/
//external url de render
exports.pool = new pg_1.Pool({
    user: 'davipharmauser',
    host: 'dpg-ckuhmr237rbc738ccnq0-a.oregon-postgres.render.com',
    password: 'K8U4wWiBUMWl1YhRJJ1OLG4CRDHucTjy',
    database: 'pharmadb_lbjg',
    port: 5432,
    ssl: true
});
