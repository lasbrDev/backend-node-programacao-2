import { Router } from "express";
import { validationResult } from "express-validator";
import { atualizarProduto, atualizarProdutoParcial, cadastrarProduto, consultarProdutos, excluirProduto } from "../controller/produtoController.js";
import { produtoValidatorRules } from "../validator/produtoValidator.js";

const router = Router(); 

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

router.post("/", produtoValidatorRules, validateRequest, cadastrarProduto);
router.get("/", consultarProdutos);
router.put("/:id", produtoValidatorRules, validateRequest, atualizarProduto);
router.patch("/:id", produtoValidatorRules, validateRequest, atualizarProdutoParcial); 
router.delete("/:id", excluirProduto);

export default router;