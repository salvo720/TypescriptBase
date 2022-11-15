// 10 le interfacce :
// 101 ) - che cosa sono
// 102 ) - creare un interfaccia
// 103 ) - differenza tra custom type e interfaccia
// 104 ) - class implements interface
// 105 ) - readonly si , modificatory no
// 106 ) - esempio abstract Dispositivio , children Telefono , Smartphone , Computer , interfaccia internet
// 107 ) - interfacce estendono piu interfacce

// 101 ) - che cosa sono
// L'interfaccia e una strttura che definisce il contratto nell'applicazione  .
// Definisce la sintassi ( attributi e metodi ) da seguire per le classi

// 102 ) - creare un interfaccia
// differenza tra classi e interfacce

interface Prova {
  nome: string;
  prova(): void;
}

abstract class provaClass {
  saluta() {}
  abstract prova(): void;
}

// Nota bene : un interfaccia per default ha tutti i metodi astratti , invece su una classe astratta possiamo avere sia metodi normali che astratti

// 103 ) - differenza tra custom type e interfaccia
// le interfacce : le usiamo per essere implementate dalle classi dando attributi e funzionalita (metodi) aggiuntivi
// il custom type : viene usato per creare dei tipi un po piu complessi rispetto a quelli che abbiamo gia

type provaType = {
  nome: string;
  prova(): void;
};

type provaType2 = string | number | {};

// 104 ) - class implements interface
// se una classe implementa un interfaccia gli attributi dell'interfaccia che vengono implementati nella classe , devono essere dichiarati con la
// long-hand del costruttore , perche se proviamo ad implementare gli attributi con la short-hand del costruttore andra in errore perche nelle interfacce
// non esistono i modificatori di accesso(private,public , protected )

// 105 ) - readonly si , modificatory no
// possiamo anche dichiarare l'attributo dell'interfaccia su readonly , e una volta inizializzato nle construttore non potra piu essere cambiato

interface ProvaInterface {
  readonly nome: string;
  prova(): void;
}

interface Querty {
  scrivi(): void;
}

class testClass implements ProvaInterface, Querty {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  scrivi(): void {
    throw new Error("Method not implemented.");
  }
  prova(): void {
    console.log("prova");
  }
}

// 106 ) - esempio abstract Dispositivio , children Telefono , Smartphone , Computer , interfaccia internet

interface internet {
  ip: string;
  connettiInternet(): void;
}

abstract class Dispositivo {
  constructor(protected nome: string, protected anno: number) {}

  abstract accendi(): void;
  abstract spegni(): void;
}

class Telefono extends Dispositivo implements internet {
  ip: string;

  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi(): void {
    console.log("il telefono si accende ... ");
  }
  spegni(): void {
    console.log("il telefono si spegne ... ");
  }
  connettiInternet(): void {
    console.log("il telefono si connette a internet ... ");
  }
}

class Smartphone extends Dispositivo implements internet {
  ip: string;

  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi(): void {
    console.log("lo Smartphone si accende ... ");
  }
  spegni(): void {
    console.log("lo Smartphone si spegne ... ");
  }
  connettiInternet(): void {
    console.log("il telefono si connette a internet ... ");
  }
}

class Computer extends Dispositivo implements internet {
  ip: string;

  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi(): void {
    console.log("il Computer si accende ... ");
  }
  spegni(): void {
    console.log("il Computer si spegne ... ");
  }
  connettiInternet(): void {
    console.log("il telefono si connette a internet ... ");
  }
}

// 107 ) - interfacce estendono piu interfacce
// solo le interfacce possono estendere piu di 1 elemento perche e un caso particolare , perche le interfacce sommano tutto quello che fanno insieme

interface test1 {
  nome: string;
}

interface test2 extends test1 {
  cognome: string;
  respira(): void;
}

interface isolatatest {
  telefono: number;
  saluta(): void;
}

interface test4 extends isolatatest, test2 {
  via: string;
  mangia(): void;
}

class Persona implements test4 {
  nome: string;
  cognome: string;
  telefono: number;
  via: string;

  constructor(nome: string, cognome: string, telefono: number, via: string){
      this.nome = nome,
      this.cognome = cognome,
      this.telefono = telefono,
      this.via = via
  }

  mangia(): void {
    throw new Error("Method not implemented.");
  }
  saluta(): void {
    throw new Error("Method not implemented.");
  }
  respira(): void {
    throw new Error("Method not implemented.");
  }
}
