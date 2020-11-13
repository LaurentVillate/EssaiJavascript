for (i=1; i>=1; i++)
{
    var nom = window.prompt("Saisissez le prénom n°" + i + "\n ou Clic sur Annuler pour arrêter la saisie");
    if (nom=="")
    {
        break;
    }
}

console.log("prénom: " + nom);