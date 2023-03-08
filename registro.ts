import { Auto } from "./autos";
const fs = require("fs");
export const biblioteca: any [] = [];

export class RegistroDelAutomotor{
   
    darDeAlta(marca: string, patente:string, modelo:number){
        let auto = new Auto(marca, modelo, patente)
        biblioteca.push(auto);
        const datoALlevar= JSON.stringify(biblioteca);
        const llevar = fs.writeFileSync('./registroAutos.json', datoALlevar,
             {
                 encoding: "utf8",
                 mode: 0o666
             }
        );
        
    }

     listadoDeAutos(){
        console.log(biblioteca)
     }


     consultar(marca: string, array: any[],  patente?:string){
               let autoEncontrado = array.findIndex(Auto => Auto.marca === marca || Auto.patente === patente )
               if(autoEncontrado >= 0){
                   console.log(marca, patente, ' Existe en bibioteca')
               } else{
                   console.log(marca, patente, ' No existe en biblioteca');
            
               }
            }

     eliminar(marca: string, patente: string, array: Auto[]): any {
         let autoEncontrado: number = array.findIndex(elem => elem.marca === marca && elem.patente === patente);
        array.splice(autoEncontrado,1)
         console.log(autoEncontrado)
        if(autoEncontrado >= 0){  
                    console.log("vehiculo marca ", marca,"patente ", patente, " eliminado de la lista");
            } 
        else {
            console.log('auto ', marca, 'no ha sido eliminado');
        }
     }
     
     actualizar(patente: string, newMarca: string, newModelo: number, array: any){
        let pos: number = array.findIndex((elem: { patente: string; }) => elem.patente === patente);
        biblioteca[pos].marca = newMarca;
        array[pos].modelo = newModelo;
        if (biblioteca[pos].marca === newMarca && biblioteca[pos].modelo === newModelo) {
            console.log("Se actualizaron los datos del vehiculo con patente ", patente)
        } else {"No se pudieron actualizar los datos"}
     }
    }

