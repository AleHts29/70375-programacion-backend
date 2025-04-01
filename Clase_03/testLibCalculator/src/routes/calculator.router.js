import { Router } from "express";
import calulator from 'app-clase3-calculadora'

const router = Router();

router.post("/sum", (req, res) => {
    const { num1, num2 } = req.body
    const result = calulator.sum(num1, num2)
    res.send({ status: 'success', result: result })
});

router.post("/divide", (req, res) => {
    try {
        const { num1, num2 } = req.body
        const result = calulator.div(num1, num2)
        res.send({ status: 'success', result: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

export default router;