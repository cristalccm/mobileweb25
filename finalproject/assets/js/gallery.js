const thumbs = document.querySelectorAll('.fullscreen-thumb');
const viewer = document.getElementById('fullscreen-viewer');
const viewerImage = document.getElementById('fullscreen-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
  const images = Array.from(thumbs);
  viewerImage.src = images[index].src;
  currentIndex = index;
  viewer.style.display = 'flex';
}

thumbs.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index));
});

closeBtn.addEventListener('click', () => {
  viewer.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbs.length;
  showImage(currentIndex);
});