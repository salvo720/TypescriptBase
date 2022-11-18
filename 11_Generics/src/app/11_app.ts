// 11 Generics : 
//  111) - cosa sono 
//  112) - generics build in 
//  113) - esempio pratico con array 
//  114) - usare constraint T extends 
//  115) - classi generics 


//  111) - cosa sono 
// sono uno strumento che mettere in relazione piu dati insieme andando a creare una sorta di dato composto
//  e ci permette di creare componenti riutilizzabili con diversi tipi di dati , esempio :


// definzione un array di stringhe in typescript 
const prova: string[] = ['stringa1','stringa2'];

// definizione di un array con il generics 
const provaGenerics : Array<string> = ['stringa1','stringa2'];


// 112) - generics build in 
//  113) - esempio pratico con array 

// T : indica che e possibile passare quasiasi tipo ( T indica Type ) ,
// e se usiamo anche T[] nel return il tipo usato sara estrapolato con l'inference e assegnato , se non specifato nella chiamata 
function createArray<T>(items:T[]): T[]{
  return new Array().concat(items)
}

const Array1 = createArray<number>([1,2,3,4])
const Array2 = createArray<string>(["test1","test2","test3"])

// e possibile passare definire piu generics nella stessa funzione , esempio : 

function createArray2<T , U , W >(items:T[] | U[] | W[]): T[] | U[] | W[]{
  return new Array().concat(items)
}

const Array3 = createArray2<number , string , boolean>([1,2,3,4])


//  114) - usare constraint T extends 
// possiamo far estendere ad un Generics la classe di un tipo ad esempio number o string , in modo va vincolarne il tipo alla classe che estende 
// e possibile far estendere piu tipi ad un generics usando l'operatore union ( | ) 

function createArray3<T extends number | string >(items:T[]): T[] {
  return new Array().concat(items)
}

const Array4 = createArray3<number>([1,2,3,4])


//  115) - classi generics 
// e possbile usare il Generics anche sulle classi , cosi facendo all'oggetto verra assegnato il tipo passato 

class ProvaGenerics<T>{
  private lista : T[] = []

  addItem( item : T ){
    return this.lista.push(item)
  }

  remuveItem( item : T ){
    return this.lista.splice(this.lista.indexOf(item),1)
  }
}

const listaStinghe = new ProvaGenerics<string>();
listaStinghe.addItem("Luca");
listaStinghe.addItem("Marco");
listaStinghe.addItem("Anna");
listaStinghe.remuveItem("Luca");

const listaNumeri = new ProvaGenerics<number>()
listaNumeri.addItem(1)
listaNumeri.addItem(2)
listaNumeri.addItem(3)
listaNumeri.remuveItem(1)






