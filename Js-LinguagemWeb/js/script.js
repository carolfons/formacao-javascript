let titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){

  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");
  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if(!pesoValido){
    pesoValido = false;
    tdImc.textContent = 'Peso Inválido!';
    //adicionando uma classe para o CSS, dando acesso à lista de classes
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaValida){
    alturaValida = false;
    tdImc.textContent = 'Altura Inválida!';
    paciente.classList.add("paciente-invalido");
  }
  //imc do Paulo
  if(alturaValida && pesoValido){

    let imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso,altura){
  let imc = 0;

  imc = peso/(altura*altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >= 0 && peso < 500){
    return true;
  }
  else{
    return false
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura < 3.00){
    return true;
  }else{
    return false;
  }
}


