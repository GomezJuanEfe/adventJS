// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

// const carta = 'bici coche balón _playstation bici coche peluche'

// Al ejecutar el método debería devolver lo siguiente:

// const regalos = listGifts(carta)

// console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

const carta = 'bici  coche   balón _playstation bici coche peluche'

const listGifts = (str) => {
  let count = {};
  str
    .split(' ')
    .filter((item) => !item.startsWith('_'))
    .filter((item) => !item == '')
    .forEach((x) =>  count[x] = (count[x] || 0) + 1);
  return count
}

console.log(listGifts(carta));