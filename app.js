const Perro = require("./perro");
const Persona = require("./persona");

const unaPersona = new Persona();
const unPerro = new Perro();

unaPersona.setNombre("Mclovin");
unPerro.setNombre("Firulais");

unaPersona.acariciar(unPerro);

console.log(`El humor de ${unaPersona.getNombre()} es ${unaPersona.getHumor()}`);
console.log(`El estado de ${unPerro.getNombre()} es ${unPerro.getEstado()}`);
