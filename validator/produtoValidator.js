import { body } from "express-validator";

export const produtoValidationRules = [
    body("codigo")
        .notEmpty().withMessage("Código do produto é obrigatório")
        .isLength({ max: 10 }).withMessage("Código não pode ter mais de 10 caracteres"),
    
    body("nome")
        .notEmpty().withMessage("Nome do produto é obrigatório")
        .isString().withMessage("Nome deve ser uma string"),
    
    body("preco")
        .notEmpty().withMessage("Preço é obrigatório")
        .isFloat({ gt: 0 }).withMessage("Preço deve ser um número positivo"),
    
    body("descricao")
        .optional() 
        .isString().withMessage("Descrição deve ser uma string"),
    
    body("estoque")
        .notEmpty().withMessage("Estoque é obrigatório")
        .isInt({ min: 0 }).withMessage("Estoque deve ser um número inteiro não negativo"),
];
