import express, { Request, Response } from "express";
import { Produto } from "./Produto";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const produtos: Produto[] = [];


function filtraProdutoPorID(req: Request, res: Response): void {
    try {
        let id = Number(req.params.id)

        if (!id) {
            res.status(400).json({
                Message: "ID inválido"
            })
            return
        }

        let produtoid = produtos.find(u => u.id === id)

        if (!produtoid) {
            res.status(404).json({
                Message: "Produto não encontrado"
            })
            return
        }
        res.status(200).json(produtoid)

    } catch (e: unknown) {
        res.status(500).json({ Message: "Erro interno da aplicação" })
    }
}

function filtrarProdutoPorNome(req: Request, res: Response): void {
    try {
        let name = req.params.name as string

        if (!name) {
            res.status(400).json({
                Message: "Necessario informar um nome valido"
            })
            return
        }  
     
        const produtoname = produtos.find(u => u.nome.toLowerCase() === name.toLowerCase())

        if (!produtoname) {
            res.status(404).json({
                Message: "Produto não encontrado"
            })
            return
        }

        res.status(200).json(produtoname)

    } catch (e: unknown) {
        res.status(500).json({ Message: "Erro interno da aplicação" })
    }
}


function novoProduto(req: Request, res: Response): void {
    try {
        let data: any = req.body

        if (data.preco <= 0) {
            res.status(400).json({
                Message: "O preço deve ser maior que zero"
            })
            return
        }
        
        if (!data.nome || !data.fabricante.nome || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais) {
            throw new Error("Produto requer nome, preço e fabricante")
        }

        const produto = new Produto(data.nome, data.preco, data.fabricante)
        produtos.push(produto)
        res.status(200).json(produto)

    } catch (e: unknown) {
        res.status(400).json({ Message: (e as Error).message })
    }
}

function listarProdutos(req: Request, res: Response): void{
    res.status(200).json(produtos);
};


function atualizarProduto(req: Request, res: Response): void{
    try{
        let id = Number(req.params.id)
        let data: any = req.body
    
        if(!id){
            res.status(400).json({
                Message:"ID inválido"
            })
            return
        }

        const produto = produtos.find(p => p.id === id)
        
        if(!produto){
            res.status(404).json({
                Message: "Produto não encontrado"
            })
            return
        }

        produto.nome = data.nome
        produto.preco = data.preco
        produto.fabricante = data.fabricante

        res.status(200).json({
            Message: "Produto atualizado", 
            produto
        })
    } catch( e: unknown){
        res.status(500).json({
            Message: "Erro interno da aplicação"
        })
    }
}

function deletarProduto(req: Request, res: Response){
     try{
        let id = Number(req.params.id)
    
        if(!id){
            res.status(400).json({
                Message:"ID inválido"
            })
            return
        }

        const index = produtos.findIndex(p => p.id === id)
        
        if(index === -1){
            res.status(404).json({
                Message: "Produto não encontrado"
            })
            return
        }

        produtos.splice(index, 1)

        res.status(200).json({
            Message: "Produto deletado com sucesso" 
        })
    } catch( e: unknown){
        res.status(500).json({
            Message: "Erro interno da aplicação"
        })
    }   
}
app.get('/api/product/listall', listarProdutos)
app.get('/api/product/:id', filtraProdutoPorID)
app.get('/api/product/name/:name', filtrarProdutoPorNome)
app.post('/api/product', novoProduto)
app.put('/api/product/:id', atualizarProduto)
app.delete('/api/product/:id', deletarProduto)

app.listen(PORT, () => console.log(`API rodando na URL : http://localhost:${PORT}`));