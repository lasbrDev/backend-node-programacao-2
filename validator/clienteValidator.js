import { body } from "express-validator";

export const clienteValidatorRules = [
    body("cpf")
        .notEmpty().withMessage("CPF é obrigatório!")
        .isLength({ min: 11, max: 14 }).withMessage("CPF deve ter entre 11 e 14 caracteres!")
        .matches(/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage("CPF inválido!"),

    body("nomeCompleto")
        .notEmpty().withMessage("Nome completo é obrigatório!")
        .isString().withMessage("Nome completo deve conter apenas letras!"),

    body("endereco")
        .notEmpty().withMessage("Endereço é obrigatório!"),

    body("cidade")
        .notEmpty().withMessage("Cidade é obrigatória!"),

    body("estado")
        .notEmpty().withMessage("Estado é obrigatória!")
        .isLength({ min: 2, max: 2 }).withMessage("Estado deve ter 2 caracteres!")
        .isAlpha().withMessage("Estado deve conter apenas letras!"),
        
    body("cep")
        .notEmpty().withMessage("CEP é obrigatório!")
        .matches(/^\d{5}-\d{3}$/).withMessage("CEP deve estar no formato 00000-000"),
]