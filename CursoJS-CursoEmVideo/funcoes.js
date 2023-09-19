
function parimp(n){
  if (n % 2 == 0){
    return "Par"
  }else {
    return "Impar"
  }
}
console.log(parimp(223))

function soma (n1,n2){
  let soma = n1 + n2;
  return soma
}

console.log(soma(3,2))

function fatorial(n){
	if (n == 1){
		return 1
	}else{
		return n * fatorial(n - 1)
	}
}
console.log(fatorial(5))