// Typescript 04 string, number, boolean : (5)
//     - 41) differenza tra tipi js (dinamico) e ts (statico)
//     - 42) type assignment e Inference
//     - 43) string 
//     - 44) number 
//     - 45) boolean 


// Typescript 05 array, tuple, object e custom type: (4)
//     - object
//     - array
//     - tuple
//     - custom Type

// Typescript 06 enum, any, union e custom type: (4)
//     - enum
//     - any
//     - union
//     - alias



//  41) - differenza tra tipi js (dinamico) e ts (statico) :
// javascript e dinamico rispetto a typescript perche puo cambiare il tipo della variabile durante l'esecuzione del codice , 
// typescirt e definito statico rispetto a javascript perche le variabili dopo averle definite , non puoi passargli un tipo di dato diverso da quello definito 

// esemipo js (in javascript il codice va bene ) : 
// let provajs = 5;
// provajs = 'ciao';

// esemipo ts (in typescirpt il codice genera un errore ): 
// let provats = 5;
// provats = 'ciao';

// 42) -type assignment :
// assegnazione del tipo su una variabile 
let prova1 : number = 5;

// 42) - Inference :
// Inference e la propieta di estrapolare il tipo della variabile , dal valore assegnato 
// prova2 sara di tipo number perche 5 e di tipo number 
let prova2 = 5 ;
// questa propieta viene estrapolata anche dai parametri di default delle funzioni , esempio :
function somma1(num1 , num2 = 0){
    return num1+num2;
}
// somma1(3,'5'); //'5' pasato come stringa genera un errore 

// 43) -  string 
// i tipi string accettano : stringhe , char e `` (alt+96 back tick per le interpolazioni ) 
let provaString = '';
let provaString1 = "";
let provaString2 = `${provaString1}`;

// 44) -  number 
// i tipi number accettano : numeri interi , numeri decimali ;
let provaNumber = 10;
let provaNumber1 = 10.40;


// 44) -  boolean 
// i tipi boolean accetano solo true o false 
let provaboolean = true; 
let provaboolean1 = false; 



