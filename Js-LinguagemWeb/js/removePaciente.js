let paciente = document.querySelectorAll(".paciente")
let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  let alvoEvento = event.target;
  let paiDoAlvo = alvoEvento.parentNode;

  //adicionando a classe pra remover com fade out
  paiDoAlvo.classList.add("fadeOut");
//removendo o pai do td com time out que "segura" o código por 500ms
  setTimeout(function(){
    paiDoAlvo.remove();
  }, 500);

  
});

