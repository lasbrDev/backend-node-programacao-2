import { Router } from 'express';
import { validationResult } from 'express-validator';
import { atualizarProduto, cadastrarProduto, excluirProduto, listarProdutos } from '../controller/produtoController.js';
import { produtoValidationRules } from '../validator/produtoValidator.js';

const router = Router();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.post('/produto', produtoValidationRules, validateRequest, cadastrarProduto);
router.get('/produto', listarProdutos);
router.patch('/produto/:id', produtoValidationRules, validateRequest, atualizarProduto);
router.delete('/produto/:id', excluirProduto);

export default router;