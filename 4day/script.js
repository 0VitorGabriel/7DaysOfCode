let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1)

alert('tente adivinhar o número!')

const resposta = prompt('qual número o computador escolheu?')

if (Number(resposta) === numeroAleatorio) {
    alert('parabéns você acertou! foi exatamente o número ' + numeroAleatorio)
} else {
    alert('você errou!, mas eu vou te dar mais duas tentativas!')

    for (let i = 1; i <= 2; i++) {
        const respostaCasoErre = prompt('qual número o computador escolheu!')

        if (Number(respostaCasoErre) === numeroAleatorio) {
            alert('parabéns você acertou!')
            break
        } else if (i === 2 && Number(respostaCasoErre) !== numeroAleatorio) {
            alert('que pena!, você não acertou nenhuma vez!')
        }
    }
   
}