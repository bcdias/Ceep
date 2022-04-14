// Criando botão concluir
const CriaBotaoConcluir = (id,atualiza) => {
    const botaoConcluir = document.createElement('button');

    botaoConcluir.classList.add('check-button');

    botaoConcluir.innerText = 'Concluida';

    botaoConcluir.addEventListener('click', () => concluirTarefa(id,atualiza));
    return botaoConcluir;
}

const concluirTarefa = (id, atualiza) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida

  localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
  
  atualiza()

}

export default CriaBotaoConcluir