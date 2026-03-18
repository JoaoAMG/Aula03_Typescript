//setInterval(() => console.log("Executando o programa"),1000)
//console.log("Depois do interval");

let contador = 0

const interval = setInterval(()=> {
    contador++
    console.log("Rodando o interval")
    if(contador == 3){
    console.log("interval cancelado")
    clearInterval(interval)    
}
},700);

console.log("Depois do interval...")

