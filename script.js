
document.getElementById("btnLogin").addEventListener("click", function () {
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
        alecccurn;
    }

    // valida credenciais fixas
    if (usuario === "dvf" && senha === "1234") {
        alert("Login com sucesso!");
        window.location.href = "https://www.dvfvirtual.com.br/"; 
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
