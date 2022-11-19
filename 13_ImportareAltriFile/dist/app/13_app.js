// 13 typescript import file : (3)
//  131) - perche 
//  132) - crearne file esterno  
//  133) - importarne uno  
//  131) - perche
// i file vengono importati perche a livello di progetto si preferisce separare il codece e dargli una struttura , utile specialmente quando il codice cresce 
//  132) - crearne file esterno  
// guarda il file function.ts 
//  133) - importarne uno  
import { addizione, sottrazione, moltiplicazione } from "./function.js";
import { Persona } from "./Persona.js";
console.log("addizione() : " + addizione(5, 5));
console.log("sottrazione() : " + sottrazione(5, 5));
console.log("moltiplicazione() : " + moltiplicazione(5, 5));
const persona1 = new Persona();
persona1.saluta();
//# sourceMappingURL=13_app.js.map