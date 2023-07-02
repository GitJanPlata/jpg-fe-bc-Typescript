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
exports.Lavadora = void 0;
var Electrodomestico_1 = require("./Electrodomestico");
var Lavadora = exports.Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precioBase, color, consumoEnergetico, peso, carga) {
        if (precioBase === void 0) { precioBase = Electrodomestico_1.Electrodomestico.PRECIO_BASE_DEFECTO; }
        if (color === void 0) { color = Electrodomestico_1.Electrodomestico.COLOR_DEFECTO; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico_1.Electrodomestico.CONSUMO_ENERGETICO_DEFECTO; }
        if (peso === void 0) { peso = Electrodomestico_1.Electrodomestico.PESO_DEFECTO; }
        if (carga === void 0) { carga = Lavadora.CARGA_DEFECTO; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.carga = carga;
        return _this;
    }
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    Lavadora.prototype.precioFinal = function () {
        var precioFinal = _super.prototype.precioFinal.call(this);
        if (this.carga > 30) {
            precioFinal += 50;
        }
        return precioFinal;
    };
    Lavadora.CARGA_DEFECTO = 5;
    return Lavadora;
}(Electrodomestico_1.Electrodomestico));
