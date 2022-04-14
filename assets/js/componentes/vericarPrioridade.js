

const verificaPrioridade = ({ tarefa, prioridade, dataFormatada }) => {

    if (prioridade) {
        tarefa.classList.add('task-priority');
    } else {
        tarefa.classList.add('task');
    }

    const tarefaComClasse = { tarefa, prioridade, dataFormatada }
    return tarefaComClasse
}

export default verificaPrioridade