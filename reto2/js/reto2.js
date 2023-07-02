var Password = /** @class */ (function () {
    function Password(longitud) {
        if (longitud === void 0) { longitud = 8; }
        this.longitud = longitud;
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

miPassword = new Password(10);
console.log(miPassword);
