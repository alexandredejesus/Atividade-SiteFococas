// Código JavaScript para trocar as imagens do banner a cada 2 segundos
const banner = document.querySelector('.banner');
const images = banner.querySelectorAll('img');
let currentImageIndex = 0;

setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}, 6000); // 2 segundos

// Script para exibir/ocultar o submenu 
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.submenu').style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('.submenu').style.display = 'none';
    });
});
//---Fim do Script para exibir/ocultar o submenu

