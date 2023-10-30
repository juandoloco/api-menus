"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = exports.getUserById = exports.updateUser = exports.deleteUser = void 0;
const database_1 = require("../database");
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_persona = parseInt(req.params.id_persona);
    yield database_1.pool.query('DELETE FROM public.personas WHERE id_persona=$1', [id_persona]);
    return res.json({ "Mensaje": `La persona con id_perona =  ${id_persona} fue eliminado` });
    //console.log(req.params.id);
    //res.send('deleting');
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_persona = parseInt(req.params.id_persona);
    const { id_tienda, tipo, nombre, apaterno, amaterno, fechaNac, telefono } = req.body;
    yield database_1.pool.query('UPDATE public.personas SET  id_tienda = $1, tipo = $2, nombre = $3, apaterno = $4, amaterno = $5, "fechaNac" = $6, telefono = $7 WHERE id_persona = $8', [id_tienda, tipo, nombre, apaterno, amaterno, fechaNac, telefono, id_persona]);
    return res.json({ "Mensaje": `La persona con id_perona =  ${id_persona} fue actualizada` });
});
exports.updateUser = updateUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.params.id);
    //res.send('recived');
    const id_persona = parseInt(req.params.id_persona);
    const response = yield database_1.pool.query('SELECT * FROM public.personas WHERE id_persona = $1', [id_persona]);
    return res.json(response.rows);
});
exports.getUserById = getUserById;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM public.personas');
        console.log(response.rows);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ "error": [`NodeJS dice ${e}`] });
    }
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_tienda, tipo, nombre, apaterno, amaterno, fechaNac, telefono } = req.body;
    try {
        const response = yield database_1.pool.query('INSERT INTO public.personas (id_tienda, tipo, nombre, apaterno, amaterno, "fechaNac", telefono) VALUES ($1, $2, $3, $4, $5, $6, $7 )', [id_tienda, tipo, nombre, apaterno, amaterno, fechaNac, telefono]);
        return res.json({
            message: 'El usario se creo satisfactoriamente',
            body: {
                user: {
                    id_tienda,
                    tipo,
                    nombre,
                    apaterno,
                    amaterno,
                    fechaNac,
                    telefono
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ "error": [`NodeJS dice ${e}`] });
    }
    //console.log(req.body);
    //res.send('recived');
});
exports.createUser = createUser;
