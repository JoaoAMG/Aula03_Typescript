import { Fabricante } from "./Fabricante"
	
	export class Produto {
		private static contadorID = 1
		
		id: number
		nome: string
		preco: number
		fabricante: Fabricante
		
		constructor(nome: string, preco: number, fabricante: Fabricante) {
			this.id = Produto.contadorID++
			this.nome = nome
			this.preco = preco
			this.fabricante = fabricante
		}
	}