// Bingo

const sorteados = []
const sorteadosB = []
const sorteadosI = []
const sorteadosN = []
const sorteadosG = []
const sorteadosO = []
let letra = ''

let letraTela = document.querySelector('#letra')
let botaoSortear = document.querySelector('#botao')
let numeroSorteado = document.querySelector('#numeroSorteado')
let numeroSorteados = document.querySelector('#sorteados')

botaoSortear.addEventListener('click', geraNumero)
botaoSortear.addEventListener('click', mostrarSorteio)

function geraNumero() {
    letraTela.style.display = 'inline-block'
    setTimeout(() => {
        _random()
        geraNumero()
    }, 6500)
}

function _random() {
    let bingo = Math.floor(Math.random() * 75) + (1);
    if (sorteados.indexOf(bingo) == -1) {
        if (bingo <= 15) {
            letra = 'B'
            sorteados.push(bingo)
            sorteadosB.push(bingo)
            letraTela.innerHTML = `Letra: ${letra}`
            mostrarSorteio()
        } else if (bingo > 15 && bingo <= 30) {
            letra = 'I'
            sorteados.push(bingo)
            sorteadosI.push(bingo)
            letraTela.innerHTML = `Letra: ${letra}`
            mostrarSorteio()
        } else if (bingo > 30 && bingo <= 45) {
            letra = 'N'
            sorteados.push(bingo)
            sorteadosN.push(bingo)
            letraTela.innerHTML = `Letra: ${letra}`
            mostrarSorteio()
        } else if (bingo > 45 && bingo <= 60) {
            letra = 'G'
            sorteados.push(bingo)
            sorteadosG.push(bingo)
            letraTela.innerHTML = `Letra: ${letra}`
            mostrarSorteio()
        } else if (bingo <= 75 && bingo > 60) {
            letra = 'O'
            sorteados.push(bingo)
            sorteadosO.push(bingo)
            letraTela.innerHTML = `Letra: ${letra}`
            mostrarSorteio()
        }
        sorteados.push(bingo)

        numeroSorteado.innerHTML = `<br>Número: ${bingo}`
    } else {
        _random()
    }        
}

function mostrarSorteio() {
    letraTela.innerHTML = `Letra: ${letra}`
    sorteadosB.sort(ordenaNumeros)
    sorteadosI.sort(ordenaNumeros)
    sorteadosN.sort(ordenaNumeros)
    sorteadosG.sort(ordenaNumeros)
    sorteadosO.sort(ordenaNumeros)
    numeroSorteados.innerHTML = `
        B: ${sorteadosB} <br><br>
        I: ${sorteadosI} <br><br>
        N: ${sorteadosN} <br><br>
        G: ${sorteadosG} <br><br>
        O: ${sorteadosO}`
}

function ordenaNumeros(a, b){
    return a - b
}





