let nome = prompt('Qual o seu nome?')
let idade = prompt('Qual anos você tem?')
let linguagemAprendendo = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá ${nome}, você tem ${idade} anos e já esta aprendendo ${linguagemAprendendo}`)

let gostaAprender = prompt(`Você gosta de estudar ${linguagemAprendendo}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (gostaAprender == 1) {
    alert(`Muito bom! Continue estudando ${linguagemAprendendo} e você terá muito sucesso.`)
} else if (gostaAprender == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}