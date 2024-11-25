import { Routes } from 'express';
import { validationResult } from 'express-validator';
import { atualizarFornecedor, cadastrarFornecedor, excluirFornecedor, listarFornecedores } from '../controller/fornecedorController.js';
import { fornecedorValidationRules } from '../validator/fornecedorValidator.js';

const router = Routes();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.get('/fornecedores', listarFornecedores);
router.post('/fornecedor', fornecedorValidationRules, validateRequest, cadastrarFornecedor);
router.patch('/fornecedor/:id', fornecedorValidationRules, validateRequest, atualizarFornecedor);
router.delete('/fornecedor/:id', excluirFornecedor);

export default router;
