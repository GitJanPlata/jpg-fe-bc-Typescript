"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Television = void 0;
var Electrodomestico_1 = require("./Electrodomestico");
var Television = exports.Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television(precioBase, color, consumoEnergetico, peso, resolucion, cuatrok) {
        if (precioBase === void 0) { precioBase = Electrodomestico_1.Electrodomestico.PRECIO_BASE_DEFECTO; }
        if (color === void 0) { color = Electrodomestico_1.Electrodomestico.COLOR_DEFECTO; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico_1.Electrodomestico.CONSUMO_ENERGETICO_DEFECTO; }
        if (peso === void 0) { peso = Electrodomestico_1.Electrodomestico.PESO_DEFECTO; }
        if (resolucion === void 0) { resolucion = Television.RESOLUCION_DEFECTO; }
        if (cuatrok === void 0) { cuatrok = Television.CUATROK_DEFECTO; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.resolucion = resolucion;
        _this.cuatrok = cuatrok;
        return _this;
    }
    Television.prototype.getResolucion = function () {
        return this.resolucion;
    };
    Television.prototype.getCuatrok = function () {
        return this.cuatrok;
    };
    Television.prototype.precioFinal = function () {
        var precioFinal = _super.prototype.precioFinal.call(this);
        if (this.resolucion > 40) {
            precioFinal *= 1.3;
        }
        if (this.cuatrok) {
            precioFinal += 50;
        }
        return precioFinal;
    };
    Television.RESOLUCION_DEFECTO = 20;
    Television.CUATROK_DEFECTO = false;
    return Television;
}(Electrodomestico_1.Electrodomestico));
