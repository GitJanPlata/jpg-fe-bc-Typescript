class Password {
    private longitud: number;
    private contrasena: string;

    constructor() {
        this.longitud = 8;
        this.contrasena = this.generarContrasena();
    }

    private generarContrasena(): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contrasena = '';
        for (let i = 0; i < this.longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres[indiceAleatorio];
        }
        return contrasena;
    }
}

//instancia del objeto password con su mètodo para generar la contraseña

let miPassword = new Password();
console.log(miPassword);