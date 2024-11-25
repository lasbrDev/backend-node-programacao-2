export default function verificarLogin(req, res, next) {
    console.log('Verificando login...');

    if (req.session && req.session.usuario) {
        console.log('Login verificado.', req.session.usuario);
        next();
    } else {
        console.log('Usuário não autenticado. Redirecionando para a página de login.');
        res.redirect('/login');
    }
};