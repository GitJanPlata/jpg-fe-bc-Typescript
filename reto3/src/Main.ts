import { Electrodomestico } from "./Electrodomestico";
import { Lavadora } from "./Lavadora";
import { Television } from "./Television";

class MainApp {
    public static main(): void {
      const electrodomesticos: Electrodomestico[] = new Array(10);
  
      electrodomesticos[0] = new Lavadora(200, "negro", "B", 30, 10);
      electrodomesticos[1] = new Television(500, "rojo", "A", 15, 32, true);
      electrodomesticos[2] = new Electrodomestico(150, "azul", "C", 25);
      electrodomesticos[3] = new Lavadora(300, "blanco", "D", 40, 20);
      electrodomesticos[4] = new Television(400, "negro", "E", 50, 42, false);
      electrodomesticos[5] = new Electrodomestico(180, "gris", "F", 35);
      electrodomesticos[6] = new Lavadora(250, "rojo", "A", 55, 15);
      electrodomesticos[7] = new Television(600, "blanco", "B", 60, 50, true);
      electrodomesticos[8] = new Electrodomestico(200, "azul", "C", 30);
      electrodomesticos[9] = new Television(350, "negro", "D", 48, 28, false);
  
      let precioTotalElectrodomesticos: number = 0;
      let precioTotalLavadoras: number = 0;
      let precioTotalTelevisores: number = 0;
  
      for (let electrodomestico of electrodomesticos) {
        const precioFinal = electrodomestico.precioFinal();
  
        if (electrodomestico instanceof Lavadora) {
          precioTotalLavadoras += precioFinal;
        } else if (electrodomestico instanceof Television) {
          precioTotalTelevisores += precioFinal;
        }
  
        precioTotalElectrodomesticos += precioFinal;
      }
  
      console.log("Precio total de electrodomésticos: " + precioTotalElectrodomesticos);
      console.log("Precio total de lavadoras: " + precioTotalLavadoras);
      console.log("Precio total de televisores: " + precioTotalTelevisores);
    }
  }
  
  MainApp.main();