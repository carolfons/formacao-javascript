//fazendo requisições com AJAX
let botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function (){

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){

    let erroAjax = document.querySelector("#erro-ajax");
    if(xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteTabela(paciente);

      });
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    } 

  });

  xhr.send();

});
