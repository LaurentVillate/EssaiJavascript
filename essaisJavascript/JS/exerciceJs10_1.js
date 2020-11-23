/// saise d'un nombre pour déclarer la taille du tableau ///

var t = parseInt(window.prompt("Saisissez la taille du tableau"));

/// Affectation de la taille au tableau ///

var letableau = new Array(t);

/// Une boucle demande un prénom jusqu'à ce que le tableau soit complet ///

for (i = 0; i < letableau.length; i++)
{
    var ie = window.prompt("Saisissez un prénom");  
    console.log(ie);
}
console.log(letableau[ie]);