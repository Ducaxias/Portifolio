import { Data } from "./data.js"

const list =  document.createElement('div');
list.classList.add('list');
list.id = 'listPublication';

document.querySelector("#Publications").appendChild(list)

const filter = Data. filter(function(item){

});

const Publication = Data.map(function(dados){
    
   const {Titulo, data, Autor, Resumo, ID} = dados;
    
    const listPublication = document.querySelector("#listPublication");

    list.innerHTML +=`
    <article class="Publi" id="${ID}">
        <h2>${Titulo}</h2>
        <div class="labelInfo">
            <p>${data}</p>
            <p>${Autor}</p>
        </div>
        <p>${Resumo}<p>
    </article>
    `;
    
    return listPublication;
})

