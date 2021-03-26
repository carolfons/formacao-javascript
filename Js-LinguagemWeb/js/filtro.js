//lógica de filtragem da tabela
let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  let pacientes = document.querySelectorAll(".paciente");

  if(this.value.length>0){
    for(var i = 0; i< paciente.length; i++){
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
  
      if(nome != this.value){
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    }
  }else{
    for(var i = 0; i<pacientes.length;i++){
      let paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
  
});