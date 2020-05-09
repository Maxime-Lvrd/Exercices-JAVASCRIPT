let img = document.querySelector('img');

sizeImg = () => img.style.width = '100%';
resetImg = () => img.style.width = '50%';

img.addEventListener('click', sizeImg);
img.addEventListener('dblclick', resetImg);
