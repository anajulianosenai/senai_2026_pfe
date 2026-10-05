const usuarios = ['Barbarosa', 'Cabide','Emanuela', 'Artozzi', 'Juju'];

function usuarioExiste(listaUsuarios, usuarioProcurado) {
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (usuarioProcurado == listaUsuarios[i]) {
            return true;
        }
    }
    return false;
}

console.log(usuarioExiste(usuarios, 'Juju')); 
