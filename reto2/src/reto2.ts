class Password {
    private longitud: number;
    private contraseña: string;

    constructor() {
        this.longitud = 8;
        this.contraseña = this.generarContraseña();
    }

    private generarContraseña(): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseña = '';
        for (let i = 0; i < this.longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres[indiceAleatorio];
        }
        return contraseña;
    }
}

//instancia del objeto password con su mètodo para generar la contraseña

miPassword = new Password();
console.log(miPassword);