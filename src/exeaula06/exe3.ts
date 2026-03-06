function potencia (a : number , b : number ) : number {
    let valor = 0
    let numerospos:  Array< number >
    let numeros: number[] = [1, 2, 3, 4];
    
  for(let i = 1 ; i<= numeros.length ; i++){
      numerospos.unshift(numeros[i])
  }
  return valor ;
   }


   console.log(potencia(3,3))