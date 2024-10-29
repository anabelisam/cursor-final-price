const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPrecioFinal(costoMateriaPrima, margenGanancia, impuestos) {
  const precioSinImpuestos = costoMateriaPrima / (1 - margenGanancia);
  return precioSinImpuestos * (1 + impuestos);
}

function calcularGananciaTotalEsperada(precioFinal, costoMateriaPrima, ventasEsperadas) {
  return (precioFinal - costoMateriaPrima) * ventasEsperadas;
}

function preguntarDatos() {
  rl.question('Ingrese el costo de la materia prima: ', (costoMateriaPrima) => {
    rl.question('Ingrese el margen de ganancia (en decimal, ej: 0.3 para 30%): ', (margenGanancia) => {
      rl.question('Ingrese la tasa de impuestos (en decimal, ej: 0.16 para 16%): ', (impuestos) => {
        const precioFinal = calcularPrecioFinal(parseFloat(costoMateriaPrima), parseFloat(margenGanancia), parseFloat(impuestos));
        
        console.log(`El precio final sugerido es: $${precioFinal.toFixed(2)}`);
        
        rl.question('¿Cuántas ventas del producto espera realizar? ', (ventasEsperadas) => {
          const gananciaTotalEsperada = calcularGananciaTotalEsperada(precioFinal, parseFloat(costoMateriaPrima), parseInt(ventasEsperadas));
          
          console.log(`La ganancia total esperada es: $${gananciaTotalEsperada.toFixed(2)}`);
          
          rl.close();
        });
      });
    });
  });
}

preguntarDatos();
