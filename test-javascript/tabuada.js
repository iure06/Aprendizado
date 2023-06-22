function generate(){
  let inputTabuada = document.getElementById('InputTabu')
  let numberTabuada = Number(inputTabuada.value)
  let resul = document.getElementById('resposta')
  
  
  if (inputTabuada.value.length != 0){
    resul.innerHTML = `Abaixo esta listada toda a tabuada do ${numberTabuada} <br>`
    for (let i = 1; i <= 10; i++){
      resul.innerHTML += `${numberTabuada} X ${i} = ${(numberTabuada * i)} <br>`
  
    }
  }else{
    window.alert("Error: O campo de número esta vazio")
  }
}