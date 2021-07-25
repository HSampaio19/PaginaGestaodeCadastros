class Produtos{
    constructor(id, foto, nome, descricao, preco, promocao){
        this.id = id;
        this.foto = foto;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.promocao = promocao;
    }
}
class Clientes{
    constructor(id, nome, endereco,telefone, email, senha){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
    }
}

let produtos = Array(
    new Produtos(1, "Cesta1", "Cesta de chocolate G", "Cesta de chocolate tamanho grande para até 2 pessoas", 250, 200),
    new Produtos(2, "Cesta2", "Cesta de Café Família", "Cesta de café da manhã tamanho grande para até 3 pessoas", 240, 200),
    new Produtos(3, "Cesta3", "Baú Happy Hour", "Baú de cerveja e aperitivos para até 2 pessoas", 280, 260),
    new Produtos(4, "Cesta4", "Cesta Cervejeira", "Cesta de cerveja e aperitivos para 1 pessoas", 200, 170),
    new Produtos(5, "Cesta1", "Cesta de chocolate G2", "Cesta de chocolate tamanho grande para até 2 pessoas", 260, 220),
    new Produtos(6, "Cesta2", "Cesta de Café Família2", "Cesta de café da manhã tamanho grande para até 3 pessoas", 250, 210),
    new Produtos(7, "Cesta3", "Baú Happy Hour2", "Baú de cerveja e aperitivos para até 2 pessoas", 290, 270),
    new Produtos(8, "Cesta4", "Cesta Cervejeira2", "Cesta de cerveja e aperitivos para 1 pessoas", 220, 180),
    new Produtos(9, "Cesta1", "Cesta de chocolate G3", "Cesta de chocolate tamanho grande para até 2 pessoas", 280, 240),
    new Produtos(10, "Cesta2", "Cesta de Café Família3", "Cesta de café da manhã tamanho grande para até 3 pessoas", 260, 230),
    new Produtos(11, "Cesta3", "Baú Happy Hour3", "Baú de cerveja e aperitivos para até 2 pessoas", 300, 270),
    new Produtos(12, "Cesta4", "Cesta Cervejeira3", "Cesta de cerveja e aperitivos para 1 pessoas", 225, 200),
   
    
);

const [id, foto, nome, descricao, preco, promocao] = produtos;

let sectionProdutos = document.getElementById('sectionProdutos');
let principal = document.getElementById('principal');
let verMais 
let cardProdutos
let imgProduto
let nomeProduto
let descricaoProduto
let precoProduto
let promocaoProduto
let botaoCarrinho 
let iconeCarrinho 

let qntInicial = 8
function exibirProdutos(qnt = 0){
    qntInicial = qntInicial + qnt;
    let cont = qntInicial
    sectionProdutos.remove();
    sectionProdutos = document.createElement('section');
    sectionProdutos.id = 'sectionProdutos';
    principal.appendChild(sectionProdutos);

    produtos.map((Produto) => {
        if(cont != 0){

            cardProdutos = document.createElement('div');
            cardProdutos.className = 'card_produto';

            imgProduto = document.createElement('img');
            imgProduto.className = 'img_produto';
            imgProduto.src = `imagens/${Produto.foto}.jpeg`;
            cardProdutos.appendChild(imgProduto);

            nomeProduto = document.createElement('span');
            nomeProduto.className = 'tituloProduto';
            nomeProduto.innerHTML = Produto.nome
            cardProdutos.appendChild(nomeProduto);

            descricaoProduto = document.createElement('span');
            descricaoProduto.className = 'textoProduto';
            descricaoProduto.innerHTML = Produto.descricao
            cardProdutos.appendChild(descricaoProduto);

            promocaoProduto = document.createElement('span');
            promocaoProduto.className = 'descontoProduto';
            promocaoProduto.innerHTML = `De: R$${Produto.promocao},00`
            cardProdutos.appendChild(promocaoProduto);

            precoProduto = document.createElement('span');
            precoProduto.className = 'Preço';
            precoProduto.innerHTML = `Por: R$${Produto.preco},00`
            cardProdutos.appendChild(precoProduto);

            botaoCarrinho = document.createElement('button')
            botaoCarrinho.className = 'botao_adicionar_carrinho'
            botaoCarrinho.setAttribute("onclick", `adicionarAoCarrinho(${Produto.id})`)
            iconeCarrinho = document.createElement('img')
            iconeCarrinho.src = 'imagens/botao_carrinho.png'
            iconeCarrinho.style = 'width: 30px;height: 30px;'
            botaoCarrinho.appendChild(iconeCarrinho);
            cardProdutos.appendChild(botaoCarrinho);

            sectionProdutos.appendChild(cardProdutos);

            cont--
        }else{
            return
        }
    });
    verMais = document.createElement('button')
    verMais.className = 'verMais';
    verMais.innerText = 'Ver Mais';
    verMais.setAttribute("onclick", `exibirProdutos(4)`)
    sectionProdutos.appendChild(verMais);
}

let carrinho = []
function adicionarAoCarrinho(valor){

    const item = produtos.filter(produto=>produto.id === valor)
    carrinho.push(item)
    localStorage.setItem('Carrinho',JSON.stringify(carrinho))
    alert('Produto adicionado ao Carrinho');
}

function clearLS(){
    localStorage.clear();
    carrinho = []
    clientes = []
}


let clientes = []
let sectionForm = document.getElementById('sectionForm')
const form = document.getElementById('formularioCadastro')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nome = document.getElementById('nomeCliente').value
    const endereco = document.getElementById('enderecoCliente').value
    const telefone = document.getElementById('telefoneCliente').value
    const email = document.getElementById('emailCliente').value
    const senha = document.getElementById('senhaCliente').value
    const confSenha = document.getElementById('confSenhaCliente').value
    let cliente = new Clientes((clientes.length),nome,endereco,telefone,email,senha)

        clientes.push(cliente)
        localStorage.setItem('Clientes', JSON.stringify(clientes))
        alert('Cadastro realizado com sucesso')
        form.reset()
        sectionForm.style.visibility = 'hidden'

})

function cancelar(){
    form.reset()
    sectionForm.style.visibility = 'hidden'
}

function finalizarCompra(){
    sectionForm.style.visibility = 'visible'
}
