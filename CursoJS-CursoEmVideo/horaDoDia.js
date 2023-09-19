
function verificar(){
  var date = new Date()
  var hour = date.getHours()
  
  var image = document.querySelector("#imageBox")
  var paragrafoHour = document.querySelector("#hora")
  var body = document.body
  
  if (hour >= 0 && hour < 12){
    body.style.backgroundColor = "#ffd990"
    paragrafoHour.innerText = `Agora é de manha as ${hour}`
    image.innerHTML = '<img src="images/dia.jpg" alt="imagem de um dia bem lindo" id="image">'
  }else if (hour < 18){
    body.style.backgroundColor = "#e07d21"
    paragrafoHour.innerHTML = `Agora é de tarde as ${hour}`
    image.innerHTML = '<img src="images/tarde.jpg" alt="imagem de um final de dia bem alaranjado" id="image">'
  }else if (hour <= 23){
    body.style.background = "#150edc"
    paragrafoHour.innerHTML = `Agora é a noite as ${hour}`
    image.innerHTML = '<img src="images/noite.jpg" alt="uma noite bastante estrelada" id="image">'
  }
}
verificar()


