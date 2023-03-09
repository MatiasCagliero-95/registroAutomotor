import { Auto } from "./autos";
const fs = require("fs");
export const biblioteca: any [] = [];
export class RegistroDelAutomotor{
   
    darDeAlta(marca: string, patente:string, modelo:number){
        
        biblioteca.push(new Auto(marca, modelo, patente));
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

     explorarPorMarca(marca: string){

            let filtro = biblioteca.filter(elem => elem.marca === marca)
            if (filtro.length === 0) {
                console.log(`la marca ${marca} no existe en biblioteca`)
            } else console.log(`vehiculos marca ${marca}`, filtro);
     }

     explorarPorPatente(patente:any){
        
        let filtro = biblioteca.filter(elem => elem.patente === patente)
        if (filtro.length === 0) {
            console.log(`la patente "${patente}" no existe en biblioteca`)
        } else console.log(`Vehiculo con patente "${patente}"`, filtro);
       
 }      
    //  consultar(marca: string, array: any[],  patente?:string){
    //            let autoEncontrado = array.findIndex(Auto => Auto.marca === marca || Auto.patente === patente )
    //            if(autoEncontrado >= 0){
    //                console.log(marca, patente, ' Existe en bibioteca')
    //            } else{
    //                console.log(marca, patente, ' No existe en biblioteca');
            
    //            }
    //         }

     eliminar(marca: string, patente: string, array: Auto[]): any {
         let autoEncontrado: number = array.findIndex(elem => elem.marca === marca && elem.patente === patente);
         console.log(autoEncontrado)
        if(autoEncontrado >= 0){  
                array.splice(autoEncontrado,1)
                console.log("vehiculo marca ", marca,"patente ", patente, " eliminado de la lista");
            } 
        else {
            console.log('auto ', marca, 'no ha sido eliminado');
        }
     }
     
     actualizar(patente: string, array: any, newMarca?: string, newModelo?: any){
        let pos: number = array.findIndex((elem: { patente: string; }) => elem.patente === patente);
        if(pos<0){
            console.log("No se encontro la patente")
        } else {
        array[pos].marca = newMarca;
        array[pos].modelo = parseInt(newModelo);
        
        if (array[pos].marca === newMarca) {
            console.log("Se modifico la marca de el vehiculo patente ", patente)
        } else {
            console.log("No se pudo modificar la marca de el vehiculo patente ", patente)
        } 
        if (array[pos].modelo === newModelo) {
            console.log("Se modifico el modelo de el vehiculo patente ", patente)
        } else {
            console.log("No se pudo modificar el modelo de el vehiculo patente ", patente)
        }
    }
     }
    }

