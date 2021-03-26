let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  let pacientes = document.querySelectorAll(".paciente");
  for(var i = 0; i< paciente.length; i++){
    let paciente = pacientes[i];
    let tdNome = paciente.querySelector(".info-nome");
    let nome = paciente.textContent;
  }
});