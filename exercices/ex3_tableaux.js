//Initialisation du Tableau
let notes = [12, 8, 15, 10, 7];

//Calcul de la moyenne
let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}
let moyenne = somme / notes.length;

//Calcul de la meilleure note
let meilleureNote = notes[0];
for (let i = 1; i < notes.length; i++) {
    if (notes[i] > meilleureNote) {
        meilleureNote = notes[i];
    }
}

//Nombre de notes >= 10
let nombreAdmis = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nombreAdmis++;
    }
}

console.log("Notes : " + notes);
console.log("Moyenne : " + moyenne);
console.log("Meilleure note : " + meilleureNote);
console.log("Nombre d'étudiants admis : " + nombreAdmis);