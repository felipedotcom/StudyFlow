const blog = {
    titulo: "As novas tendências da Tipografia",
    descricao: "Novas tendências tipográficas para sair da zona de conforto.",
      guias: ['ux', 'ux-design', 'tipografia']
}

const artigo = "<article>" +
                    "<header>"
                     + "<h1>"
                        + blog.titulo +
                      "</h1>"+
                    "</header>" +
                          
                    "<section>" +
                        "<p>"
                         +blog.descricao+
                        "</p>" +
                    "</section>" +
              "</article>"

document.body.innerHTML = artigo
