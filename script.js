function calcularPrecioFinal(costoMateriaPrima, margenGanancia, impuestos) {
    const precioSinImpuestos = costoMateriaPrima / (1 - margenGanancia);
    return precioSinImpuestos * (1 + impuestos);
}

function calcularGananciaTotalEsperada(precioFinal, costoMateriaPrima, ventasEsperadas) {
    return (precioFinal - costoMateriaPrima) * ventasEsperadas;
}

document.getElementById('calculadoraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const costoMateriaPrima = parseFloat(document.getElementById('costoMateriaPrima').value);
    const margenGanancia = parseFloat(document.getElementById('margenGanancia').value);
    const impuestos = parseFloat(document.getElementById('impuestos').value);

    const precioFinal = calcularPrecioFinal(costoMateriaPrima, margenGanancia, impuestos);

    document.getElementById('resultadoPrecio').innerHTML = `El precio final sugerido es: $${precioFinal.toFixed(2)}`;
    document.getElementById('ventasEsperadasContainer').style.display = 'block';
});

document.getElementById('calcularGanancia').addEventListener('click', function() {
    const costoMateriaPrima = parseFloat(document.getElementById('costoMateriaPrima').value);
    const margenGanancia = parseFloat(document.getElementById('margenGanancia').value);
    const impuestos = parseFloat(document.getElementById('impuestos').value);
    const ventasEsperadas = parseInt(document.getElementById('ventasEsperadas').value);

    const precioFinal = calcularPrecioFinal(costoMateriaPrima, margenGanancia, impuestos);
    const gananciaTotalEsperada = calcularGananciaTotalEsperada(precioFinal, costoMateriaPrima, ventasEsperadas);

    document.getElementById('resultadoGanancia').innerHTML = `La ganancia total esperada es: $${gananciaTotalEsperada.toFixed(2)}`;
});
