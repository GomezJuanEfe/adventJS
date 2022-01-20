// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.


function contains(store, product) {
  const flattenObjectValues = (object) => {
    const values = []

    Object.values(object).forEach(value => {
      if (typeof value === 'object') {
        values.push(...flattenObjectValues(value))
      } else {
        values.push(value)
      }
    })
    return values
  }
  return flattenObjectValues(store).includes(product)
}

// Test

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
} 
            
console.log(contains(almacen, 'camiseta')); // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
console.log(contains(otroAlmacen, 'gameboy')); // false
