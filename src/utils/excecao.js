class ErroValidacao extends Error {
  constructor(message, data) {
    super(message)
    this.name = 'ErroValidacao'
    this.message = message
    this.data = data
  }
}

class Alerta extends Error {
  constructor(message) {
    super(message)
    this.name = 'Alerta'
    this.message = message
  }
}

function verificarErro(temErro, mensagem, data) {
  if (temErro) {
    throw new ErroValidacao(mensagem, data)
  }
}

function verificarAlerta(temErro, mensagem) {
  if (temErro) {
    throw new Alerta(mensagem)
  }
}

function verificarExcecao(temErro, mensagem) {
  if (temErro) {
    throw new Error(mensagem)
  }
}

export { Alerta, ErroValidacao, verificarErro, verificarAlerta, verificarExcecao }
