let listaDeAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    // Limpa a lista de amigos após o sorteio
    listaDeAmigos = [];

    // Atualiza a lista de amigos na tela, que agora estará vazia
    atualizarLista();
}
