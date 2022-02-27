import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    titulo: string = 'Módulo Contador';
    numero: number = 10;
    numero2: number = 20;
    numero3: number = 30;
    numero4: number = 40;
    base: number = 5;

    //con un método para sumar y otro para restar
    sumar() {
        this.numero2++;
    }
    restar() {
        this.numero2--;
    }
    //un sólo metodo y pasarle un argumento
    procesar(valor: number) {
        this.numero3 += valor;
    }

    // sumar un valor tomando un número base
    sumarBase(laBase: number) {
        this.numero4 += this.base;
    }
}