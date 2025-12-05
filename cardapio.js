function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div');
    divItemCardapio.className = 'item-cardapio';

    const h3Titulo = document.createElement('h3');
    h3Titulo.textContent = titulo;

    const pDescricao = document.createElement('p');
    pDescricao.textContent = descricao;
    pDescricao.className = 'descricao';

    const img = document.createElement('img');
    img.src = foto;
    img.className = 'img-item';

    const divC = document.getElementById('cardapio');
    if (!divC) {
        console.error('Element #cardapio not found');
        return;
    }

    divItemCardapio.appendChild(h3Titulo);
    divItemCardapio.appendChild(pDescricao);
    divItemCardapio.appendChild(img);
    divC.appendChild(divItemCardapio);
}

function CriarItensCardapio(itens) {
    itens.forEach(item => {
        criarItemCardapio(item.titulo, item.descricao, item.foto);
    });
}

async function pegarDados() {
    try {
        const url = 'https://confeitariaapi-n7fx.onrender.com/cardapio';
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}: ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        CriarItensCardapio(dados);
    } catch (erro) {
        console.error('Erro ao pegar os dados:', erro);
    }
}

document.addEventListener('DOMContentLoaded', pegarDados);
