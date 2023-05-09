function somaNumeros() {
    
n=null
soma =null

while(n!=0){
    
     n=parseFloat(prompt("Digite um número:"))
     soma += n

}

return soma

}
console.log(somaNumeros())



const numeros = [1,5,20,34,3,4];


function maiorNumero(numeros) {

    let maior = 0;

    for(i = 0; i < numeros.length; i++){

        
        if(numeros[i] > maior){
            
            maior = numeros[i];

        }

    }
        return maior;
}

console.log(maiorNumero(numeros))





function criaFrase(){

    const arrayPalavras = ['Oi','sumido','tudo','bem?','Saudades']
    let frase ='';

    for(let palavra of arrayPalavras){

            frase = frase + palavra + ' '
        
    }

    return frase
}

console.log(criaFrase())


let paises = ['Brasil','Argentina','Russia']

let contador = 1
for(pais of paises){

    switch(pais) {
        case 'Brasil':
            console.log(contador++  + ' '+ pais + '/BR')
            break

        case 'Argentina':
            console.log(contador++  + ' '+ pais + '/AR')
            break

        case 'Russia':
            console.log(contador++  + ' '+ pais + '/RU')
            break

        default:
            console.log('País não encontrado')
            break
    }
}