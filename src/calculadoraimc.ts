import promptSync from 'prompt-sync';

const prompt = promptSync();


const historicoNomes: string[] = [];
const historicoIMC: number[] = [];
const historicoStatus: string[] = [];


let opcao: string;

do {
    console.log("\n--- Calculadora de IMC ---");
    console.log("1. Novo Cálculo");
    console.log("2. Histórico de Consultas");
    console.log("0. Sair");
    
    opcao = prompt("Escolha uma opção: ") as string;

    switch (opcao) {
        case '1': {
            console.log("\n-- Novo Cálculo --");
            
            
            const nome: string = prompt("Digite o seu nome: ") as string;
            const pesoStr: string = prompt("Digite o seu peso float: ") as string;
            const alturaStr: string = prompt("Digite a sua altura float: ") as string;

            const peso: number = parseFloat(pesoStr);
            const altura: number = parseFloat(alturaStr);

            if ( peso <= 0 || altura <= 0) {
                console.log("Valores inválidos.");
                break;
            }

            const imc: number = peso / (altura * altura);
            
            
            let status: string = ""; 

            if (imc < 18.5) {
                status = "Abaixo do peso";
            } else if (imc < 24.9) {
                status = "Peso normal";
            } else if (imc < 29.9) {
                status = "Sobrepeso";
            } else {
                status = "Obesidade";
            }

            console.log(`\nResultado: ${nome}, seu IMC é ${imc.toFixed(2)} (${status}).`);

            historicoNomes.push(nome);
            historicoIMC.push(imc);
            historicoStatus.push(status);
            break;
        } 

        case '2': { 
            console.log("\n--- Histórico de Consultas ---");
            if (historicoNomes.length === 0) {
                console.log("Nenhum cálculo foi realizado.");
            } else {
                
                for (let i: number = 0; i < historicoNomes.length; i++) {
                    console.log(`${i + 1}. Nome: ${historicoNomes[i]} | IMC: ${historicoIMC[i]?.toFixed(2)} | Classificação: ${historicoStatus[i]}`);
                }
            }
            break;
        }

        case '0':
            console.log("\nfim.");
            break;

        default:
            console.log("\nOpção inválida.");
            break;
    }

} while (opcao !== '0');