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
            this.#humor++;
            unPerro.setEstado("feliz");
            unPerro.responder("mueve la cola y jadea");
        } else {
            this.#humor--;
            unPerro.setEstado("enojado");
            unPerro.responder("gruñe y ladra");
        }
       
    }
}

module.exports = Persona;