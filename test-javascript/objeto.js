let amigo = {nome:'José', 
sexo:'M',
peso: 58.5,
engordar(p=0){
  this.peso += p
}}
console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)
amigo.engordar(10)
console.log(amigo.peso)

