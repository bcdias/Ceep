<<<<<<< HEAD
# Ceep

![imagem do aplicativo](/assets/print.png);

Projeto desenvolvido durante o curso “JS na Web: Manipule o DOM com JavaScript” da plataforma Alura.  
O Ceep é uma aplicação de notas onde o usuário pode cria uma lista de notas com as tarefas precisão ser realizadas, por exemplo, dar banho nos cachorros. 

<h4 align="center"> 
    Projeto concluido
</h4>

## :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: Criar listada de tarefa
- `Funcionalidade 2`: Marcar uma tarefa como concluida
- `Funcionalidade 3`: Excluir tarefas
- `Funcionalidade 4`: Marcar tarefa como prioritária

## :heavy_check_mark: Técnologias utilizadas

* HTML
* CSS
* JavaScript

## :dart: Objetivo

O objetivo principal do projeto foi aprende a utiliza JavaScript para selecionar, alterar, criar, e remover elementos do DOM.

## :closed_book: Aprendizados 

Durante o curso aprendi que o Document Object Model (DOM) é uma representação do documento HTML, criada pelo navegador, estruturada como uma árvore de objetos. Através do HTML DOM é possível alterar, adicionar ou excluir elementos HTML.

Outro aprendizado que obtive durante o curso foi como percorrer a árvore do DOM e encontrar o elemento que desejamos utilizar. Para isso podemos usar diversos métodos, por exemplo: 

* document.querySelector(seletor)
* document.getElementById(‘id’)
* document.getElementsByClassName(‘classe’)
* document.getElementsByTagName(‘tag’)
* document.querySelectorAll(seletor)

Apesar de existirem diversas formas de percorrer o DOM e encontrar um elemento, aprendi durante o curso que uma boa pratica é usar o data atributo como seletor e assim separar os seletores usados por CSS e dos usados pelo JS. 

Para essa aplicação funcionar foi necessário aprender como escutar um evento em um elemento, que aqui na aplicação foi o clicar dos botões. Para isso foi utilizado o método aadEventListener(type,listener[, options]).
Esse método foi utilizado para escutar o evento de clique nos botões e em seguida dispara a função que realiza o comportamento esperado para cada funcionalidade. 

Diversos aprendizados foram obtidos durante a elaboração das funcionalidade (criar nova tarefa, concluir tarefa e deletar tarefa), por exemplo:

* Criar um elemento usando o método .creatElement
* Cancelar um evento com o método .preventDefault(), assim impedindo que a ação padrão do evento ocorra (nesse caso evitar que o formulário seja enviado ao clicar no botão "nova nota")
* usar o método .appendChild() para organizar a hierarquia dos elementos crias, informando quem é o elemento pai e quem é o elemento filho
* Adicionar classe CSS com classList.add() e adicionar e remover classe CSS com classList.toggle()
* Utilizar o método parentELement para subir um elemento na árvore do DOM
* Encontrar o alvo de um elemento com a propriedade target
* Remover elemento do DOM com o método remove
* Usar o export e o import para trabalhar com módulos

## Desafio pessoal, indo além do projeto do curso

Após terminar o curso resolvi me desafiar e ir um pouco além. Como o objetivo do curso era aprender manipular o DOM, o curso forneceu o HTML e o CSS. Além disso as funcionalidades descritas foram todas ensinadas durante o curso. 
Para ir além, resolvi criar uma funcionalidade que não constava no projeto. A funcionalidade escolhida foi a opção de marcar uma tarefa como prioridade. 

Para esse desafio decidi que as tarefas prioritárias teriam um estilo diferente das demais e sempre teriam seriam adicionadas no início da lista, alterando o comportamento padrão do método appendChild que sempre adiciona o novo elemento no final da lista. 

Para destacar as tarefas prioritárias das demais, criei uma classe CSS chamada .task-priority e na função criarTarefa adicionei uma estrutura condicional para dizer qual a condição deve ser satisfeita para classe .task-priority ser adicionada a tag li.

Para sempre adicionar uma tarefa no início da lista precisei aprender como utilizar a função insertBefore(), que me permite dizer qual elemento vai ser inserido no DOM e na frente de qual nó ele será inserido. Além de aprender como usar a propriedade childNode, que retorna uma coleção de nós filhos de um determinado elemento, o que me permitiu dizer que as tarefas prioritárias sempre devem entrar na posição 0 da listas de filhos do elemento ul.

