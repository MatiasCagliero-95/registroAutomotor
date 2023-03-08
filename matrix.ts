 export class Matriz{
     matrix: number [] [];
    constructor(fila:number, columna:number){
        this.matrix = new Array(fila);
        for (let i = 0; i < fila; i++) {
            this.matrix[i] = new Array(columna);
        }
    }

    get(fila:number, columna:number){
        console.log(this.matrix[fila][columna])
    }

    set(fila:number, columna:number, valor:any){
        this.matrix[fila] [columna] = valor;
        console.log("se agregro ", valor," en la posicion ", fila, columna)
    }
}

let matrixrecargado = new Matriz(10, 10);
matrixrecargado.set(5,5,"hola");
matrixrecargado.get(5,5);