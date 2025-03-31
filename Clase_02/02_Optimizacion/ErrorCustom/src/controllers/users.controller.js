import UserService from '../services/dao/users.dao.js';
import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/errors-enum.js";
import { generateUserErrorInfo } from "../services/errors/messages/user-creation-error.message.js";
const userService = new UserService();


export const getUsers = async (req, res) => {
    // res.send({ message: "Success!", payload: "getUserById: Por implementar" });
    try {
        const users = await userService.getAll();
        res.send({ message: "Success!", payload: users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios." });
    }
}

export const saveUser = async (req, res) => {
    try {
        let result = await userService.save(req.body);
        res.status(201).send(result);
    } catch (error) {
        if (error.code === 11000) {
            // let { email } = req.body
            // Creamos un Custom Error
            CustomError.createError({
                name: "User Create Error",
                cause: generateUserErrorInfo(error.keyValue),
                message: "Error tratando de crear al usuario",
                code: EErrors.INVALID_TYPES_ERROR
            })
            // console.error(error);

        }
        res.status(500).send({ error: error.code, message: "No se pudo guardar el usuario." });
    }
}

export const getUserById = async (req, res) => {
    res.send({ message: "Success!", payload: "getUserById: Por implementar" });
}