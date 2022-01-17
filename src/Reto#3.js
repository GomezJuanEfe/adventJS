// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

// Ejemplo:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
// ")balón("

const isValid = (letter) => {
  const startPar = letter.indexOf('(');
  const endPar = letter.indexOf(')');
  if (letter.includes('(') && letter.includes(')')) {
    if (startPar < endPar) {
      const content = letter.slice(startPar + 1 , endPar)
      if (/[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(content) || content.length == 0)
      {
        return false
      } else {
        return true
      }
    }
  }
  return false
}


console.log('1 ' + isValid("bici coche (balón) bici coche peluche"));
console.log('2 ' + isValid("(muñeca) consola bici"));
 
console.log('3 ' + isValid("bici coche (balón bici coche"));
console.log('4 ' + isValid("peluche (bici [coche) bici coche balón"));
console.log('5 ' + isValid("(peluche {) bici"));
console.log('6 ' + isValid("() bici"));
console.log('7 ' + isValid(")balón("));