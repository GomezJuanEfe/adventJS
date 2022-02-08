// Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar 


const maxProfit = (prices) => {
  let profit = -1;
  prices.map((min, indexMin) => {
    prices.map((max, indexMax) => {
      let dif = max - min;
      if (dif > profit && indexMin < indexMax && dif !== 0) {
        profit = dif
      }
    })
  })
  return profit
}


// Test

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
