import { Car } from "./js-08-clase-auto.js";
import { ElectricCar } from "./js-08-clase-auto.js";

console.log("importar y exportar clases");

const elantra = new Car("Elantra", "Hydai",410_000);

console.log(elantra.getDescription());
console.log(elantra.name);
console.log(elantra.brand);

const electricElantra = new ElectricCar("Elantra", "Hydai",810_000, 5);

console.log(electricElantra.getDescription()); 