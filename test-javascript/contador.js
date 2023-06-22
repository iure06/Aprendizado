function contagem(){
  let inputInicio = document.getElementById("inicio")
  let inputFim = document.getElementById("fim")
  let inputPasso = document.getElementById("passo")



  let inicio = Number(inputInicio.value)
  let fim = Number(inputFim.value)
  let passo = Number(inputPasso.value)
  let result = document.getElementById("resposta")

  console.log(inputInicio.value.length)

  if (inputInicio.value.length != 0 && inputFim.value.length != 0 && inputPasso.value.length != 0){
    if (passo == 0){
      passo = 1
    }

    result.innerHTML = "Contagem: "

    if (inicio < fim){
      for (let i = inicio; i <= fim; i += passo){
        result.innerHTML += `${i} \u{1F449} `
      }  
    }else{
      for (let i = inicio; i >= fim; i -= passo){
        result.innerHTML += `${i} \u{1F449} `
      }  
    }

    result.innerHTML += `\u{1F3C1}`
  }else{
    result.innerHTML = "Dados Invalidos"
  }


}