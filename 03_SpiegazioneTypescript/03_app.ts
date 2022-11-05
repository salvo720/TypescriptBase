// i file typescript convertono il codice in javascript , ma i controlli vengono eseguiti su typescript , 
//quindi il risultato sara un file javascript ma che ha precedentemente effettuato i controlli su typescript 

//contertire un file da ts a js con il comando : tsc app.js  ( ts + nomefile.ts)

function somma(a:number, b:number){
    return a+b;
}
console.log(somma(3,5));