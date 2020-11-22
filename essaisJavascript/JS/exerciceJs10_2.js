///Fonction saisie d'un entier /// 

function getInteger()
{
    n = parseInt(window.prompt("Saisissez un entier"));
    return n;
}

function initTab()
{
    Npostes = getInteger();
    tab = Array(Npostes);
}

function saisieTab()
{
    var i = 0;
    while (i<Npostes)
    {
        poste = getInteger();
        console.log(tab[i]= [poste])
        i++;
    }
    return ;
}

function afficheTab()
{
    document.write(tab);
}

getInteger();
console.log(n + " est un entier");

initTab();
console.log("Tableau initialisé: " + tab);

saisieTab();

afficheTab();


