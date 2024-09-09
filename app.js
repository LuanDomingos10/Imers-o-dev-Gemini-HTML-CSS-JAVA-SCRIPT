function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa)

    if(campoPesquisa == ""){
        section.innerHTML = "Nada foi encontrado"
        return //return mostra que vai finalizar essa função e não executar nenhum codigo que esteja abaixo
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";
    for(let dado of data){
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
        //se o oque for digitado na pesquisa estiver incluido no data.js ele aparece
        if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa)){
            resultados += `  
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
            </div>`
        }
        if(!resultados ){
            resultados = "Nada foi encontrado"
        }
       
    }
    section.innerHTML = resultados
    
}
