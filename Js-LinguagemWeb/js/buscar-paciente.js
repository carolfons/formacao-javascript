//fazendo requisições com AJAX
let botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function (){
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.send();
  xhr.addEventListener("load", function(){
    console.log(xhr.responseText);
  })

});
