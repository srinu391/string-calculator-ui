const stringCalculator = (input) => {
    if (input === "") return 0;
  
    let delimiter = /,/;
    
    const numbers = input.split(delimiter).map(Number);
  
  
    return numbers.reduce((sum, n) => sum + n, 0);
  }
  
  module.exports = stringCalculator;
  

  