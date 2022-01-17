const createXmasTree = (height) => {
  const weigth = (height * 2) - 1 || 0 ;
  let print = '';
  let base = '';
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= weigth; j++) {
      (j >= height - (i - 1) && j <= height + (i - 1))? print += '*' : print += '_'
    }
    print += '\n'
  }

  for (let k = 1; k <= weigth; k++){
    (k == height) ? base += '#': base += '_'
  }

  print = print + (base + '\n' + base);
  console.log(print);
}

createXmasTree(50)