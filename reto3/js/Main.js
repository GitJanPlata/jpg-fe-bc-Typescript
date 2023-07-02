"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Electrodomestico_1 = require("./Electrodomestico");
var Lavadora_1 = require("./Lavadora");
var Television_1 = require("./Television");
var MainApp = /** @class */ (function () {
    function MainApp() {
    }
    MainApp.main = function () {
        var electrodomesticos = new Array(10);
        electrodomesticos[0] = new Lavadora_1.Lavadora(200, "negro", "B", 30, 10);
        electrodomesticos[1] = new Television_1.Television(500, "rojo", "A", 15, 32, true);
        electrodomesticos[2] = new Electrodomestico_1.Electrodomestico(150, "azul", "C", 25);
        electrodomesticos[3] = new Lavadora_1.Lavadora(300, "blanco", "D", 40, 20);
        electrodomesticos[4] = new Television_1.Television(400, "negro", "E", 50, 30, true);
        electrodomesticos[5] = new Electrodomestico_1.Electrodomestico(180, "gris", "F", 35);
        electrodomesticos[6] = new Lavadora_1.Lavadora(250, "rojo", "A", 55, 15);
        electrodomesticos[7] = new Television_1.Television(600, "blanco", "B", 60, 50, true);
        electrodomesticos[8] = new Electrodomestico_1.Electrodomestico(200, "azul", "C", 30);
        electrodomesticos[9] = new Television_1.Television(350, "negro", "D", 48, 45, true);
        var precioTotalElectrodomesticos = 0;
        var precioTotalLavadoras = 0;
        var precioTotalTelevisores = 0;
        for (var _i = 0, electrodomesticos_1 = electrodomesticos; _i < electrodomesticos_1.length; _i++) {
            var electrodomestico = electrodomesticos_1[_i];
            var precioFinal = electrodomestico.precioFinal();
            if (electrodomestico instanceof Lavadora_1.Lavadora) {
                precioTotalLavadoras += precioFinal;
            }
            else if (electrodomestico instanceof Television_1.Television) {
                precioTotalTelevisores += precioFinal;
            }
            precioTotalElectrodomesticos += precioFinal;
        }
        console.log("Precio total de electrodomésticos: " + precioTotalElectrodomesticos);
        console.log("Precio total de lavadoras: " + precioTotalLavadoras);
        console.log("Precio total de televisores: " + precioTotalTelevisores);
    };
    return MainApp;
}());
MainApp.main();
