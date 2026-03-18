console.log("AntesdoTimeOut")
let frase = "Rodando o setTimeout";
const timeout = setTimeout(() => console.log("executando o timeout"),3000);

 frase = "Rodando o clearTimeout";


 if (frase !== "Rodando o setTimeout"){
    clearTimeout(timeout)
    console.log(frase);
 }
console.log("Depois do setTimeout");
