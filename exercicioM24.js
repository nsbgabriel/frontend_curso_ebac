function Cardapio(nomeComida) {
    this.nomeComida = nomeComida;
    this.pedido = function() {
        console.log("A comida é: " + this.nomeComida);
    }
}

function Massas(nomeComida) {
    Cardapio.call(this, nomeComida);
    this.pedido = function() {
        console.log("A comida é: " + this.nomeComida);
    }
}

function Grelhados(nomeComida) {
    Cardapio.call(this, nomeComida);
    this.pedido = function() {
        console.log("A comida é: " + this.nomeComida);
    }
}

function Vegetariano(nomeComida) {
    Cardapio.call(this, nomeComida);
    this.pedido = function() {
        console.log("A comida é: " + this.nomeComida);
    }
}

const macarrao = new Massas("Macarrão à bolonhesa");
const frangoGrelhado = new Grelhados("Frango grelhado com azeite e ervas");
const berinjela = new Vegetariano("Berinjela à parmegiana");

frangoGrelhado.pedido();
berinjela.pedido();
macarrao.pedido();