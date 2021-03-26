//fazendo requisições com AJAX
let botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function (){
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    let pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente){
      adicionaPacienteTabela(paciente);
    });

  });

  xhr.send();

});
