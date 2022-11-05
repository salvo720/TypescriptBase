// Typescript 04 string, number, boolean : (5)
//     - 41) differenza tra tipi js (dinamico) e ts (statico)
//     - 42) type assignment e Inference
//     - 43) string 
//     - 44) number 
//     - 45) boolean 


// Typescript 05 array, tuple, object e custom type: (3)
//     - 51) object
//     - 52) array
//     - 53) tuple  // da qui in poi sono strutture dati che esistono solo all'interno di typescript 
//     


// Typescript 06 enum, any, union e custom type: (5)
//     - 61) any
//     - 62) union
//     - 63)  custom Type
//     - 64) enum


// 61) - Any
// any indica un tipo dato non definito , quindi al suo interno possiamo mettere qualsiasi cosa 
// e consigliato usare any quando abbiamo un array che deve accettare quasiasi cosa  ( a livello di tipo di dato )
let provaAny : any = true;
let provaAny1 : any = 1;
let provaAny2 : any = '';
let provaAny3 : any = [];
let provaAny4 : any = {};

// 62) - Union
// Union : la union indica che una variabile puo contenere piu tipi di dati e lo si dando un or( | ) dopo il tipo del dato accodandeno un altro 
// e consigliato circoscrivere una variabile con pochi tipi di dato , se sono gia 4 , e preferibile usare any 
let provaUnion : string | number = '4';

// 63) - Custom Type
// custom type idnica la possibilita di definire un tipo di dato personalizzato , lo si fa dando la keyword type e nomeTipoDato , esempio : 
type Persona = {
    nome : string ,
    cognome : string 
}

let provaPersona : Persona = {
    nome:"Luca",
    cognome:"Rossi"
}

function funTrovaPers(persona: Persona){};

funTrovaPers({nome:"Luca" , cognome:"Rossi"});


// 64) - Enum
// gli Enum vengono usati per creare strutture dati fisse , esempio : 
// e consigliato se gli enum fanno riferimenti a valori del database metterli uguali a delle stringhe ma nulla ci vieta di assegnare un indice diverso da quello standard 
// gli enum vengono usati per rendere il codice piu pulito e aumentarne la leggibilita ed evitare errori nel codice e dell'input dell'utente 
enum Ruolo {
    ADMIN = 'admin',
    USER = 'user' , 
    GUEST = 'guest',
}

const personaEnum = {
    nome: 'Luca',
    cognome: 'Rossi',
    ruolo : Ruolo.ADMIN ,
}

if (personaEnum.ruolo == Ruolo.ADMIN) {};
if (personaEnum.ruolo == Ruolo.ADMIN) {};
if (personaEnum.ruolo == Ruolo.ADMIN) {};


for(){
    if (personaEnum.ruolo == Ruolo.ADMIN) {};
    if (personaEnum.ruolo == Ruolo.USER) {};
}