class Persona {
    #nombre = "def nombre";
    #humor = 0;

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getHumor() {
        return this.#humor;
    }

    setHumor(humor) {
        this.#humor = humor;
    }

    acariciar(unPerro) {
        console.log(`${this.#nombre} acaricia a ${unPerro.getNombre()}`);
        if (unPerro.getEstado() === "tranquilo") {
            this.#humor--;
            unPerro.setEstado("feliz");
        } else {
            this.#humor++;
            unPerro.setEstado("enojado");
        }
    }
}

class Perro {
    #nombre = "def nombre";
    #estado = "tranquilo";

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getEstado() {
        return this.#estado;
    }
    
    setEstado(estado) {
        this.#estado = estado;
    }
}

const unaPersona = new Persona();
const unPerro = new Perro();

unaPersona.setNombre("Mclovin");
unPerro.setNombre("Firulais");

unaPersona.acariciar(unPerro);

console.log(`El humor de ${unaPersona.getNombre()} es ${unaPersona.getHumor()}`);
console.log(`El estado de ${unPerro.getNombre()} es ${unPerro.getEstado()}`);
