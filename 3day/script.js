const escolhaCarreira = prompt('você quer entrar para a area de Front-End ou Back-End?')

if (escolhaCarreira.toLowerCase() == 'front-end') {
    prompt('qual framework você pretende aprender? React ou Vue?')

    const especializar = prompt (`você vai continuar se especializando no front-end ou seguir se desenvolvendo para se tornar full-stack? 1 - front-end 2 - full-stack`)

    if (Number(especializar) == 1) {
        alert('parabéns você escolheu se especializar na carreira front-end')
        
        tecnologias()
    } else if (Number(especializar) == 2) {
        alert('parabéns você escolheu a carreira full-stack, boa sorte!')

        tecnologias()
    }
} else if (escolhaCarreira.toLowerCase() == 'back-end') {
    prompt('Vai aprender C# ou Java?')

    const especializar = prompt (`você vai continuar se especializando no back-end ou seguir se desenvolvendo para se tornar full-stack? 1 - back-end 2 - full-stack`)

    if (especializar == 1) {
        alert('parabéns você ira continuar aprendendo back-end')

        tecnologias()
    } else if (especializar == 2) {
        alert('parabéns você escolheu ser full-stack, boa sorte na sua jornada!')

        tecnologias()
    }
} else {
    alert('carreira invalida')
}

function tecnologias() {
    
    let total_tecnologias = []

    let continuar = 1

    while (continuar == 1) {
        const tecnologia_digitada = prompt('que tecnologias você pretende aprender ou conhecer?')

        total_tecnologias.push(tecnologia_digitada)

        continuar = prompt('deseja continuar? 1 - Sim e 0 - Não')
    }

    return alert('No final você ira ter aprendido ' + total_tecnologias)
}