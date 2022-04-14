import CriaBotaoConcluir from './botaoConcluir.js'
import DeletaTarefa from './botaoDeletarTarefa.js'
import { carregaTarefas } from './carregaTarefas.js';


const Tarefa = ({valor, dataFormatada, horaFormatada, prioridade, concluida}, id) => {
    const tarefa = document.createElement('li');
    const agrupaBotoes = document.createElement('div');

    const conteudo = `<p class="content">${horaFormatada} - ${valor}</p>`;

    if(concluida){
        tarefa.classList.add('done')
    }

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(agrupaBotoes)
    agrupaBotoes.appendChild(CriaBotaoConcluir(id, carregaTarefas));
    agrupaBotoes.appendChild(DeletaTarefa(id, carregaTarefas));

    agrupaBotoes.classList.add('task-button');
    agrupaBotoes.classList.add('agrupa-botao');

    const tarefaLi = {tarefa, dataFormatada, prioridade, id}
    return tarefaLi

}

export default Tarefa
