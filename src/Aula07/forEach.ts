// array.forEach ( callback : ( value : T, index : number , array : T[]) => void ): void
const numbers = [1,2,3,4,5];
 const frutas : string [] = ['Maca ', 'Banana ', 'Uva '];

 frutas . forEach (( item , index ) => {
 console . log (`${index}: ${item}`) ;
 }) ;

 let contador: number =0


 numbers.forEach(item => {
    contador+= item

 })

 numbers.forEach((n, index) => { // algo que nao se deve fazer, foreach  deve ser usado somente para Impressão
    n = n*2

 })
 type Produto = {id: number, nome:string, preco:number}
 const produtos: Produto[] = [
    {id:1,nome:  'Mouse', preco: 50},
    {id:2,nome:  'Mousepad', preco: 150}
 ];
produtos.forEach(p => {
    p.nome = p.nome + "Qualquer coisa"


})


