import CriaBotaoConcluir from './botaoConcluir.js'
import DeletaTarefa from './botaoDeletarTarefa.js'

    // Função que cria nova tarefa
    const criarTarefa = (evento) => {

    // Previnindo comportamento pardão de envido do formulário
    evento.preventDefault();

    // Capiturando dados com data seletores
    const input = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    const primeiroDaLista = document.querySelector('[data-list-ul]');
    const prioridade = document.querySelector('[data-form-priority]');


    // Acessando o valor capturado
    const valor = input.value;
    const checada = prioridade.checked
    

    // Criando elemento no DOM
    const tarefa = document.createElement('li');
    const agrupaBotoes =document.createElement('div');

    // Adicionando classe CSS a div
    agrupaBotoes.classList.add('task-button')

    //Criando o template que vai ser inserido na <li>
    const conteudo = `<p class="content">${valor}</p>`;

    // Inserindo o dado capturado no elemento criado dinamicamente
    tarefa.innerHTML = conteudo;

    // Informando a hierarquia dos elementos
    lista.appendChild(tarefa);
    tarefa.appendChild(agrupaBotoes)
    agrupaBotoes.appendChild(CriaBotaoConcluir());
    agrupaBotoes.appendChild(DeletaTarefa());

    // Verificando se adiciona prioridade ou não
    if(checada){
        // Adicionando classe prioridade e hierarqui de prioridade
        primeiroDaLista.insertBefore(tarefa, primeiroDaLista.childNodes[0]);
        tarefa.classList.add('task-priority');
    }else{
        // Adicionando a classe CSS que vai estilizar a tag <li>
        tarefa.classList.add('task');
    }

    agrupaBotoes.classList.add('agrupa-botao'),

    // Limpando o Input
    input.value = '';
}

// capturando o botao
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando o botão e realizado uma ação quando o evento for disparado
novaTarefa.addEventListener('click', criarTarefa);


