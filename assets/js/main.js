import CriaBotaoConcluir from './componentes/botaoConcluir.js'
import DeletaTarefa from './componentes/botaoDeletarTarefa.js'

    // Função que cria nova tarefa
    const criarTarefa = (evento) => {

    // Prevenindo comportamento padrão de envido do formulário
    evento.preventDefault();

    // Capturando elementos do DOM com seletor 
    const input = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list-ul]');
    const prioridade = document.querySelector('[data-form-priority]');

    // Obtendo valor dos inputs 
    const valor = input.value;
    const checada = prioridade.checked
    
    // Criando elemento no DOM
    const tarefa = document.createElement('li');
    const agrupaBotoes =document.createElement('div');

    //Criando conteúdo que será adicionado no elemento <li>
    const conteudo = `<p class="content">${valor}</p>`;

    // Inserindo conteúdo na tag li criada 
    tarefa.innerHTML = conteudo;

    // Informando a hierarquia dos elementos
    lista.appendChild(tarefa);
    tarefa.appendChild(agrupaBotoes)
    agrupaBotoes.appendChild(CriaBotaoConcluir());
    agrupaBotoes.appendChild(DeletaTarefa());

     // Adicionando classe CSS aos elementos
     agrupaBotoes.classList.add('task-button');
     agrupaBotoes.classList.add('agrupa-botao');

    // Verificando se adiciona prioridade ou não
    if(checada){
        // Adicionando classe prioridade e hierarqui de prioridade
        lista.insertBefore(tarefa, lista.childNodes[0]);
        tarefa.classList.add('task-priority');
    }else{
        // Adicionando a classe CSS que vai estilizar a tag <li>
        tarefa.classList.add('task');
    }

    // Limpando o Input
    input.value = '';
}

// Capturando o Botão
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando o botão e realizado uma ação quando o evento for disparado
novaTarefa.addEventListener('click', criarTarefa);


