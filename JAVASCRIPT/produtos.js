const screenProduto = document.querySelector('.divProdutos');


const divInput = document.createElement('div');
divInput.className = 'divInput'
screenProduto.appendChild(divInput);

const paragrafo = document.createElement('p');
paragrafo.className = 'paragrafo';
paragrafo.innerHTML = 'Tropical Drinks';
divInput.appendChild(paragrafo);

const contForm = document.createElement('div');
contForm.className = 'contForm';
divInput.appendChild(contForm);

const form = document.createElement('form');
form.className = 'form';
contForm.appendChild(form);

const finput = document.createElement('input');
finput.className = 'finput';
finput.placeholder ='Busque seu drink'
finput.type = 'text';
finput.maxLength="100"; // Essa função é utlizada para limitar os caracteres
contForm.appendChild(finput);

// botão de busca
const fbutton = document.createElement('button');
fbutton.className = 'fbutton';
fbutton.innerText = 'Buscar';
fbutton.addEventListener('click',  ()=>{
   let exiB = document.querySelector('.exiB');
   exiB.innerHTML ='';
   fetch('https://cocktail-recipes-tully4school.herokuapp.com/drinks')
   .then( resposta => resposta.json())
   .then(data => {
     if(finput.value !== ''){
        data.filter((el) => el.drinkName.toLowerCase()
        .startsWith(finput.value.toLowerCase())
        ).forEach(generedCardsApi)
     }
   });// Paramos aqui 28/09/2022 01h52
})
contForm.appendChild(fbutton);
// /*Fim do busca */



const divScreenDrinks = document.createElement('div');
divScreenDrinks.className = 'divScreenDrinks';
screenProduto.appendChild(divScreenDrinks);


 function generedCardsApi(data){

    const divListDrink = document.createElement('div');
    divListDrink.className ='divListDrink';
    divListDrink.setAttribute('style','width: 355px;');
    exiB.appendChild(divListDrink);

    const imgDrink = document.createElement('img');
    imgDrink.appendChild = 'imgDrink';
    imgDrink.src = data.drinkThumb;
    imgDrink.setAttribute('style','width: 355px; border-radius: 10px;');
    divListDrink.appendChild(imgDrink);

    const divinfoDrink = document.createElement('div');
    divinfoDrink.className = 'divinfoDrink';
    divListDrink.appendChild(divinfoDrink);

    const nameDrink = document.createElement('h3');
    nameDrink.className = 'nameDrink';
    nameDrink.innerHTML = data.drinkName;
    divinfoDrink.appendChild(nameDrink);

   
    const categoriaDrink = document.createElement('p');
    categoriaDrink.className = 'categoriaDrink';
    categoriaDrink.innerHTML = data.drinkCategory;

    divinfoDrink.appendChild(categoriaDrink);

 }

 const exiB = document.createElement('div');
 exiB.className = 'exiB';
 screenProduto.appendChild(exiB);
 


































