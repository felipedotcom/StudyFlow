const pecas = [
    { nome:"Chave de fenda",quantidade: 100, valor: 3},
    { nome:"Parafuso",quantidade: 50, valor: 1},
    { nome: "Martelo", quantidade: 0, valor: 15 },
    { nome: "Prego", quantidade: 155, valor: 0.5 }
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
                    ${total()}
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