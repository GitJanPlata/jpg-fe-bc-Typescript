var Password = /** @class */ (function () {
    function Password() {
        this.longitud = 8;
        this.contrasena = this.generarContrasena();
    }
    Password.prototype.generarContrasena = function () {
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var contrasena = '';
        for (var i = 0; i < this.longitud; i++) {
            var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres[indiceAleatorio];
        }
        return contrasena;
    };
    return Password;
}());
//instancia del objeto password con su mètodo para generar la contraseña
var miPassword = new Password();
console.log(miPassword);
