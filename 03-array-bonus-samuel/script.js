// BONUS SAMUEL X ARRAY

// 1 CONSEGNA: RIMUOVERE DUPLICATI DA STRINGA (1 for dice Samuel)
// pppprrrrrooovvvvaaaaaa

// 2 CONSEGNA: CONTA LE OCCORRENZE RIMOSSE DA STRINGA SOPRA (23 righe venute a samuel)

// 3 CONSEGNA: PARTI DA CONSEGNA 2 E TORNA A CONSEGNA 1 (DECOMPRIMI STRINGA)


let initialString = "pprrroooovvvvvaaaaaavvvvvoooorrrpp";
let compressedString = "";
for (let i = 0; i < initialString.length; i++) {
    const currentLetter = initialString[i];
    const previousLetter = initialString[i - 1];

    if (previousLetter === undefined || currentLetter !== previousLetter) {
        compressedString += currentLetter;
    }
    
}
console.info("1) initialString:", initialString);
console.info("1) compressedString:", compressedString);




let compressedStringWithLetterCount = "";
for (let i = 0; i < initialString.length; i++) {
    const currentLetter = initialString[i];
    const previousLetter = initialString[i - 1];

    if (previousLetter === undefined || currentLetter !== previousLetter) {
        compressedStringWithLetterCount += currentLetter + 1;
    } else if (currentLetter === previousLetter) {
        const oldLastCharacter = compressedStringWithLetterCount[compressedStringWithLetterCount.length - 1]
        const newLastCharacter = parseInt(oldLastCharacter) + 1
        compressedStringWithLetterCount = compressedStringWithLetterCount.slice(0, -1) + newLastCharacter;
    }
}
console.info("2) compressedStringWithLetterCount:", compressedStringWithLetterCount);