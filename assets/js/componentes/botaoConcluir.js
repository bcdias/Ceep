// Criando botão concluir
const CriaBotaoConcluir = () => {

    // Criando elemento botão
    const botaoConcluir = document.createElement('button');

    // Adicionando classe css ao botão
    botaoConcluir.classList.add('check-button');


    // Adicionando texto ao botão
    botaoConcluir.innerText = 'Concluida';


    // Escutando o botão
    botaoConcluir.addEventListener('click', concluirTarefa);
    return botaoConcluir;
}

// Criando função que adiciona estilo a tarefa marcada como concluída
const concluirTarefa = (evento) => {
     
    // Criando um identificador para saber qual o botão que foi clicado
    const identificaBotao = evento.target

    // Pegando o pai do elemento que foi clicado para alterar o css do pai
    const identificaDiv = identificaBotao.parentElement;

    const tarefaConcluida = identificaDiv.parentElement;

    // Alterando o estilo css do elemento pai que está contido em tarefaConcluida
    tarefaConcluida.classList.toggle('done');

}

export default CriaBotaoConcluir