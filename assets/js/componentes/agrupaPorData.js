import Tarefa from "./Tarefa.js"
import verificaPrioridade from "./vericarPrioridade.js";


const agrupaPorData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataTopo = document.createElement('li')
    const dataMoment =  moment(data, 'DD/MM/YYYY')
    const conteudo = `<p class="content"> ${data}</p>`

    dataTopo.innerHTML = conteudo

    tarefas.forEach((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
        const tarefaCriada = Tarefa(tarefa, id)
        const taresVeridicadas = verificaPrioridade(tarefaCriada)
        const diff = dataMoment.diff(dia)
        if(diff === 0){
            if (taresVeridicadas.prioridade) {
                dataTopo.insertBefore(taresVeridicadas.tarefa, dataTopo.children[1])
            }else{
                dataTopo.appendChild(taresVeridicadas.tarefa)
            }
        }
    })

    return dataTopo
}

export default agrupaPorData