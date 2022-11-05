// 07 funzioni :
// 71) - tipi di dati nei parametri delle funzioni 
// 72) - inference nei parametri di default 
// 73) - il tipo di ritorno 
// 74) - funzioni come tipo di variabile 

// 71) - tipi di dati nei parametri delle funzioni 
// i parametri nelle funzioni sono tipizzabili , esempio :
// fai attenzione a num2 , non assegnando nessun tipo e nessun parametro di default il tipo sara come se fosse any 

function somma(num1 : number , num2  ){
    return num1 + num2 ;
}
somma(3,5)

// 72) - inference nei parametri di default 
// e possibile applciare l'inference anche nelle funzioni ovverro assegnando dei valori di default typescript estrapola il tipo da valore di default . 
// fai attenzione a num2 , nota che e indicato il tipo , perche viene gia applciata l'inference , non applicarlo 
function somma1(num1 = 1 , num2 : number  = 0 ){
    return num1 + num2 ;
}


// 73) - il tipo di ritorno 
// le funzioni possono avere vari tipi di ritorno , lo si indica dopo le tonde della parentesi , 
// Nota Bene : su typescript e sempre meglio specificare il tipo di ritorno di una funzione , in modo che si attivino i controlli di typescript 
// o altrimenti se non viene specificato ad esempio possiamo eseguire la somma tra due numeri e ritornare una stringa (perche il tipo di ritorno della funzione 
//  estratto dal return ) , se invece il tipo number e specificato come tipo di ritorno typescript ci segnalera un errore 
function somma2(num1 = 1 , num2 : number  = 0 ){
    return '';
}


// commentato perche genera un errore 
// function somma3(num1 = 1 , num2 : number  = 0 ): number {
//     return '';
// } 


function somma4(num1 = 1 , num2 : number  = 0 ): number {
    return num1+num2;
} 

function somma5(num1 = 1 , num2 : number  = 0 ): void {
    window.console.log(num1+num2);
} 

function somma6(num1 = 1 , num2 : number  = 0 ): undefined  {
   return  undefined;
} 

function somma7(num1 = 1 , num2 : number  = 0 ): any  {
    if(num1+num2 >= 10){
        return 'la somma e maggiore di 10 ';
    }else{
        return  undefined;
    }
 } 



 // 74) - funzioni come tipo di variabile 
//  possiamo usare le funzioni come tipo di variabile    

let prova : Function = somma 

window.console.log(prova(4,5));

// ma questo non e abbastanza specifico infatti se cambiamo l'assegnazione di prova con somma , con la funzione niente generera un errore 

// commentato perche genere un errore 
/*
prova = niente

window.console.log(prova(4,5));

function niente (stringa : string ): void  {
    window.console.log(stringa);
 } 
 */

//  per risolvere questo problema , possiamo specificare che tipo di parametri accetta la funzione , e qual e il tipo di ritorno 

let provaFunction : (x:number,y:number) => number  

function sottrazione(num1:number , num2:number ):number {
    return num1-num2;
}

let provaFunction1 : Function 
provaFunction1= somma;
provaFunction1= sottrazione;
// commentato perche genera un errore 
// provaFunction1= niente;

// possiamo usare le funzioni anche come parametro delle funzione , esempio 
// guarda il parametro cb che e una funzione 
function provaTest(x:number , cb : ( ) => void){}

// window.console.log(provaTest(5,()=>{
//     window.console.log()
// }))

window.console.log(provaTest(5, somma(1,2)))