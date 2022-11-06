// 09 classi : 
// 91) - creare una classe 
// 92) - aggiungere delle propieta  
// 93) - creare costruttori con parametri 
// 94) - metodi con tipi di dati 
// 95) - modificatori di accesso : private , public
// 96) - shortland costruttore 
// 97) - propieta readonly
// 98) - creare una classe figlia costruttore default e super 
// 99) - protected  
// 991) - propieta e metodi static 
// 992) - classi astratte  
// 993) - singleton con private constructor e static instance 


// 91) - creare una classe 

class Persona {
    
// 92) - aggiungere delle propieta

    nome:string 
    cognome:string 

// 93) - creare costruttori con parametri 

    constructor (nome : string , cognome : string){
        this.nome = nome ;
        this.cognome = cognome ;
    }

    presentati(): void {
        console.log(`Persona : ciao sono ${this.nome} ${this.cognome} `)
    }
// 94) - metodi con tipi di dati 

    saluta(persona : Persona): void {
        console.log(`Persona : ciao ${persona.nome} ${persona.cognome} , molto piacere  `)
    }

}

let persona1 : Persona = new Persona("Luca","Rossi")
let persona2 : Persona = new Persona("Marco","Verdi")
let persona3 : Persona = new Persona("Anna","Neri")

persona1.presentati();
persona2.saluta(persona1);

// 95) - modificatori di accesso : private , public e protected 
// private  : l'elemento e accessibile solo all'interno della classe 
// public  : l'elemento e accessibile anche dall'esterno della classe , public e il modificatore di default quando non e specificato 

// 96) - shortland costruttore 
// typescript ci da la possibilita di usare il costruttore shortland  , ovvero inserendo nel costruttore il modificatore di accesso 
// non e piu necessario assegnarlo e dichiarlo come attributo , guarda l'esempio 

class Persona2 {
    constructor(private nome:string , private cognome : string ){}

    presentati(): void {
        console.log(`Persona2 : ciao sono ${this.nome} ${this.cognome} `)
    }

    saluta(persona : Persona): void {
        console.log(`Persona2 : ciao ${persona.nome} ${persona.cognome} , molto piacere  `)
    }
}

let persona2Test : Persona2 = new Persona2("Luca","Rossi")

persona2Test.presentati();

// 97) - propieta readonly 
// la propieta readonly , indica che un attributo e di sola lettura e non puo essere modificato 
class Persona3 {
    constructor(private readonly nome:string , private cognome : string ){}
    cambiaNome(){
        // this.nome = "querty"; //genera un errore perche nome e readonly 
    }
}


// 98) - creare una classe figlia costruttore default e super 


class Studente extends Persona {
    constructor(nome : string ,cognome : string  , private materiaPreferita:string){
        super(nome,cognome)
    }
}


let studente : Studente = new Studente("Luca","Rossi","Storia");

// 99) - protected  
// protected indica che un attributo e accessibile dalla classe e dalle sottoclassi 

class PersonaSt {
    constructor(protected nome:string , private cognome : string ){}
}

class StudenteSt extends PersonaSt {
    constructor(nome : string , cognome : string  , private materiaPreferita:string){
        super(nome,cognome)
    }

    // adesso che il modificatore di accesso e protected e accessibili dalla sottoclasse 
    cambiaNome(){
        this.nome = "querty";
    }
}


let studenteTest : StudenteSt = new StudenteSt("Luca","Rossi","Storia");


// 991) - propieta e metodi static  
// per porpieta e metodi static indichiamao propieta e metodi a cui possiamo accedere senza creare un oggetto , 
// un esempio e la classe math 

class PersonaStatic {
    public static counter = 0; 
    static IncreaseCounter(): void {
        this.counter++;
        console.log("PersonaStatic : counter :  " +  this.counter)
    }
}

let provaconter = PersonaStatic.counter;
PersonaStatic.IncreaseCounter();

Math.floor(1)
Math.PI

// 992) - classi astratte  
// sono classi che contengono uno o piu metodi o propieta astratte 
// non possiamo creare un instanza di una classe astratta ma serve solo da usare come classe da cui estenderne un altra 
// metodi astratti : stessa cosa per i metodi astratti , non possono avere il body , ma devono essere implementati o eseguito l'override nella classe che viene estesa  

abstract class PersonaAbstract {
   
    abstract stampa():void
}

class studenteAbExt extends PersonaAbstract {
    public static counter = 0; 
    stampa(): void {
       console.log("metodo astratto ")
    }
    
}

// 993) - singleton con private constructor e static instance 
// il singleton ci consente di creare solo 1 istanza della classe
// lo si fa creando una classe con un attributo di static del tipo della classe , il costruttore e privato , 
// e all'interno della classe ci sara un metodo che crea l'isntanza  

class Preside {
    public static instance : Preside 
    private constructor( private nome:string , private  cognome : string ){}

    static getInstance(){
        if(Preside.instance) {
            return Preside.instance
        }

        Preside.instance = new Preside("Marco","Verdi")
        return Preside.instance
    }

    public presenta(){
        console.log(`Preside : Buongirno , sono il preside ${this.nome} ${this.cognome} `)
    }
}

Preside.getInstance().presenta()