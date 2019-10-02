const total = () =>  pecas.reduce((resultado, itens) => {

    return resultado + itens.quantidade
}, 0);


//const exibe = () => pecas.map((guide) => `<li>${guide.nome}</li>`).join('')