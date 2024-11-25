export default function autenticar(req, res) {
    const { username, password } = req.body;
    const usuario = { username: 'admin@admin.com', password: 'admin@123' };

    if (username === usuario.username && password === usuario.password) {
        req.session.usuario = { username: usuario.password };
        console.log('Autenticação bem-sucedida.', req.session.usuario);
        res.redirect('/');
    } else {
        console.log('Erro de autenticação. Redirecionando para a página de login.', username);
        res.redirect('/login?error=Usuário ou senha inválidos!');
    }
};