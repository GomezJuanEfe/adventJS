// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

let ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

let contarOvejas = (arr) => {
  const arrFiltered = arr.filter((oveja) => {
    let name = oveja.name.toLowerCase();
    if (oveja.color == 'rojo' && name.includes('n') && name.includes('a')) {
      return oveja
    }
  })
  return arrFiltered;
}

let ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
