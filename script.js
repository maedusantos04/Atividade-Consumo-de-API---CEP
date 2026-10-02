async function buscarCep() {

    const mensagem = document.querySelector("#mensagem");

    mensagem.textContent = "Iniciando a busca...";

    const cep = document.querySelector("#cep").value;

    if (cep === "") {
        mensagem.textContent = "Digite um CEP.";
        return;
    }

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const dados = await resposta.json();

    if (dados.erro) {
        mensagem.textContent = "CEP não encontrado.";
        return;
    }

    const resultado = document.querySelector("#resultado");

    resultado.textContent = "";

    const titulo = document.createElement("h2");
    titulo.textContent = "Endereço encontrado";

    const cepTexto = document.createElement("p");
    cepTexto.textContent = `CEP: ${dados.cep}`;

    const logradouro = document.createElement("p");
    logradouro.textContent = `Logradouro: ${dados.logradouro}`;

    const bairro = document.createElement("p");
    bairro.textContent = `Bairro: ${dados.bairro}`;

    const cidade = document.createElement("p");
    cidade.textContent = `Cidade: ${dados.localidade}`;

    const estado = document.createElement("p");
    estado.textContent = `Estado: ${dados.uf}`;

    resultado.appendChild(titulo);
    resultado.appendChild(cepTexto);
    resultado.appendChild(logradouro);
    resultado.appendChild(bairro);
    resultado.appendChild(cidade);
    resultado.appendChild(estado);

    mensagem.textContent = "CEP buscado!";
}