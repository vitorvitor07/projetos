function criaCalculadora(){
    return { 
        display: document.querySelector('.display'),

        inicia() { // Método
            this.cliqueBotao()
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });
          },
      

        fazConta() { // Método
            let conta = this.display.value
            
            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Operação Inválida')
                    return // return para encerrar a função
                }

                this.display.value = conta
            } catch(e) {
                alert('Operação Inválida')
            }
        },

        cliqueBotao() { // Método
            document.addEventListener('click', function(e) { // Se usar o this ele vai ser o document, não calculadora
                const el = e.target // Recebendo o que eu estou clicando na página
                // console.log(this) // Quem chama a função é o This

                if (el.classList.contains('botaoNumero')) {
                     this.botaoParaDislplay(el.innerText) // Pegar o texto do elemento (botões da calculadora)                     
                }
                
                if(el.classList.contains('botaoLimpar')) {
                    this.display.value = ''
                }

                if(el.classList.contains('botaoApagar')) {
                    this.apagaUm()
                }

                if(el.classList.contains('botaoIgual')){
                    this.fazConta()
                }

            }.bind(this) ) // Fazer o this "voltar um"
        },

        botaoParaDislplay(valor) { // Método
            this.display.value += valor
        },

        apagaUm() { // Método
            this.display.value = this.display.value.slice(0, -1) // Tamanho da string -1
        }
    }
}

const calculadora = criaCalculadora()

calculadora.inicia()