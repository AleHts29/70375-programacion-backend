import { generateUser } from '../utils.js'


export const getUsers = async (req, res) => {
    try {

        let users = []
        // Simulacion de peticion a una API ( libreria Fasker)
        for (let i = 0; i < 10; i++) {
            users.push(generateUser())
        }
        res.send({ status: "success", payload: users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios:" });
    }
}