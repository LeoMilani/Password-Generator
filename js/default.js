function PegaOpcoes() {
    return {
        maiuscula: document.getElementById("maiuscula").checked,
        minuscula: document.getElementById("minuscula").checked,
        numeros: document.getElementById("numeros").checked,
        simbolos: document.getElementById("simbolos").checked
    };
}

function CaracteresPermitidos(opcoes) {
    let caracteres = "";

    if (opcoes.maiuscula) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (opcoes.minuscula) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (opcoes.numeros) {
        caracteres += "0123456789";
    }
    if (opcoes.simbolos) {
        caracteres += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    return caracteres;
}

function PegaSenha(tamanho, caracteres) {
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }

    return senha;
}

function generatePassword() {
    const tamanho = parseInt(document.getElementById("tamanho").value);

    const opcoes = PegaOpcoes();
    const caracteres = CaracteresPermitidos(opcoes);

    if (!tamanho || caracteres.length === 0) {
        document.getElementById("resultado").innerText =
            "Selecione o tamanho e pelo menos uma opção.";
        return;
    }

    const senha = PegaSenha(tamanho, caracteres);

    document.getElementById("resultado").innerText = senha;
}

function copiarSenha() {
    const senha = document.getElementById("resultado").innerText;

    if (!senha) {
        alert("Nenhuma senha para copiar");
        return;
    }

    navigator.clipboard.writeText(senha);
    alert("Senha copiada!");
} 