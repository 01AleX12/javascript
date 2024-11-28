//los modificadores de acceso, básicamente solamente hay private, es decir que se pueda acceder desde la clase...

// Ahora en JavaScript de nueva cuenta las classes son algo nuevo, funcionan sobre prototypes, pero con una forma más sencilla, previamente la forma de hacerlo private era con un guion bajo, eso le daba a entender al programador que esa propiedad o método era privado pero aún asi no era como un private real...

//EJEMPLO PÚBLICO
class Cliente { 
    
    constructor( nombre, saldo = 0) {
        // this._nombre = nombre;
        this.nombre = nombre;
        this.saldo = saldo;
    }
    nombreCliente() {
        return this.nombre;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
}

const pedro = new Cliente('Pedro');
console.log(pedro.nombre); //esto funciona ahora porque es público

 //._nombre); => antes se usaba esta forma
 //#nombre); => ahora se usa esta forma

//EJEMPLO PRIVADO
class Cliente { 
    #nombre = '';
    constructor( nombre, saldo = 0) {
        // this._nombre = nombre;
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    nombreCliente() {
        return this.#nombre;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
}

const pedro = new Cliente('Pedro');
console.log(pedro.nombre); //esto no funciona ahora porque es privado, falla al intentar acceder desde el objeto
//SOLUCIÓN, funciona porque estamos accediendo desde la clase
console.log(pedro.nombreCliente() );