// ToBe hacer la importación

/* Hacer pruebas unitarias a una función que verifique 
si una palabra es palindromo

palindromo: La palabra se lee igual de der-izq y de izq-der.
"Ana" -> true
"Bob" -> true
"Radar" -> true
"Saoko" -> false
"Palabra" -> false
"Somos o no somos" -> true
*/


const esPalindromo = require("../scripts/palindromo.js");

test('Verifica si una palabra es un palíndromo', () => {
  expect(esPalindromo('reconocer')).toBe(true);
  expect(esPalindromo('oso')).toBe(true);
  expect(esPalindromo('palabra')).toBe(false);
});