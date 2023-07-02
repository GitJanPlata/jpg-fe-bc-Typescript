"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = exports.Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precioBase, color, consumoEnergetico, peso) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE_DEFECTO; }
        if (color === void 0) { color = Electrodomestico.COLOR_DEFECTO; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO; }
        if (peso === void 0) { peso = Electrodomestico.PESO_DEFECTO; }
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.comprobarColor = function (color) {
        var coloresDisponibles = ["blanco", "negro", "rojo", "azul", "gris"];
        var colorValido = Electrodomestico.COLOR_DEFECTO;
        for (var _i = 0, coloresDisponibles_1 = coloresDisponibles; _i < coloresDisponibles_1.length; _i++) {
            var col = coloresDisponibles_1[_i];
            if (col.toLowerCase() === color.toLowerCase()) {
                colorValido = col;
                break;
            }
        }
        return colorValido;
    };
    Electrodomestico.prototype.comprobarConsumoEnergetico = function (consumo) {
        var consumosDisponibles = ["A", "B", "C", "D", "E", "F"];
        var consumoValido = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO;
        for (var _i = 0, consumosDisponibles_1 = consumosDisponibles; _i < consumosDisponibles_1.length; _i++) {
            var con = consumosDisponibles_1[_i];
            if (con.toUpperCase() === consumo.toUpperCase()) {
                consumoValido = con;
                break;
            }
        }
        return consumoValido;
    };
    Electrodomestico.prototype.precioFinal = function () {
        var precioFinal = this.precioBase;
        switch (this.consumoEnergetico) {
            case "A":
                precioFinal += 100;
                break;
            case "B":
                precioFinal += 80;
                break;
            case "C":
                precioFinal += 60;
                break;
            case "D":
                precioFinal += 50;
                break;
            case "E":
                precioFinal += 30;
                break;
            case "F":
                precioFinal += 10;
                break;
        }
        if (this.peso >= 0 && this.peso < 20) {
            precioFinal += 10;
        }
        else if (this.peso >= 20 && this.peso < 50) {
            precioFinal += 50;
        }
        else if (this.peso >= 50 && this.peso < 80) {
            precioFinal += 80;
        }
        else if (this.peso >= 80) {
            precioFinal += 100;
        }
        return precioFinal;
    };
    Electrodomestico.PRECIO_BASE_DEFECTO = 100;
    Electrodomestico.COLOR_DEFECTO = "blanco";
    Electrodomestico.CONSUMO_ENERGETICO_DEFECTO = "F";
    Electrodomestico.PESO_DEFECTO = 5;
    return Electrodomestico;
}());
