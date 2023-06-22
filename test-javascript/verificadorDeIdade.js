function verificar(){
  let ano = document.querySelector("#ano").value
  let date = new Date()
  let anoAtual = date.getFullYear()
  

  if (ano == "" || ano > anoAtual){
    window.alert("[ERRO] dados invalidos!")
    image.style.display = "none"
    paragrafoS.style.display = "none"
  }else{
    let image = document.querySelector("#image")
    let paragrafoS = document.querySelector("#pSex")
    paragrafoS.style.display = "block"
    let sexo = document.getElementsByName("sexo")
    let idade = anoAtual - ano
    
    if (sexo[0].checked){

      if (idade >= 0 && idade < 12 ){
        paragrafoS.innerHTML = `Datectamos um menino de ${idade} anos`
        image.style.backgroundImage = "url(images/criancaM.jpg)"
        image.style.display = "block"

      }else if (idade >= 12 && idade < 18){
        paragrafoS.innerHTML = `Datectamos um adolescente de ${idade} ano

        console.log(sexo[0].checked)s`
        image.style.backgroundImage = "url(images/adolescenteM.jpg)"
        image.style.display = "block"

      }else if (idade >= 18 && idade < 65){
        paragrafoS.innerHTML = `Datectamos um homem de ${idade} anos`
        image.style.backgroundImage = "url(images/adultoM.jpg)"
        image.style.display = "block"

      }else if (idade >= 65 && idade < 99){
        paragrafoS.innerHTML = `Datectamos um idoso de ${idade} anos`
        image.style.backgroundImage = "url(images/velhoM.jpg)"
        image.style.display = "block"
      }else{
        paragrafoS.innerHTML = `Datectamos um homem muito muito velho de ${idade} anos`
        image.style.display = "none"

      }
  
    }else if (sexo[1].checked){
      if (idade >= 0 && idade < 12 ){
        paragrafoS.innerHTML = `Datectamos uma menina de ${idade} anos`
        image.style.backgroundImage = "url(images/criancaF.jpg)"
        image.style.display = "block"

      }else if (idade >= 12 && idade < 18){
        paragrafoS.innerHTML = `Datectamos uma adolescente de ${idade} anos`
        image.style.backgroundImage = "url(images/adolescenteF.jpg)"
        image.style.display = "block"

      }else if (idade >= 18 && idade < 65){
        paragrafoS.innerHTML = `Datectamos uma mulher de ${idade} anos`
        image.style.backgroundImage = "url(images/adultoF.jpg)"
        image.style.display = "block"

      }else if (idade >= 65 && idade < 99){
        paragrafoS.innerHTML = `Datectamos uma idosa de ${idade} anos`
        image.style.backgroundImage = "url(images/velhoF.jpg)"
        image.style.display = "block"
      }else{
        paragrafoS.innerHTML = `Datectamos uma mulher muito muito velho de ${idade} anos`
        image.style.display = "none"

      }
    }
  }


}