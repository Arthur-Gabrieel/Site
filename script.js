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

// ============================= Carrousel =======================================


const carousel = document.querySelector(".projectCarousel");
const scrollbar = document.querySelector(".customScrollbar");
const thumb = document.querySelector(".customThumb");

function updateThumbPosition() {
    const scrollPercent = carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth);
    const maxThumbX = scrollbar.clientWidth - thumb.clientWidth;
    thumb.style.left = (scrollPercent * maxThumbX) + "px";
}

carousel.addEventListener("scroll", updateThumbPosition);

// --- arrastar o thumb ---
let isDragging = false;
let startX;
let startLeft;

thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startLeft = parseInt(window.getComputedStyle(thumb).left);
    thumb.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    let newLeft = startLeft + dx;

    const maxLeft = scrollbar.clientWidth - thumb.clientWidth;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > maxLeft) newLeft = maxLeft;

    thumb.style.left = newLeft + "px";

    const percent = newLeft / maxLeft;
    carousel.scrollLeft = percent * (carousel.scrollWidth - carousel.clientWidth);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    thumb.style.cursor = "grab";
});

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