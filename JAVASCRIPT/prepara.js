let div = document.createElement("div");
div.className='hcontainer';


import receitas from "../receitaDrinks.json" assert {type: "json"}//Importar arquivo JSON

const drinks = receitas.drinks


function template() {
    return `
    ${drinks.map((receita, index) => {// Esssa função tem objetivo, de ler o JSON
        return `
    
        <div class='receita n${index}'> 
        <h1>${receita.titulo}</h1>
        <img src=${receita.imagem} />
    
        <ul class="listaReceita">
            ${receita.ingredientes.map(element => {
            return `
                <li>${element}</li>
                `
        }).join('')}        
        </ul>
        </div>
       
        `
    }).join("")}
    `}
// navbar do header

const headerx = document.createElement('header');
headerx.className = 'headerx';
div.appendChild(headerx);

const menuHead = document.createElement('ul');
menuHead.className = 'menuHead';
headerx.appendChild(menuHead);

const home = document.createElement('li');
home.innerHTML = 'Home';
home.addEventListener('click', function toggle1(){
    let receitas = document.querySelector('.divPreparo') // login
    let login = document.querySelector('.spaHome');
    let Produtos = document.querySelector('.divProdutos');
    if(login.style.display == "flex"){
        receitas.style.display = "none";
        Produtos.style.display = "none";
    }
    else{
        login.style.display = "flex";
        receitas.style.display = "none";
        Produtos.style.display = "none";
    }
}); //Essa função tem o objetivo de não saír da página para não trocar de tela.
menuHead.appendChild(home);


const produtos = document.createElement('li');
produtos.innerHTML = 'Produtos';
produtos.addEventListener('click', function toggle2(){
    let receitas = document.querySelector('.divPreparo') // login
    let login = document.querySelector('.spaHome');
    let Produtos = document.querySelector('.divProdutos');
    login.style.display = 'none';
    if(Produtos.style.display == 'flex'){
        login.style.display = "none";
        receitas.style.display = "none";
        receitas.innerHTML = ""
    }else{
        Produtos.style.display = "flex";
        login.style.display = "none";
        receitas.style.display = "none";
    }

});

menuHead.appendChild(produtos);

const preparo = document.createElement('li');
preparo.innerHTML = 'Preparo';

preparo.addEventListener('click', function toggle3(){
    let receitas = document.querySelector('.divPreparo') // login
    let login = document.querySelector('.spaHome');
    let Produtos = document.querySelector('.divProdutos');
    login.style.display = 'none';
    if(receitas.style.display == 'grid'){
        login.style.display = "none";
        Produtos.style.display = "none";
    }else{
        receitas.style.display = "grid";
        login.style.display = "none";
        Produtos.style.display = "none";
    }
});
menuHead.appendChild(preparo);

/*----------------------------------------------------------------------------- */

/*Telas SPA*/

//div principal precisa adicionar todo o conteudo
const divPrincipal = document.createElement('div');
divPrincipal.className = 'spaHome'
div.appendChild(divPrincipal);

//div produtos precisa adicionar todo o conteudo
const divProdutos = document.createElement('div');
divProdutos.className = 'divProdutos'
divProdutos.style.display = 'none';
div.appendChild(divProdutos);

//div preparo ja tem todo o conteudo
const divPreparo = document.createElement('div');
divPreparo.className = 'divPreparo'
divPreparo.style.display = 'none'
divPreparo.innerHTML = template()
div.appendChild(divPreparo);

// Botão para de scrollto, para subir para o top da pagina
const buttoUp = document.createElement('button')
buttoUp.className = 'buttoUp';
buttoUp.innerHTML = 'Up';
buttoUp.addEventListener('click',() => window.scrollTo(0,0))
divPreparo.appendChild(buttoUp);

const inpCheckBox = document.createElement('input');
inpCheckBox.className ='inpChecBox';
inpCheckBox.addEventListener('change', () => {document.querySelector('html').classList.toggle('Dark')});
inpCheckBox.type ='checkbox';
headerx.appendChild(inpCheckBox);

const labelDark = document.createElement('label');
labelDark.className ='labelDark';
labelDark.innerHTML = 'Dark Mode';
headerx.appendChild(labelDark);

document.body.appendChild(div)//Adicionando a DIV principal dentro da tag body


