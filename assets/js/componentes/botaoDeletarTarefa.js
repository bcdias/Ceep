
// Criando funcionalidade deletar tarefa

const DeletaTarefa = () => {

    // Criando elemento botão deletar tarefa
    const botaoDeletarTarefa = document.createElement('button');

    // Adicionando texto ao botão
    botaoDeletarTarefa.innerText = 'Deletar';

    // Adicionando estilo Css
    botaoDeletarTarefa.classList.add('delete-button');

    // Verificando evento e chamando função
    botaoDeletarTarefa.addEventListener('click', deletarTarefa);
    
    return botaoDeletarTarefa;
    
}

// Criando função deletar tarefa
const deletarTarefa = (evento) => {

    // Selecionando botão clicado
    const verifiarBotao = evento.target;

    // Capturando elemento pai do botão
    const tarefaDeletada = verifiarBotao.parentElement;

    const verificaDiv = tarefaDeletada.parentElement;

    // Removendo tarefa
    verificaDiv.remove();

}

export default DeletaTarefa;