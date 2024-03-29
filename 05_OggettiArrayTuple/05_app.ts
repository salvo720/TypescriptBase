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


// 51 ) - object 
// gli oggetti sono simili ai normali oggetti javascript , la differenza e che sono tipizzati 
let persona : {
    nome:string
    cognome:string
    eta:number
    indirizzo : {
        via : string 
        civico : number 
        citta : string 
    }
}


persona = {
    nome :'Luca',
    cognome : 'Rossi',
    eta: 45,
    indirizzo : {
        via : '' ,
        civico : 0 ,
        citta : '', 
    },
}

// Nota bene :  a differenza da javascript dove se accediamo ad un attributo che non esiste dara errore di runtime , 
// typescript segnalera l'errore da subito nel codice 

// persona.anniviaggio ; // e commentato perche genera un errore 

function getData(data : { id: number ; username : string ; password : string }){
    window.console.log(data);
}
getData( {id:0,username:'',password:''} )

// 52 ) - Array
// come per gli oggetti anche gli array sono molto simili agli array javascript ma qui sono tipizzati

const arr : number[] = [1,2,3];
// any indica che possiamo avere all'interno qualunque tipo di dato 
const arr2 : any[] = [1,2,3,true , '' ,];

// 53) - Tuple 

// e un array a lunghezza fissa con valori e tipi ben definiti 
const tupla : [number , number , string] = [1,2,'']