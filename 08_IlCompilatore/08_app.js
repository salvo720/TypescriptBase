"use strict";
// 08 Il compilatore :
// 81) -  watch mode : tsc app.ts --watch /-w
// 82) - compila l'intero progetto ( tsc --init )
// 83) - includere ed escudere file ( node modules escluso di default )
// 84) - target della compilazione 
// 85) - altre opzioni di configurazione ( js , sourcemap )
// 86) - outDir e rootDir 
// 81) -  watch mode : tsc app.ts --watch /-w
// possiamo compilare il nostro preogetto in typescript con il comando :  tsc app.ts 
// in alternativa possiamo compilare il nostro progetto al prossimo salvataggio con il comando : tsc app.ts --watch 
// comando alternativo : tsc app.ts -w 
// 82) - compila l'intero progetto ( tsc --init )
// per compilare l'intero progetto dobbiamo usare il comando tsc --init per creare il file di configurazione " tscofnig.json "
// succesivamente ci bastera lanciare il comando tsc -w , per compilare l'intero progetto , quindi tutti i file .ts saranno compilati in file .js 
// succesivamente ci bastera lanciare il comando tsc -w , per compilare l'intero progetto , quindi tutti i file .ts saranno compilati in file .js 
// invece di dover aprire una shell per ogni file e compilarlo maualmente   
function app(x) {
    console.log(' app is ready !!!!! ');
}
// 83) - includere ed escudere file ( node modules escluso di default )
// exclude :  file o cartelle dal progetto , la cartella node_modules e automaticamente escusa dal progetto 
// include : aggiunge un file o una cartella al progetto , ma tutto quello non e incluso sara automaticamente escluso 
// per includere o escludere un file dal progetto ci basta andare nel file tsconfig.json , alla fine del del file usciamo dalle graffe gli aggiungiamo una virgola : 
// per escudere  ci basta aggiungere : "exclude " : [ "./server.ts" ]
// 84) - target della compilazione 
// nel file tsconfig.json abbiamo il target che indica la versione javascript da usare pre compilare typescrit in javascript . 
// oltre a target nota la sezione JavaScript Support , che ha 2 valori importanti : allowJs e checkJs , 
// questi 2 valori indicano che possiamo usare le funzionalita di controllo di typescrit che sonocompatibili con javascript , e quindi usare solo javascript e la compilazione 
// quindi lavorare in javascript ed usare le funzionalita di tyepscript 
// 85) - altre opzioni di configurazione ( js , sourcemap )
// abilitando la source map possiamo visualizzare la il sorgente typescript e debbuggarlo sul browser dalla sezione source (origini )
//# sourceMappingURL=08_app.js.map