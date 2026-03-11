// array .map <U >( callback : ( value : T, index : number ) = > U): U[]
 const numeros : number [] = [1 , 2 , 3];
 const dobro = numeros.map(n=> n * 2);
 const strings : string [] = numeros.map ( n => `Numero $ { n }`);
 console.log(dobro);
 console.log(strings);

 type Produto = {id: number, nome:string, preco:number}
 const produtos: Produto[] = [
    {id:1,nome:  'Mouse', preco: 50},
    {id:2,nome:  'Mousepad', preco: 150}
 ];

 const nomes: string[] = produtos.map(p => p.nome)

 const listaformata = produtos.map(p=> ({

    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true


 }))

 console.log(listaformata)