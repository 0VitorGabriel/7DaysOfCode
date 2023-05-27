const laticinios = []
const frutas = []
const doces = []
const congelados = []

const resposta = prompt('você deseja adicionar uma comida na lista de compras?')

if (resposta === 'sim') {
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

        const continuar = prompt('deseja continuar adicionando comidas a sua lista de compras? ou você quer excluir uma comida especifica? 1 - continuar 2 - excluir 3 - sair')

        if (continuar == 2) {
            const comidaExcluir = prompt('qual comida você que excluir? \n' + 'laticinios: ' + laticinios + '\n' + 'frutas: ' + frutas + '\n' + 'doces: ' + doces + '\n' + 'congelados: ' + congelados)

            if (frutas.includes(comidaExcluir)) {

                frutas.splice(frutas.indexOf(comidaExcluir), 1)

            } else if (congelados.includes(comidaExcluir)) {

                congelados.splice(congelados.indexOf(comidaExcluir), 1)

            } else if (doces.includes(comidaExcluir)) {

                doces.splice(doces.indexOf(comidaExcluir), 1)
                
            } else if (laticinios.includes(comidaExcluir)) {

                laticinios.splice(laticinios.indexOf(comidaExcluir), 1)

            } else {
                alert('não foi possivel encontrar o item na lista!')
            }

            alert('sua lista de compras agora está assim: \n' + 'laticinios: ' + laticinios + '\n' + 'frutas: ' + frutas + '\n' + 'doces: ' + doces + '\n' + 'congelados: ' + congelados)
        }

        if (continuar == 3) {
            alert('laticinios: ' + laticinios + '\n' + 'frutas: ' + frutas + '\n' + 'doces: ' + doces + '\n' + 'congelados: ' + congelados)
            break
        } 
    }

}