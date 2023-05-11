const sum = (...rest) => rest.reduce((a,b) => a + b)

console.log(sum(4, 5, 6));