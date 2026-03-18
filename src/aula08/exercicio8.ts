// Exemplo de chamada :
 type Tarefa = {descricao: string, prioridade:number, concluida:boolean} // implemente

const tarefas: Tarefa[] = [
{ descricao : " Fazer relatório ", prioridade : 2 , concluida : false } ,
 { descricao : " Enviar e- mail ", prioridade : 3 , concluida : false } ,
 { descricao : " Reuni ão com equipe ", prioridade : 1 , concluida : false }
 ];

 function imprimirTarefa ( descricao : string , indice : number , totalTarefas :
number ) : void {
 console . log (` Tarefa conclu í da : $ { descricao }`) ;
 console . log (` Progresso : $ { indice + 1}/ $ { totalTarefas }`) ;
 }

 // implemente a função executarTarefas

 executarTarefas(tarefas,imprimirTarefa,1500);
