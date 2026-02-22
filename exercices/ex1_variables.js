function infosEtudiant(nom, note) {
    function resultat(note){
       return (note >= 10) ? "Admis" : "Ajourné";  // ← return est essentiel !
    }
    return nom + " : " + note + "/20 → " + resultat(note);
}
console.log(infosEtudiant("Hiba",20))