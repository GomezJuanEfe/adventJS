// Respuestas sacadas de borjapazr en GitHub - https://github.com/borjapazr/adventjs-solutions/tree/main/challenge-09

// Respuesta 1

const groupBy = (collection, it) => {
  const object = {};
  const getKey = it instanceof Function ? it : item => item[it];
  collection.forEach(item => {
    const key = getKey(item);
    object[key] = [...(object[key] || []), item];
  });
  return object
};


// Respuesta 2

const groupByReduce = (collection, it) => {
  const getKey = it instanceof Function ? it : item => item[it];
  return collection.reduce((object, item) => {
    const key = getKey(item);
    return {
      ...object,
      [key]: [...(object[key] || []), item]
    };
  }, {});
};


// Test

groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
  )
  // { 2013: [1363223700000], 2014: [1397639141184] }
  
  groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ], 'rating')