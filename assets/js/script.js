//Get the button
let mybutton = document.getElementById("btn-back-to-top")
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// DESATIVA MENU MOBILE QUANDO CLICA EM LINK
window.addEventListener('DOMContentLoaded', event => {
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        // caminho para os links a serem monitorados
        document.querySelectorAll('#menu-principal .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// animacoes
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const meuNome = document.querySelector('#meu-nome')
let divsAnimar = document.querySelectorAll('[data-animar="after"]')

function removerAnimacaoEscrever(){
  meuNome.classList.remove('animacao-escrever')
}
function animarScroll(){
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4
  divsAnimar.forEach(function(elemento){
    console.log('1')
    if(windowTop > elemento.offsetTop){
      elemento.classList.add('animate')
    }else{
      elemento.classList.remove('animate')
    }
  })
}

function escrever(elemento){
  elemento.innerHTML = ''
  const texto = ['A', 'N', 'D', 'E', 'R', 'S', 'O', 'N', ' ', '<span>A</span>', '<span>R</span>', '<span>A</span>', '<span>Ú</span>', '<span>J</span>', '<span>O</span>']
  texto.forEach((letra, i)=>{
    setTimeout(function(){
      elemento.innerHTML += letra
    }, 75 * i)
  })
  const divsResumo = document.querySelectorAll('[data-animar="now"]')
  setTimeout(() => {
    for(let i = 0; i < divsResumo.length;i++){
        setTimeout(() => {
          divsResumo[i].classList.add('animate')
        }, 300 * i);
    }
  }, 1000);

  // ADICIONA ANIMACAO AO SCROLL SOMENTE APOS AS ANIMACOES INICIAIS
  window.addEventListener('scroll', debounce(function(){
    animarScroll()
  }, 15))
}

window.onload = function () { 
  escrever(meuNome)
}
