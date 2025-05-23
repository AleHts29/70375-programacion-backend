import { usersService } from "../services/index.js"

/**
 * @function getAllUsers
 * @description Obtiene todos los usuarios disponibles en la base de datos.
 * @route GET /api/users/
 * @returns {Object} Retorna un objeto con el estado de la operación y la lista de usuarios.
 */
const getAllUsers = async (req, res) => {
    console.log("Llamando API getAllUsers");
    const users = await usersService.getAll();
    res.send({ status: "success", payload: users })
}

const getUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if (!user) return res.status(404).send({ status: "error", error: "User not found" })
    res.send({ status: "success", payload: user })
}

const updateUser = async (req, res) => {
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if (!user) return res.status(404).send({ status: "error", error: "User not found" })
    const result = await usersService.update(userId, updateBody);
    res.send({ status: "success", message: "User updated" })
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({ status: "success", message: "User deleted" })
}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
}