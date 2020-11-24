/// Saisie successive d'un nom et d'un prénom ///

var nom = window.prompt("Entrez votre nom");
var prenom = window.prompt("Entrez votre prénom");

/// Si l'utilisateur est un homme: "Bonjour monsieur", sinon: "Bonjour madame" ///

if ( window.confirm("Etes-vous un homme?") == true){
    window.alert("Bonjour monsieur " + prenom +" "+ nom + " bienvenu sur notre site web");
}
else{
    window.alert("bonjour madame " + prenom +" "+ nom + " bienvenu sur notre site web");
} 






