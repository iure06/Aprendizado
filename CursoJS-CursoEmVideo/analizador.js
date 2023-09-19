let numbers = []
let inputNumber = document.getElementById("inputNumber")
let select = document.getElementById("selectNumber")
let resposta = document.getElementById("resposta")


function add(){
  let number = Number(inputNumber.value)

  if (inputNumber.value.length == 0 || number < 0 || number  > 100){
    window.alert("Dados Inválidos, por favor conferir e tentar novamente")
  }else{
    let busca = numbers.indexOf(number)

    if (busca == -1){
      select.innerHTML += `<p>O valor ${number} adicionado.</p>`
      numbers.push(number)
    }else{
      window.alert("Valor já cadastrado")
    }
  }

  inputNumber.value = ""
  resposta.innerHTML = ""
  
}

function final(){
  if (numbers.length != 0){
    let min = 0
    let max = 0
    let soma = 0
    let media = 0
    for (let i = 0; i < numbers.length; i++){
      if (i == 0){
        max = numbers[i]
        min = numbers[i]
      }else{
        if (numbers[i] > max){
          max = numbers[i]
        }
        if (numbers[i] < min){
          min = numbers[i]
        }
      }
      soma += numbers[i]
    }

    media = soma / numbers.length
  
  
    resposta.innerHTML += `<p>Ao todo temos ${numbers.length} números cadastrados</p>`
    resposta.innerHTML += `<p>O maior valor informado foi ${max}</p>`
    resposta.innerHTML += `<p>O menor valor informado foi ${min}</p>`
    resposta.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    resposta.innerHTML += `<p>A média desse valores é ${media}</p>`

  }else{
    window.alert("Digite pelo menos um valor para finalizar")
  }
  

  

}