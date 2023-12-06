
var busqueda = document.getElementById('buscar');
busqueda.addEventListener('focus', function(){
  document.getElementsByClassName('icono')[0].style.display = "flex";
  busqueda.parentNode.style.border = "1px solid #0a59b2";
})
busqueda.addEventListener('focusout', function(){
  document.getElementsByClassName('icono')[0].style.display = "none";
  busqueda.parentNode.style.border = "1px solid #ccc";
})


