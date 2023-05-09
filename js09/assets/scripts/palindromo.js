const {esPalindromo} = (palabra) => {
    const palabraReversa = palabra.toLowerCase().split('').reverse().join('');
    return palabra === palabraReversa;
  };
  module.exports = esPalindromo;
