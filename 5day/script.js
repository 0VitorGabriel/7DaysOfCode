const laticinios = []
const frutas = []
const doces = []
const congelados = []

const resposta = prompt('você deseja adicionar uma comida na lista de compras?')

if (resposta == 'sim') {
    while (true) {
        const comida = prompt('qual comida você quer inserir?').toLowerCase()
        const categoria = prompt('em qual categoria essa comida se encaixa? opções: laticinios, frutas, doces, congelados')
    
        if (categoria == 'laticinios') {
            laticinios.push(comida)
        } else if (categoria == 'frutas') {
            frutas.push(comida)
        } else if (categoria == 'doces') {
            doces.push(comida)
        } else if (categoria == 'congelados') {
            congelados.push(comida)
        } 

        const continuar = prompt('deseja continuar adicionando comidas a sua lista de compras? 1 - sim 0 - não')

        if (continuar == 0) {
            alert('laticinios: ' + laticinios + '\n' + 'frutas: ' + frutas + '\n' + 'doces: ' + doces + '\n' + 'congelados: ' + congelados)
            break
        } 
    }

}