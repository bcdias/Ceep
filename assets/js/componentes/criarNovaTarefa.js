import { carregaTarefas } from "./carregaTarefas.js";

const criarNovaTarefa = (event) => {
    event.preventDefault(event);

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const input = document.querySelector('[data-form-input]');
    const dataHora = document.querySelector('[ data-form-data]');
    const checado = document.querySelector('[data-form-priority]');


    const valor = input.value;
    const data = moment(dataHora.value);
    const dataFormatada = data.format('DD/MM/YYYY');
    const horaFormatada = data.format('HH:mm');
    const prioridade = checado.checked;

    let dados = {};
    let concluida = false;
    if(valor.length > 0){
        // Criando um objeto com os dados
        dados = {
            valor,
            dataFormatada,
            horaFormatada,
            prioridade,
            concluida
        }
    }else{
        return
    }

    const tarefasAtulizadas = [...tarefas, dados]
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtulizadas))
    
    input.value = '';
    dataHora.value = ' ';
    carregaTarefas()

}

export default criarNovaTarefa
