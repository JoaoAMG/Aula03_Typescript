function potencia (a : number , b : number ) : number {
      let valor = 0
    for(let i = 1 ; i<=b ; i++){
        valor += a*a

    }
    return valor ;
     }


     console.log(potencia(3,3))