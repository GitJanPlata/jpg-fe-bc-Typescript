import { Electrodomestico } from "./Electrodomestico";

export class Lavadora extends Electrodomestico {
    protected static readonly CARGA_DEFECTO: number = 5;
    private carga: number;

    constructor(
    precioBase: number = Electrodomestico.PRECIO_BASE_DEFECTO,
    color: string = Electrodomestico.COLOR_DEFECTO,
    consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO,
    peso: number = Electrodomestico.PESO_DEFECTO,
    carga: number = Lavadora.CARGA_DEFECTO
    ) {
    super(precioBase, color, consumoEnergetico, peso);
    this.carga = carga;
    }

    public getCarga(): number {
    return this.carga;
    }

    public precioFinal(): number {
    let precioFinal: number = super.precioFinal();

    if (this.carga > 30) {
        precioFinal += 50;
    }

    return precioFinal;
    }
}
