// Typescript 04 string, number, boolean : (5)
//     - 41) differenza tra tipi js (dinamico) e ts (statico)
//     - 42) type assignment e Inference
//     - 43) string 
//     - 44) number 
//     - 45) boolean 


// Typescript 05 array, tuple, object e custom type: (3)
//     - 51) object
//     - 52) array
//     - tuple
//     


// Typescript 06 enum, any, union e custom type: (5)
//     - enum
//     - any
//     - union
//     - alias
//     - custom Type


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
// e un array a lunghezza fissa 