enum Sexo {
    HOMBRE = 'H',
    MUJER = 'M',
}

class Persona {
    private static SEXO_POR_DEFECTO = Sexo.HOMBRE;

    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: Sexo;
    private peso: number;
    private altura: number;

    constructor(DNI: string, 
                nombre: string = '', 
                edad: number = 0, 
                sexo: Sexo = Persona.SEXO_POR_DEFECTO, 
                peso: number = 0, 
                altura: number = 0) {
        this.DNI = DNI;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}


let persona1 = new Persona('12345678Z', 'Juan', 30, Sexo.HOMBRE, 70, 1.75);
let persona2 = new Persona('23456789Y');
let persona3 = new Persona('34567890X', 'Ana', 25, Sexo.MUJER, 55, 1.60);

console.log(persona1);
console.log(persona2);
console.log(persona3);