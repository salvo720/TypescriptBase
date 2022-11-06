"use strict";
// 09 classi : 
// 91) - creare una classe 
// 92) - aggiungere delle propieta  
// 93) - creare costruttori con parametri 
// 94) - metodi con tipi di dati 
// 95) - modificatori di accesso : private , public e protected 
// 96) - shortland costruttore 
// 97) - propieta readonly
// 98) - creare una classe figlia costruttore default e super 
// 99) - protected  
// 991) - classi astratte  
// 992) - singleton con private constructor e static instance 
// 91) - creare una classe 
class Persona {
    // 93) - creare costruttori con parametri 
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    presentati() {
        console.log(`Persona : ciao sono ${this.nome} ${this.cognome} `);
    }
    // 94) - metodi con tipi di dati 
    saluta(persona) {
        console.log(`Persona : ciao ${persona.nome} ${persona.cognome} , molto piacere  `);
    }
}
let persona1 = new Persona("Luca", "Rossi");
let persona2 = new Persona("Marco", "Verdi");
let persona3 = new Persona("Anna", "Neri");
persona1.presentati();
persona2.saluta(persona1);
// 95) - modificatori di accesso : private , public e protected 
// private  : l'elemento e accessibile solo all'interno della classe 
// public  : l'elemento e accessibile anche dall'esterno della classe , public e il modificatore di default quando non e specificato 
// 96) - shortland costruttore 
// typescript ci da la possibilita di usare il costruttore shortland  , ovvero inserendo nel costruttore il modificatore di accesso 
// non e piu necessario assegnarlo e dichiarlo come attributo , guarda l'esempio 
class Persona2 {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    presentati() {
        console.log(`Persona2 : ciao sono ${this.nome} ${this.cognome} `);
    }
    saluta(persona) {
        console.log(`Persona2 : ciao ${persona.nome} ${persona.cognome} , molto piacere  `);
    }
}
let persona2Test = new Persona2("Luca", "Rossi");
persona2Test.presentati();
//# sourceMappingURL=09_app.js.map