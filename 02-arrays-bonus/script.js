const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.table(teachers)





// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = [];
// for (i = 0; i < teachers.length; i ++) {
//   const currentTeacher = teachers[i];
//   reversedTeachers.unshift(currentTeacher)
// }
// console.log("1: reversedTeachers", reversedTeachers)
// * FATTO USANDO METODO REVERSE() SENZA MODIFICARE L'ARRAY ORIGINALE (PASSANDO PER UN CLONE)
let teachersClone = [];
console.log(teachersClone);
for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  teachersClone.push(currentTeacher)
}
// * DEBUG
// * console.table(reversedTeachers);
// * console.table(teachersClone);
reversedTeachers = teachersClone.reverse();
console.log(`1: reversedTeachers ${reversedTeachers}, teachers ${teachers}`);




// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (i = 0; i < teachers.length; i ++) {
  const currentTeacher = teachers[i];
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher)
  }
}
console.log("2: longNames", longNames)





// 3. Rimuovi 'Ed' dall'array teachers
for (i = 0; i < teachers.length; i ++) {
  const currentTeacher = teachers[i];
  // if (currentTeacher == "Ed") {
  //   teachers.splice(i, 1);
  // }
  // * INVECE DI USARE SPLICE RISOLVERE SPOSTANDOLO COME PRIMO/ULTIMO E USANDO POP O SHIFT, ALTRIMENTI TANTO VALE USARE SPLICE COME SOTTO
  // * TODO?: VEDERE ANCHE CON SORT()
  if (currentTeacher == "Ed") {
    for (let j = i; j <= teachers.length - 1; j ++) {
      teachers[i] = teachers[i - 1]
    }
    teachers.shift()
  }
}
// * DEBUG
// * console.table(teachers)
console.log("3: Controllo presenza di Ed", teachers.includes("Ed"));
// * FATTO CON METODO SPLICE E CONTROLLANDO PRESENZA DEL NOME COME DETTO DA SAMUEL
// const nameToRemove = "Ed"
// if (teachers.indexOf(nameToRemove) !== - 1) {
//   teachers.splice(teachers.indexOf(nameToRemove), 1);
// } else {
//   console.warn(`${nameToRemove} non è presente nell'array`)
// }
// console.log("3: Controllo presenza di Ed", teachers.includes(nameToRemove));
// * DEBUG
// * console.table(teachers)





// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// * PER FARLO CON IL FOR COME DETTO DA TIZIANO DICHIARO LA VARIABILE CON UN LET
// * DEBUG
// * teachers.splice(teachers.indexOf("Fabio"), 1);
// * const isFabioPresent = null;
let isFabioPresent = false;
for (i = 0; i < teachers.length; i ++) {
  const currentTeacher = teachers[i];
  if (currentTeacher == "Fabio") {
    isFabioPresent = true;
  }
}
console.log("4: isFabioPresent", isFabioPresent)
// * LO RIFACCIO ANCHE CON METODO DEGLI ARRAY COME IN ESERCIZIO PRECEDENTE 
// * DEBUG
// * teachers.splice(teachers.indexOf("Fabio"), 1)
// const isFabioPresent = teachers.includes("Fabio");
// console.log("4: isFabioPresent", isFabioPresent);





// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// * PER FARLO CON IL FOR COME DETTO DA TIZIANO DICHIARO LA VARIABILE CON UN LET
// const teachersString = null;
let teachersString = "";
for (i = 0; i < teachers.length; i ++) {
  const currentTeacher = teachers[i];
  if (i < teachers.length - 1) {
    teachersString += `${currentTeacher}, `
  } else {
    teachersString += currentTeacher
  }
}
console.log("5: teachersString:", teachersString)