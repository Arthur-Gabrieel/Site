document.addEventListener("DOMContentLoaded", () => {
  // Animação ao passar o mouse
  const botoes = document.querySelectorAll('.saibaMais');

  botoes.forEach(botao => {
    botao.addEventListener('mouseenter', () => {
      botao.classList.add('pulando'); // adiciona o efeito
    });

    botao.addEventListener('mouseleave', () => {
      botao.classList.remove('pulando'); // remove o efeito quando sai
    });
  });

  // Função para lidar com a abertura e fechamento das modais
  const noticias = document.querySelectorAll('.noticia1, .noticia2, .noticia3, .noticia4');

  noticias.forEach(noticia => {
    const botao = noticia.querySelector('.saibaMais');
    const modal = noticia.querySelector('.modal');
    const fechar = modal.querySelector('.buttonClose');

    // Garante que a modal comece oculta
    modal.style.display = 'none';

    // Abrir a modal ao clicar no botão
    botao.addEventListener('click', () => {
      modal.style.display = 'flex'; // flex para centralizar com CSS
    });

    // Fechar a modal ao clicar no botão de fechar
    fechar.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Fechar a modal ao clicar fora do conteúdo
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';

      
      }
    });
  });
});


document.querySelectorAll('.videoWrapper').forEach(wrapper => {
  const video = wrapper.querySelector('.videoModal');
  const playPauseBtn = wrapper.querySelector('.playPause');
  const progress = wrapper.querySelector('.progress');
  const currentTimeDisplay = wrapper.querySelector('.currentTime');
  const volumeControl = wrapper.querySelector('.volume');

  function formatTime(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function updateProgress() {
    if (video.duration && !isNaN(video.duration)) {
      const percent = (video.currentTime / video.duration) * 100;
      progress.value = percent;
      currentTimeDisplay.textContent = formatTime(video.currentTime);
      updateProgressBar();
    }
    playPauseBtn.textContent = video.paused ? '▶️' : '⏸️';
  }

  function updateProgressBar() {
    const value = progress.value;
    progress.style.background = `linear-gradient(to right, #bb530efb 0%, #bb5b0cff ${value}%, #ccc ${value}%, #ccc 100%)`;
  }

  function updateVolumeBar() {
    const val = ((volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min)) * 100;
    volumeControl.style.background = `linear-gradient(to right, #bb530efb 0%, #bb5b0cff ${val}%, #ccc ${val}%, #ccc 100%)`;
  }

  playPauseBtn.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
    updateProgress();
  });

  video.addEventListener('timeupdate', updateProgress);

  progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
    updateProgressBar();
  });

  volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
    updateVolumeBar();
  });

  video.addEventListener('loadedmetadata', () => {
    updateProgress();
    updateProgressBar();
    updateVolumeBar();
  });

  updateProgressBar();
  updateVolumeBar();
});
