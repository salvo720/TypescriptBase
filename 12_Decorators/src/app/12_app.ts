// 12 Decoratos : (4)
//  121) - cosa sono 
//  122) - crearne uno 
//  123) - creare una decorator factory (passare parametri )
//  124) - esempio con template 


//  121) - cosa sono 
// il Decorator va messo prima della classe sui file del progetto di Angular . 
// I decorators sono delle funzioni che andiamo creare ed applicare ad una classe , o all'interno di una classe  usando la @ , 
// che parte al lancio del programma ed esegue le funzioni legate al decorator  


//  122) - crearne uno 
function Logger(constructor : Function){
  console.log("sto mandando a schermo  :")
  console.log(constructor )
}

// e come averla assegnato il decorator a cio che sta sotto 
@Logger
class Prova {
  constructor(){
    console.log('sto creando un oggetto di Prova ')
  }
}

// const prova = new Prova()

// Nota bene : non abbiamo creato un oggetto ma il Logger viene eseguito lo stesso , 
// questo perche i decorators vengolo lanciati dopo che abbiamo definito la classe 
// quindi assegnando Logger alla classe Prova , quando il decorator parte esegue la sua funzione  


//  123) - creare una decorator factory (passare parametri )

function Logger2(messaggio:string){
return function( constructor : Function ){
  console.log(messaggio)
  console.log(constructor )
}
}


@Logger2('ciao sono il Logger2 della classe Prova2')
class Prova2{
  constructor(){
    console.log('sto creando un oggetto di Prova2 ')
  }
}

@Logger2('ciao sono il Logger2 della classe Querty')
class Querty{
  constructor(){
    console.log('sto creando un oggetto di Querty ')
  }
}


//  124) - esempio con template 

function creaElemento (elemento : string, id : string, nome : string ){
  return function( constructor : any ){
    const container = document.getElementById(id) ;

    // new construct e come new Test() crea un nuovo oggetto 
    const test = new constructor(id, nome);
    if(container){
      container.innerHTML = elemento ;
      container.querySelector('h1')!.textContent = test.nome 
    }

  }
}
// contenuto = id

@creaElemento('<h1></h1>','contenuto',"Luca")
class Test {
  constructor(private id:string , private nome:string){}
}



