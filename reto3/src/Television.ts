import { Electrodomestico } from "./Electrodomestico";


export class Television extends Electrodomestico {
    protected static readonly RESOLUCION_DEFECTO: number = 20;
    protected static readonly CUATROK_DEFECTO: boolean = false;
    private resolucion: number;
    private cuatrok: boolean;
  
    constructor(
      precioBase: number = Electrodomestico.PRECIO_BASE_DEFECTO,
      color: string = Electrodomestico.COLOR_DEFECTO,
      consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO,
      peso: number = Electrodomestico.PESO_DEFECTO,
      resolucion: number = Television.RESOLUCION_DEFECTO,
      cuatrok: boolean = Television.CUATROK_DEFECTO
    ) {
      super(precioBase, color, consumoEnergetico, peso);
      this.resolucion = resolucion;
      this.cuatrok = cuatrok;
    }
  
    public getResolucion(): number {
      return this.resolucion;
    }
  
    public getCuatrok(): boolean {
      return this.cuatrok;
    }
  
    public precioFinal(): number {
      let precioFinal: number = super.precioFinal();
  
      if (this.resolucion > 40) {
        precioFinal *= 1.3;
      }
  
      if (this.cuatrok) {
        precioFinal += 50;
      }
  
      return precioFinal;
    }
  }