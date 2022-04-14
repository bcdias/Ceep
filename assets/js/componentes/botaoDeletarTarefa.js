
// Criando funcionalidade deletar tarefa

const DeletaTarefa = (id, atualiza) => {

    const botaoDeletarTarefa = document.createElement('button');

    botaoDeletarTarefa.innerText = 'Deletar';

    botaoDeletarTarefa.classList.add('delete-button');

    botaoDeletarTarefa.addEventListener('click', () => deletarTarefa(id, atualiza));
    
    return botaoDeletarTarefa;
    
}

const deletarTarefa = (id, atualiza) => {

    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
     
}

export default DeletaTarefa;