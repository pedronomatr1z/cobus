function calcular() {
  var etanol = Number(document.getElementById('etanol').value)
  var gasolina = Number(document.getElementById('gasolina').value)

  var calculo = etanol / gasolina

  if (calculo < 0.7) {
      document.getElementById('resultado').innerHTML = `<p>O resultado deu ${calculo}, é melhor abastecer com etanol </p>`
  } else if (calculo > 0.7) {
      document.getElementById('resultado').innerHTML = `<p>O resultado deu ${calculo}, é melhor abastecer com gasolina </p>`
  }
}