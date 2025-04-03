// BONUS SAMUEL X ARRAY

// 1 CONSEGNA: RIMUOVERE DUPLICATI DA STRINGA (1 for dice Samuel)
// pppprrrrrooovvvvaaaaaa

// 2 CONSEGNA: CONTA LE OCCORRENZE RIMOSSE DA STRINGA SOPRA (23 righe venute a samuel)

// 3 CONSEGNA: PARTI DA CONSEGNA 2 E TORNA A CONSEGNA 1 (DECOMPRIMI STRINGA)


let initialString = "pprrroooovvvvvaaaaaap";
let finalString = "";
let stringToDecode = "";
// console.log("initialString:", initialString);
for (let i = 0; i < initialString.length; i++) {
    const currentLetter = initialString[i];
    const previousLetter = initialString[i - 1];

    if (previousLetter === undefined || currentLetter !== previousLetter) {
        // console.log("PRIMA LETTERA O LETTERA CAMBIATA:", currentLetter);
        finalString += currentLetter;
        stringToDecode += currentLetter + 1;
    } else if (currentLetter === previousLetter) {
        // console.info("UGUALI");
        // console.log("stringToDecode", stringToDecode);

        const oldLastCharacter = stringToDecode[stringToDecode.length - 1]
        // console.log("oldLastCharacter", oldLastCharacter)

        const newLastCharacter = parseInt(oldLastCharacter) + 1
        // console.log("newLastCharacter", newLastCharacter);

        stringToDecode = stringToDecode.slice(0, -1) + newLastCharacter;
    }
    
}
console.info("initialString:", initialString);
console.info("finalString:", finalString);
console.info("stringToDecode:", stringToDecode);