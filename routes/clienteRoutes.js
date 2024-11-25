import { Router } from "express";
import { validationResult } from "express-validator";
import { atualizarCliente, cadastrarCliente, excluirCliente, listarClientes } from "../controller/clienteController";
import { clienteValidationRules } from "../validations/clienteValidation";

const router = Router(); 

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.post("/cliente", clienteValidationRules, validateRequest, cadastrarCliente);
router.get("/cliente", listarClientes);
router.patch("/cliente/:id", clienteValidationRules, validateRequest, atualizarCliente);
router.delete("/cliente/:id", excluirCliente);

export default router;