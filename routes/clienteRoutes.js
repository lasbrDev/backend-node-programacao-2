import { Router } from "express";
import { validationResult } from "express-validator";
import { atualizarCliente, atualizarClienteParcial, cadastrarCliente, consultarClientes, excluirCliente } from "../controller/clienteController.js";
import { clienteValidatorRules } from "../validator/clienteValidator.js";

const router = Router(); 

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.post("/", clienteValidatorRules, validateRequest, cadastrarCliente);
router.get("/", consultarClientes);
router.put("/:id", clienteValidatorRules, validateRequest, atualizarCliente);
router.patch("/:id", clienteValidatorRules, validateRequest, atualizarClienteParcial); 
router.delete("/:id", excluirCliente);

export default router;