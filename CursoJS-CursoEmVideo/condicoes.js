function verificar(){
  let vel = document.querySelector("input#velocimetro")
  let result = document.querySelector("div#result")

  if (vel.value > 60){
    result.innerHTML = "Você <strong>ultrapassou</strong> o limite de velocidade e esta <strong>multado</strong>"
  }else{
    result.innerHTML = ""
  }
}

function verificarPais(){
  let pais = document.querySelector("#pais")
  let result = document.querySelector("#resultPais")

  if (pais.value == "Brasil"){
    result.innerHTML = "Bem vindo meu amigo brasileiro"
  }else{
    result.innerHTML = "Bem vindo meu amigo gringo"
  }
}

function verificarIdade(){
  let idade = document.querySelector("#idade").value
  let result3 = document.querySelector("#resultIdade")

  if (idade < 16){
    result3.innerHTML = "Não vota"
  }else if (idade < 18){
    result3.innerHTML = "Voto Opcional"
  }else if (idade >= 18 && idade < 65){
    result3.innerHTML = "Voto Obrigatório"
  }else{
    result3.innerHTML = "Voto Opcional"
  }
}

switch(diaSem){
  case 0:
    console.log("Hoje é domingo")
    break
  case 1:
    console.log("Hoje é Segunda")
    break
  case 2:
    console.log("Hoje é Terça")
    break
  case 3:
    console.log("Hoje é Quarta")
    break
  case 4:
    console.log("Hoje é Quinta")
    break
  case 5:
    console.log("Hoje é Sexta")
    break
  case 6:
    console.log("Hoje é Sábado")
    break
  default:
    console.log("Dia invalido")
}