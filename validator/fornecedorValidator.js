import { body } from "express-validator";

export const fornecedorValidationRules = [
    body("cnpj")
        .notEmpty().withMessage("CNPJ é obrigatório")
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/).withMessage("CNPJ deve estar no formato 00.000.000/0000-00"),
    
    body("razaoSocial")
        .notEmpty().withMessage("Razão social é obrigatória")
        .isString().withMessage("Razão social deve conter apenas letras!"),
    
    body("telefone")
        .notEmpty().withMessage("Telefone é obrigatório")
        .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/).withMessage("Telefone deve estar no formato (XX) XXXXX-XXXX"),
    
    body("email")
        .notEmpty().withMessage("E-mail é obrigatório")
        .isEmail().withMessage("E-mail deve ser válido"),
    
    body("endereco")
        .notEmpty().withMessage("Endereço é obrigatório"),
];
