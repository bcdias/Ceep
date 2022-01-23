// Função que cria nova tarefa
const criarTarefa = (evento) => {

    // Previnindo comportamento pardão de envido do formulário
    evento.preventDefault();

    // Capiturando dados com data seletores
    const input = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    
    // Acessando o valor capturado
    const valor = input.value;

    // Criando elemento no DOM
    const tarefa = document.createElement('li');
    
    //Criando o template que vai ser inserido na <li>
    const conteudo = `<p class="content">${valor}</p>`;

    // Inserindo o dado capturado no elemento criado dinamicamente
    tarefa.innerHTML =conteudo;
    
    // Informando a hierarquia dos elementos
    lista.appendChild(tarefa);
    
    // Adicionando a classe CSS que vai estilizar a tag <li>
    tarefa.classList.add('task')
    
    input.value = '';
}

// capturando o botao
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando o botão e realizado uma ação quando o evento for disparado
novaTarefa.addEventListener('click', criarTarefa);