
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

const desistruturando = { spring, summer, autumn, winter } = yearSeasons;

const months = [...winter, ...spring, ...summer, ...autumn];
  
console.log(months);