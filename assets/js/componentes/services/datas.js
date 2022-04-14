export const removeDatasRepetidas = (datas) => {

    const datasUnicas = []
    datas.forEach(data => {
        if (datasUnicas.indexOf(data.dataFormatada) === -1) {
            datasUnicas.push(data.dataFormatada)
        }
    })
    return datasUnicas
}

export const ordenaDatas = (data) => {

    data.sort((data1, data2) => {
        const primeiraData = moment(data1, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(data2, 'DD/MM/YYYY').format('YYYYMMDD')
        return primeiraData - segundaData
    })
}