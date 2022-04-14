import { carregaTarefas } from "./componentes/carregaTarefas.js";
import criarNovaTarefa from "./componentes/criarNovaTarefa.js";

// Capturando o Botão
const novaTarefa = document.querySelector('[data-form-button]');

// Escutando o botão e realizado uma ação quando o evento for disparado
novaTarefa.addEventListener('click', criarNovaTarefa);

carregaTarefas()
