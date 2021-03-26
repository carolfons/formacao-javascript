//lógica de filtragem da tabela
let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  let pacientes = document.querySelectorAll(".paciente");

  if(this.value.length>0){
    for(var i = 0; i< paciente.length; i++){
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      //criando uma regex para deixar a pesquisa mais dinamica
      let expressao = new RegExp(this.value, "i");
      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");
    } else {
        paciente.classList.add("invisivel");
    }
    }
  }else{
    for(var i = 0; i<pacientes.length;i++){
      let paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
  
});