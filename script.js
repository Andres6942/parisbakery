document.addEventListener('DOMContentLoaded', () => {
const mensaje = document.getElementById('mensaje-hora');
const hora = new Date().getHours();
const idioma = navigator.language || navigator.userLanguage;

let saludo = "";

if (idioma.includes("es")) {
  if (hora >= 6 && hora < 12) {
    saludo = "¡Buenos días! Bienvenido a Paris Bakery ☀️";
  } else if (hora >= 12 && hora < 18) {
    saludo = "¡Buenas tardes! ¿Unas galletas para esta hora?";
  } else {
    saludo = "¡Buenas noches! Nada mejor que una galleta antes de dormir 🌙";
  }
} else {
  if (hora >= 6 && hora < 12) {
    saludo = "Good morning! Welcome to Paris Bakery ☀️";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Good afternoon! How about a cookie right now?";
  } else {
    saludo = "Good evening! A cookie before bed sounds perfect 🌙";
  }
}
if (mensaje) mensaje.textContent = saludo;

  // Slider
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  let currentIndex = 0;

  function cambiarSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(cambiarSlide, 5000);

  // Menú hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu").querySelector("ul");
const footer = document.querySelector("footer");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("mostrar");
  footer.classList.toggle("oculto");
});

// Cerrar menú y mostrar footer al hacer clic en una opción
const menuLinks = navMenu.querySelectorAll("a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("mostrar");
    footer.classList.remove("oculto");
  });
});

  // Botón "Ver productos" en sección inicio
  const btnVerProductos = document.querySelector('a[href="#productos"]');

  btnVerProductos.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById("productos");
    if (target) {
      document.querySelectorAll('main > section').forEach(sec => {
        sec.style.display = 'none';
      });
      target.style.display = 'block';
    }
  });
});
