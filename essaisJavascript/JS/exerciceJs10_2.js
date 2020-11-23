/// Fonction saisie d'un entier /// 

function getInteger()
{
    n = parseInt(window.prompt("Saisissez un nombre"));
    return n;
}

/// Initialisation du tableau, saisie du nombre de postes dans le tableau ///

function initTab()
{
    Npostes = getInteger();
    tab = Array(Npostes);
}

/// Saisie des postes du tableau et calcul de la somme des postes ///

function saisieTab()
{
    var i = 0;
    somme = 0;
    while (i<Npostes)
    {

        poste = getInteger();


        tab[i]= [poste];
        i++;
        somme = somme+poste;
    }
    return ;
}

/// Afficher tous les postes du tableau ///

function afficheTab()
{
    window.alert("Postes du tableau: " + tab);
}

/// Rechercher un élément du tableau par son rang. Le rang saisi ne peut être supérieur au nombre de rangs total ///

function rechercheTab()
{
    rang = getInteger();
    elementrang = tab[rang];
    if (rang>Npostes)
    {
        alert("Le nombre doit être compris entre 1 et " + Npostes);
    }
    else{
        window.alert("Elément trouvé au rang n° " + rang + ": " + elementrang);  
    }
}

/// Trouver le maximum parmi les postes, calculer la moyenne des postes ///

function infoTab()
{
    maximum = Math.max.apply(null, tab);
    document.write("Maximum: " + maximum);
    moyenne = somme/Npostes;
    window.alert("Maximum: " + maximum + "; Moyenne: " + moyenne);
}

/// appel des fonctions initTab et saisieTab. Les autres fonctions sont appelées dans le menu de la page html ///

initTab();

saisieTab();



