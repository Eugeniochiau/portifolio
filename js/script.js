var navbar = document.querySelector(".navbar");
const mode = document.querySelector(".btn-mode");
var nav_toggle = document.querySelector(".navbar-toggler");
var nav_collapse = document.querySelector(".navbar-collapse");
// antes do carregamento
(function () {
  var main = document.querySelector(".main-content");

  // var container=document.querySelector(".loading");
  var carregamento = document.querySelector(".loading");
  setTimeout(function () {
    // container.remove(carregamento);
    carregamento.setAttribute("class", " loading d-none");
    navbar.setAttribute("class", "navbar navbar-expand-lg");
    main.setAttribute("class", "main-content mt-5");
    mode.classList.remove('d-none');
    // console.log(carregamento);  
  }, 3450);

})();

$(document).ready(function () {
  $('a.nav-link').click(function () {
    const active = document.getElementsByClassName("active");
    active.removeClass("active");
    $('a.nav-link').removeClass("active");
    $(this).addClass("active");
  });
});



// dowload de CV

function dowload() {
  var file = 'img/agua.png';

  var link = document.getElementById("dowloadlink");
  link.setAttribute('dowload', file);
  console.log(link);
  link.click();


}


nav_toggle.addEventListener('click', (event) => {
  console.log(nav_collapse);
  if (nav_collapse.classList.contains("d-none")) {
    nav_collapse.classList.remove("d-none");
    navbar.classList.toggle('scrolled');
    navbar.classList.add('shadow-sm')
    return
  }
  else {
    nav_collapse.classList.add("d-none");
    navbar.classList.toggle('scrolled');
    navbar.classList.remove("shadow-sm");
    return
  }

});