const parsedLines = (value) => value.replace(/(\\n)/g, "\n"); 

const stringCalculator = (input) => {
    if (input === "") return 0;
    
    // As react text component doesn't automatically recognize new line,
    // we are handling it in helper function

    input = parsedLines(input);

    let delimiter = /,|\n/;
    if (input.startsWith("//")) {
      let parts = input.split("\n");
      delimiter = new RegExp(parts[0].slice(2));
      input = parts[1];
    }
  
    const numbers = input.split(delimiter).map(Number);
  
    return numbers.reduce((sum, n) => sum + n, 0);
  }
  
  module.exports = stringCalculator;
  