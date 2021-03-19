//
let botaoAdicionar = document.querySelector("#adicionar-paciente");
//eventListener quando clicar no botão
botaoAdicionar.addEventListener("click", function(event){

  //tirando o comportamento padrão do botão de recarregar a página
  event.preventDefault();
  
  //acessando o formulário
  let form = document.querySelector("#form-adiciona");

  //pegando os valores dos inputs
  let nome = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  //criando um elemento em HTML
  let pacienteTr = document.createElement("tr");
  let nomeTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");

  //colocando os valores de cada td
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  //adicionando os td dentro de tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  //trazendo o tr para a tabela que ja existia
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  
});