const corpo=document.querySelector('body');
const titulo= document.querySelector('.titulo');
const tela= document.querySelector('#tela');
const imagem= document.querySelector('imagem');
//corpo.style.backgroundColor='#e17b93'
//corpo.style.color='white';
//titulo.textContent= 'Adicionando elementos via JS';
//container.style.width='94%';
//container.style.margin='0 auto';
//container.style.backgroundColor='#86b7ff'

//EX1
titulo.textContent= 'Olá AnaJu';
//EX2
tela.style.backgroundColor='#c0d8ff'
tela.style.width='94%';

//EX3
let anuncio= '<h2>Seja bem vindo ao servidor</h2>';
tela.innerHTML += anuncio;

//EX4
document.getElementById("imagem").innerHTML += 
'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86EHW78cPXlV8Jbagsxwpb_UyyJB7Cx8Ntg&s" alt="Domenika" width="300" height="200">';

