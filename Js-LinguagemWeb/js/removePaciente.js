let paciente = document.querySelectorAll(".paciente")
let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  let alvoEvento = event.target;
  let paiDoAlvo = alvoEvento.parentNode;

  //removendo o pai do td
  paiDoAlvo.remove();

   
});

