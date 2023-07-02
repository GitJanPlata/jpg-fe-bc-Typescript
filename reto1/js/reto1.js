var Sexo;
(function (Sexo) {
    Sexo["HOMBRE"] = "H";
    Sexo["MUJER"] = "M";
})(Sexo || (Sexo = {}));
var Persona = /** @class */ (function () {
    function Persona(DNI, nombre, edad, sexo, peso, altura) {
        if (nombre === void 0) { nombre = ''; }
        if (edad === void 0) { edad = 0; }
        if (sexo === void 0) { sexo = Persona.SEXO_POR_DEFECTO; }
        if (peso === void 0) { peso = 0; }
        if (altura === void 0) { altura = 0; }
        this.DNI = DNI;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    Persona.SEXO_POR_DEFECTO = Sexo.HOMBRE;
    return Persona;
}());

persona1 = new Persona('12345678Z', 'Juan', 30, Sexo.HOMBRE, 70, 1.75);
persona2 = new Persona('23456789Y');
persona3 = new Persona('34567890X', 'Ana', 25, Sexo.MUJER, 55, 1.60);

console.log(persona1);
console.log(persona2);
console.log(persona3);