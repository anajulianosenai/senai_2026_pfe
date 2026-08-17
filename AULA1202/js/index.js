const corpo=document.querySelector('body');
const titulo= document.querySelector('.titulo');
const container= document.querySelector('#container');
const imagem= document.querySelector('#imagem');
const botao=document.querySelector('.botao');









corpo.style.backgroundColor='#e17b93'
corpo.style.color='white';
titulo.textContent= 'Adicionando elementos via JS';
container.style.width='94%';
container.style.margin='0 auto';
container.style.backgroundColor='#86b7ff'
let anuncio= '<h2>Curso dev com ia - novidade!!!</h2>';
container.innerHTML += anuncio;



//adicionando atributos
imagem.setAttribute('src','./img/ nome da imagem');
imagem.removeSttribute('src','img/WIN_20260126_13_43_19_Pro.jpg');//remove atributos

//adicionando classes
imagem.classList.add('imagem');

//eventos
let contador=0;
botao.addEventListener('click', ()=>{
console.log('Clique no botao' + contador++);
});