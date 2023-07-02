var Password = /** @class */ (function () {
    function Password() {
        this.longitud = 8;
        this.contraseña = this.generarContraseña();
    }
    Password.prototype.generarContraseña = function () {
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var contraseña = '';
        for (var i = 0; i < this.longitud; i++) {
            var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres[indiceAleatorio];
        }
        return contraseña;
    };
    return Password;
}());
//instancia del objeto password con su mètodo para generar la contraseña
var miPassword = new Password();
console.log(miPassword);
