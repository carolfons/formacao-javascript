let paciente = document.querySelectorAll(".paciente")

paciente.forEach(function(pacientes){
  pacientes.addEventListener("dblclick", function(){
    this.remove();
  });
});