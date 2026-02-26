let nomes: string[] = ["Ana", "João", "Elvis"];

console.log(nomes);


let numeros: number[] = [1, 2, 3, 4];

console.log("Numeros pos 01: ", numeros[1])

console.log(nomes.indexOf("João"))

nomes.splice(1,1)

console.log("Depois do splice: ", nomes)

nomes.splice(0)

console.log("Depois do splice: ", nomes)

nomes.splice(-1,1)

console.log("Depois do splice: ", nomes)

let years: Array< number > = [20,30,40];

let fruits: string[] = ["Banana", "Maçã"];

fruits.push("Pera") // adiciona no final da lista

console.log(fruits);

fruits.unshift("Uva") // adiciona no inicio da lista

fruits.pop(); // remove a ultima posiçãp

fruits.shift(); // remove o primeiro elemento 

console.log(fruits[0]);

console.log(fruits.length);