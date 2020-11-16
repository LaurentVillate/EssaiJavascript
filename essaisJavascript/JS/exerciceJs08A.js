for (i=1; i>=1; i++)
{
    var nom = window.prompt("Saisissez le prénom n°" + i + "\n ou Clic sur Annuler pour arrêter la saisie");
    console.log("Prénoms: " + nom);
    console.log("Nombre de prénoms: " + i);
    if (nom=="")
    {
        break;
    }
}