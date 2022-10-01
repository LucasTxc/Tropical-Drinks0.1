const screenHome = document.querySelector('.spaHome');


const divPageCont = document.createElement('div');
divPageCont.className ='divPageCont';
screenHome.appendChild(divPageCont); //Essa função está linkcado as paginas

/* Criação de div para titulo */
const divTitulo = document.createElement('div'); 
divTitulo.className = 'divTitulo';
divPageCont.appendChild(divTitulo);
// conteiner.appendChild(divTitulo);

const divH1 = document.createElement('div'); 
divH1.className = 'divText';
divTitulo.appendChild(divH1);

const tituloH1 = document.createElement('h1');
tituloH1.className = 'tituloH1';
tituloH1.innerHTML = 'Welcome to Tropical Drinks';
divH1.appendChild(tituloH1);
/*Fim do Titulo */


/*Texto de apresentação*/ 

const divText = document.createElement('div');
divText.className = 'divText';
divTitulo.appendChild(divText);

const divH2 = document.createElement('h2');
divH2.className = 'divH2';
divH2.innerHTML = 'Essa será sua melhor experiencia';
divText.appendChild(divH2);

const divH3 = document.createElement('h3');
divH3.className = 'divH3';
divH3.innerHTML = 'Se O Brasil te obriga a beber, aqui está a solução.';
divText.appendChild(divH3);

/*Fim Text */

const divImg = document.createElement('div');
divImg.className -'divImg';
divPageCont.appendChild(divImg);


const imagemHome = document.createElement('img');
imagemHome.className = 'imagemHome';
imagemHome.setAttribute('style','width:100%;');
divImg.appendChild(imagemHome);




