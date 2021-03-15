const clonar = function (origem) {
  if (Array.isArray(origem)) {
    return origem.map(i => clonar(i))
  } else if (typeof origem === 'object' && origem !== null) {
    const retorno = {}
    for (const atributo in origem) {
      retorno[atributo] = clonar(origem[atributo])
    }
    return retorno
  } else {
    return origem
  }
}

export default clonar