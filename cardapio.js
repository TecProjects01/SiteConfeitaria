function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}

// Função que cria múltiplos itens de cardápio com base nos dados recebidos
function CriarItensCardapio(itens) {
    itens.forEach(item => {
        criarItemCardapio(item.titulo, item.descricao, item.foto);
    });
}

// Função para pegar os dados da API
async function pegarDados() {
    try {
        const url = 'https://confeitariaapi-n7fx.onrender.com/cardapio'; // Substitua pela URL real da sua API
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error('Erro ao buscar os dados');
        }

        const dados = await resposta.json();

        // Chama a função para criar os itens do cardápio com os dados recebidos
        CriarItensCardapio(dados);

    } catch (erro) {
        console.error('Erro ao pegar os dados:', erro);
    }
}

// Chama a função para pegar os dados assim que a página carregar
document.addEventListener('DOMContentLoaded', pegarDados);
