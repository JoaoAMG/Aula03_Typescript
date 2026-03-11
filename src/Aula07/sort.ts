const numberx = [22 , 11 , 7 , 80 , 1 , 2 , 3, 4 , 5];

numberx.sort((a,b) => a -b); //crescente
numberx.sort((a,b) => b -a); //decrescente

console.log(numberx)

const arquivos: string[] = ["item10.png", "item01.png","item09.png","item02.png"]

arquivos.sort((a,b) => a.localeCompare(b)); // ordena string em ordem alfabetica

console.log(arquivos)

"anisio".localeCompare("ANISIO",  undefined,{sensitivity:'base'}) // verifica se o nome é igual ignorando se é maiuscula ou minuscula

"teste".toLowerCase().localeCompare("TESTE".toLowerCase()) // OUTRA FORMA DE FAZER O  DE CIMA