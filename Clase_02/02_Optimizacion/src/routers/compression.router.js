import { Router } from "express";
import { compressString } from '../controllers/compression.controller.js';

const router = Router();

router.get("/long-string", compressString);

export default router;