/// Saisie de l'année de naissance. L'âge, stocké dans une variable par une soustraction : année courant - année de naissance, est affiché fans une fenêtre d'alerte ///

var an = window.prompt("Entrez votre année de naissance");
var age = 2020 - an; 
alert("Vous avez " + age + " ans");

/// Instructions pour les conditions : majeur ou mineur selon que l'âge est supérieur ou égal à 18, ou non ///

if (age >= 18)
{
    alert("Vous êtes majeur(e)");
}
else
{
    alert("Vous êtes mineur(e)");
}