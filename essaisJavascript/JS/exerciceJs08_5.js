

/// L'utilisateur entre un mot////
var mot = window.prompt ("Entrer un mot :");
/// Variable contenant l'ensemble des voyelle à la suite ///
var voyelles = "aeiouy";
/// Variable pour recevoir le nombre de voyelles ///
var Nvoyelles = 0;
/// Variable pour recevoir le nombre de consonnes ///
var Nconsonnes = 0;

/// Pour chaque itération, et pour toute la longueur du mot, la boucle isole les voyelles, les ajoute dans Nvoyelles, sinon les autres lettres sont placés dans Nconsonnes /// 
for (i=0; i<mot.length; i++)
{

    var lettre = mot.substr(i,1);
//  remplace : lettre == a, lettre = b ....
if(voyelles.indexOf(lettre)>=0)

// 
{
    Nvoyelles++;
}

else if ((lettre>= 'a' && lettre<='z'))

{
    Nconsonnes++;
}
}
/// Après la boucle, affichage du nombre de voyelles et du nombre de consonnes ///
window.alert("Dans ce mot, il y a : " + Nvoyelles + " voyelles");
window.alert("Dans ce mot, il y a : " + Nconsonnes + " consonnes");

/// Sur ce code j'ai eu quelques bonnes intuitions mais... merci Mohammed...///