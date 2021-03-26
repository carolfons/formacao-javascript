let botaoAdicionar = document.querySelector("#adicionar-paciente");
//eventListener quando clicar no botão
botaoAdicionar.addEventListener("click", function(event){
  //tirando o comportamento padrão do botão de recarregar a página
  event.preventDefault();
  //acessando o formulário
  let form = document.querySelector("#form-adiciona");

  //chamando a função para obter infos dos pacientes
  let paciente = obtemPacienteDoFormulario(form); //retorna um objeto 

  //chamando a função para montar a tabela
  let pacienteTr = montaTr(paciente);

  //validação do form

  let erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMsgErro(erros);
    return;
  }

  //adicionando o paciente na tabela
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  //limpando os campos do form
  form.reset();
  let mensagemErro = document.querySelector("#mensagem-erro");
  mensagemErro.innerHTML = "";
  
});

function obtemPacienteDoFormulario(form){
  //criando objeto paciente
  let paciente = {
    //pegando os valores dos inputs
    nome:form.nome.value,
    peso:form.peso.value,
    altura:  form.altura.value,
    gordura:form.gordura.value,
    imc:calculaImc(form.peso.value,form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  //criando um elemento em HTML
  let pacienteTr = document.createElement("tr");
  //adicionando a classe paciente no tr criado
  pacienteTr.classList.add("paciente");

  //adicionando os td dentro de tr chamando a função e mandando como parametro
  // as infos e o nome da classe
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado,classe){
  //criando elemento html
  let td = document.createElement("td");
  //colocando o valor dos td
  td.textContent = dado;
  //adicionando a classe
  td.classList.add(classe);

  return td;
}


function validaPaciente(paciente){

  let erros = [];
  if(paciente.nome.length == 0 || 
    paciente.gordura.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0)
    erros.push("Preencha todos os campos") 
  if(!validaPeso(paciente.peso))
    erros.push("Peso Inválido");
  if(!validaAltura(paciente.altura))
    erros.push(" Altura Inválida");
  return erros;
}

function exibeMsgErro(erros){
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}