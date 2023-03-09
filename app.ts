import { Auto } from "./autos";
import { RegistroDelAutomotor } from "./registro";
import { biblioteca } from "./registro";

let gestor = new RegistroDelAutomotor()
gestor.darDeAlta("fiat", "123 abc", 1999)
//console.log(biblioteca);
gestor.darDeAlta("renault", "456 asd", 1810)
//console.log(biblioteca)
gestor.darDeAlta("fiat", "213 fgd", 1816)

//gestor.consultar("fia", biblioteca);
gestor.eliminar("renault", "455 asd", biblioteca);
gestor.actualizar("456 asd", biblioteca, "renoleta", 2023);
gestor.listadoDeAutos()
gestor.explorarPorMarca("fiat")
gestor.explorarPorPatente("123 abc")

//.explorar, en gestacion, tendria que poder explorar en biblioteca por marca, y devolver algun mensaje si la marca no existe