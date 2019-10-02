const filtro = () => pecas.filter((itens) => {
    
    
    return itens.quantidade > 30
    
}).map((itens) => `<li>${itens.nome}</li>`).join('')    

