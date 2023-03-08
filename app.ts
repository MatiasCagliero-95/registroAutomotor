import { Auto } from "./autos";
import { RegistroDelAutomotor } from "./registro";
import { biblioteca } from "./registro";

let gestor = new RegistroDelAutomotor()
gestor.darDeAlta("fiat", "123 abc", 1999)
//console.log(biblioteca);
gestor.darDeAlta("renault", "456 asd", 1810)
//console.log(biblioteca)
gestor.darDeAlta("fiat", "213 fgd", 1816)

gestor.consultar("fiat", biblioteca)
gestor.actualizar("456 asd", "renoleta", 2023, biblioteca)
gestor.listadoDeAutos()