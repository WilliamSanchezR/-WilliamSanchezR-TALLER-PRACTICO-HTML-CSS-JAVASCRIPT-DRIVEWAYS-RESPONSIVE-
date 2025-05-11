function modalVideo() {
    
    let selector = document.getElementById("modal-1");

    selector.classList.toggle("active");
    
}

function menuMobile(){
    let selector = document.getElementById("cont-menu-mobile");

    selector.classList.toggle("active");
}

function modalVideoAbout() {
    
    let selector = document.getElementById("modal-2");

    selector.classList.toggle("active");
    
}

document.getElementById('discoverBtn').addEventListener('click', function() {
    var moreCars = document.getElementById('more-cars');
    
    // Alternar entre mostrar y ocultar los vehículos adicionales
    if (moreCars.style.display === 'none' || moreCars.style.display === '') {
        moreCars.style.display = 'flex'; // Cambiar a 'flex' o 'block' según el diseño
        AOS.refresh(); // Refresca AOS para las animaciones
    } else {
        moreCars.style.display = 'none';
    }
});




