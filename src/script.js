const palavras = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React'];
const el = document.getElementById('carousel-text');

let i = 0;
let intervalTime = 2200; // tempo entre palavras em ms

function showWord(index) {
  el.classList.remove('show'); // fade out
  setTimeout(() => {
    el.textContent = palavras[index]; // muda a palavra
    el.classList.add('show'); // fade in
  }, 200); // espera o fade out completar
}

// inicializa
showWord(i);

// troca as palavras a cada intervalo
setInterval(() => {
  i = (i + 1) % palavras.length; // incrementa o índice
  showWord(i);
}, intervalTime);

//=============================== Botões na parte de Formmção =================================

// Seleciona os botões
const btnAcademy = document.querySelector('.buttonTraining');
const btnCertification = document.querySelector('.buttonTraining2');

// Seleciona os boxes
const  academyBox = document.querySelector('#academyBox');
const  academyBox2 = document.querySelector('#academyBox2');

const certificationBox = document.querySelector('#certificationBox');
const certificationBox2 = document.querySelector('#certificationBox2');

// Função para mostrar Formação Acadêmica
btnAcademy.addEventListener('click', () => {
  academyBox.style.display = 'block';
  academyBox2.style.display = 'block';
  certificationBox.style.display = 'none';
  certificationBox2.style.display = 'none';

});

// Função para mostrar Certificados
btnCertification.addEventListener('click', () => {
  academyBox.style.display = 'none';
  academyBox2.style.display = 'none';
  certificationBox.style.display = 'block';
  certificationBox2.style.display = 'block';
});


  // Inicialmente mostra apenas Formação Acadêmica
  academyBox.style.display = 'block';
  academyBox2.style.display = 'block';
  certificationBox.style.display = 'none';
  certificationBox2.style.display = 'none';




  // ===================Animaçao fade==================

  const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // previne o salto instantâneo

    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    // Remove show de todas as seções
    document.querySelectorAll('.fade').forEach(sec => sec.classList.remove('show'));

    // Adiciona show na seção clicada
    target.classList.add('show');

    // Opcional: rolagem suave até a seção
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
