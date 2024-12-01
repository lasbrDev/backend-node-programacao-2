import { Router } from "express";
import { validationResult } from "express-validator";
import { atualizarFornecedor, atualizarFornecedorParcial, cadastrarFornecedor, consultarFornecedores, excluirFornecedor } from "../controller/fornecedorController.js";
import { fornecedorValidatorRules } from "../validator/fornecedorValidator.js";

const router = Router(); 

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.post("/", fornecedorValidatorRules, validateRequest, cadastrarFornecedor);
router.get("/", consultarFornecedores);
router.put("/:id", fornecedorValidatorRules, validateRequest, atualizarFornecedor);
router.patch("/:id", fornecedorValidatorRules, validateRequest, atualizarFornecedorParcial);
router.delete("/:id", excluirFornecedor);

export default router;