import agrupaPorData from "./agrupaPorData.js";
import { ordenaDatas, removeDatasRepetidas } from "./services/datas.js";

export const carregaTarefas = () => {
    const lista = document.querySelector('[data-list-ul]');
    const tarefasCarregadas = JSON.parse(localStorage.getItem('tarefas')) || [];
   
    lista.innerHTML = " "  
    const datasUnicas = removeDatasRepetidas(tarefasCarregadas) 
    ordenaDatas(datasUnicas) 

    datasUnicas.forEach(data =>{
        lista.appendChild(agrupaPorData(data))
    })
}