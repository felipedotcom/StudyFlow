const filtro = () => pecas.filter((itens) => {
    
    
    return itens.quantidade > 10
    
}).map((itens) => `<li>${itens.nome}</li>`).join('')    

