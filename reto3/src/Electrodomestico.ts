
export class Electrodomestico {
    protected static readonly PRECIO_BASE_DEFECTO: number = 100;
    protected static readonly COLOR_DEFECTO: string = "blanco";
    protected static readonly CONSUMO_ENERGETICO_DEFECTO: string = "F";
    protected static readonly PESO_DEFECTO: number = 5;
  
    protected precioBase: number;
    protected color: string;
    protected consumoEnergetico: string;
    protected peso: number;
  
    constructor(
      precioBase: number = Electrodomestico.PRECIO_BASE_DEFECTO,
      color: string = Electrodomestico.COLOR_DEFECTO,
      consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO,
      peso: number = Electrodomestico.PESO_DEFECTO
    ) {
      this.precioBase = precioBase;
      this.color = this.comprobarColor(color);
      this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
      this.peso = peso;
    }
  
    public getPrecioBase(): number {
      return this.precioBase;
    }
  
    public getColor(): string {
      return this.color;
    }
  
    public getConsumoEnergetico(): string {
      return this.consumoEnergetico;
    }
  
    public getPeso(): number {
      return this.peso;
    }
  
    protected comprobarColor(color: string): string {
        const coloresDisponibles: string[] = ["blanco", "negro", "rojo", "azul", "gris"];
        let colorValido: string = Electrodomestico.COLOR_DEFECTO;
    
        for (const col of coloresDisponibles) {
          if (col.toLowerCase() === color.toLowerCase()) {
            colorValido = col;
            break;
          }
        }
    
        return colorValido;
      }
  
      protected comprobarConsumoEnergetico(consumo: string): string {
        const consumosDisponibles: string[] = ["A", "B", "C", "D", "E", "F"];
        let consumoValido: string = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO;
    
        for (const con of consumosDisponibles) {
          if (con.toUpperCase() === consumo.toUpperCase()) {
            consumoValido = con;
            break;
          }
        }
    
        return consumoValido;
      }
  
    public precioFinal(): number {
      let precioFinal: number = this.precioBase;
  
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
      } else if (this.peso >= 20 && this.peso < 50) {
        precioFinal += 50;
      } else if (this.peso >= 50 && this.peso < 80) {
        precioFinal += 80;
      } else if (this.peso >= 80) {
        precioFinal += 100;
      }
  
      return precioFinal;
    }
  }