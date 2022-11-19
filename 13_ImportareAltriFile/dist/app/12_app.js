"use strict";
// 12 Decoratos : (4)
//  121) - cosa sono 
//  122) - crearne uno 
//  123) - creare una decorator factory (passare parametri )
//  124) - esempio con template 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  121) - cosa sono 
// il Decorator va messo prima della classe sui file del progetto di Angular . 
// I decorators sono delle funzioni che andiamo creare ed applicare ad una classe , o all'interno di una classe  usando la @ , 
// che parte al lancio del programma ed esegue le funzioni legate al decorator  
//  122) - crearne uno 
function Logger(constructor) {
    console.log("sto mandando a schermo  :");
    console.log(constructor);
}
// e come averla assegnato il decorator a cio che sta sotto 
let Prova = class Prova {
    constructor() {
        console.log('sto creando un oggetto di Prova ');
    }
};
Prova = __decorate([
    Logger
], Prova);
// const prova = new Prova()
// Nota bene : non abbiamo creato un oggetto ma il Logger viene eseguito lo stesso , 
// questo perche i decorators vengolo lanciati dopo che abbiamo definito la classe 
// quindi assegnando Logger alla classe Prova , quando il decorator parte esegue la sua funzione  
//  123) - creare una decorator factory (passare parametri )
function Logger2(messaggio) {
    return function (constructor) {
        console.log(messaggio);
        console.log(constructor);
    };
}
let Prova2 = class Prova2 {
    constructor() {
        console.log('sto creando un oggetto di Prova2 ');
    }
};
Prova2 = __decorate([
    Logger2('ciao sono il Logger2 della classe Prova2')
], Prova2);
let Querty = class Querty {
    constructor() {
        console.log('sto creando un oggetto di Querty ');
    }
};
Querty = __decorate([
    Logger2('ciao sono il Logger2 della classe Querty')
], Querty);
//  124) - esempio con template 
function creaElemento(elemento, id, nome) {
    return function (constructor) {
        const container = document.getElementById(id);
        // new construct e come new Test() crea un nuovo oggetto 
        const test = new constructor(id, nome);
        if (container) {
            container.innerHTML = elemento;
            container.querySelector('h1').textContent = test.nome;
        }
    };
}
// contenuto = id
let Test = class Test {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
};
Test = __decorate([
    creaElemento('<h1></h1>', 'contenuto', "Luca")
], Test);
//# sourceMappingURL=12_app.js.map