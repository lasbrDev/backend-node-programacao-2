import { Router } from 'express';
import { validationResult } from 'express-validator';
import { atualizarFornecedor, cadastrarFornecedor, excluirFornecedor, listarFornecedores } from '../controller/fornecedorController.js';
import { fornecedorValidatorRules } from '../validator/fornecedorValidator.js';

const router = Router();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.get("/", listarFornecedores);
router.post("/", fornecedorValidatorRules, validateRequest, cadastrarFornecedor);
router.patch("/:id", fornecedorValidatorRules, validateRequest, atualizarFornecedor);
router.delete("/:id", excluirFornecedor);

export default router;
