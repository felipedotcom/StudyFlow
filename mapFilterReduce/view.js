const pecas = [
    { nome:"Chave de fenda",quantidade: 100, valor: 3},
    { nome:"Parafuso",quantidade: 50, valor: 1},
    { nome: "Martelo", quantidade: 13, valor: 15 },
    { nome: "Prego", quantidade: 155, valor: 0.5 },
    { nome: "Porcelanato", quantidade: 201, valor: 29.50 },
    { nome: "Janela", quantidade: 12, valor: 190 },
    { nome: "Torneira", quantidade: 7, valor: 25 },
    { nome: "Cuba", quantidade: 5, valor: 111 },
    { nome: "Chuveiro", quantidade: 15, valor: 70 },
    { nome: "Cabo Flexivel", quantidade: 43, valor: 33 },
    { nome: "Argamassa", quantidade: 50, valor: 51 },
    { nome: "Caixa d'água", quantidade: 2, valor: 200 },
    { nome: "Tinta Acrílica", quantidade: 28, valor: 155 },
    { nome: "Telha Ondulada", quantidade: 197, valor: 157 },
    { nome: "Cola para azulejo", quantidade: 30, valor: 15 }
]

const template = `
                <article> 
                <header>
                 <h1>
                     Relatorio
                </h1>
                </header> 
                    
                <section> 
                   <ul>
                    ${exibe()}
                   </ul>
                </section>
                <section>
                    <ul>
                    ${somaTotal()}
                    </ul>
                </section> 

                <section>
                    <ul>
                    ${filtro()}
                    </ul>
                </section>
                </article>
            `

document.body.innerHTML = template