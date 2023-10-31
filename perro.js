class Perro {
    #nombre = "def nombre";
    #estado = "enojado";

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

    responder(respuesta) {
        console.log(`${this.#nombre} ${respuesta}`);
    }
}

module.exports = Perro;