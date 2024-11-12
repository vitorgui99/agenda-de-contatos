const form = document.getElementById('form-dados');
const nomes = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomes = document.getElementById('nomes-usuarios');
    const inputTelefone = document.getElementById('telefones-usuarios');

    if (nomes.includes(inputNomes.value)) {
        alert(`O contato ${inputNomes.value} já foi inserido!`)
    }else {
        nomes.push(inputNomes.value);
        telefone.push(inputTelefone.value);

        let linha = `<tr>`;
        linha += `<td>${inputNomes.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    };

    inputNomes.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; //(innerHTML) é para mudar o HTML(também chamado de renderização)//
}