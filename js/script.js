const login = document.getElementById('nome');
const senha = document.getElementById('password');
const errorMsg = document.getElementById('error');

function validarUsuario()
{
    console.log(login.value + senha.value);
    if(login.value === "" || senha.value === "")
    {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }

    // window.location.href = '../view/cadastro.html';
}

