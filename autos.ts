
const fs = require('fs');
const biblioteca: Auto [] = [];

export class Auto{

    patente: string;
    marca: string;
    modelo: number;
    
constructor(marca: string, modelo: number, patente: string){
        this.marca = marca,
        this.modelo = modelo,
        this.patente = patente
    }
}


export class RegistroDelAutomotor{
   
    darDeAlta(marca: string, patente:string, modelo:number){
        let marcas = new Auto(marca, modelo, patente)
        biblioteca.push(marcas);
        const datoALlevar= JSON.stringify(biblioteca);
        const llevar = fs.writeFileSync('./registroAutos.json', datoALlevar,
             {
            
                 encoding: "utf8",
                 mode: 0o666
             }
        );
        
    }



     consultar(marca: string, patente: string, array: Auto[]){
         let autoEncontrado = array.find(Auto => Auto.marca === marca && Auto.patente === patente )
         if(autoEncontrado){
             console.log(marca, " " ,patente, ' Existe en bibioteca', autoEncontrado)
            return autoEncontrado
         } else{
             console.log(marca, " ", patente, ' No existe en biblioteca');
            
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
    }


let gestor = new RegistroDelAutomotor()
gestor.darDeAlta("fiat", "123 abc", 1999)
console.log(biblioteca);
gestor.darDeAlta("renault", "456 asd", 1810)
console.log(biblioteca)


gestor.consultar("fiat", "123 abc", biblioteca);
gestor.eliminar("fiat", "123 abc", biblioteca)
console.log(biblioteca)