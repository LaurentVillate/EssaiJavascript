/// Initialisation d'un tableau avec 15 valeurs numériques ///
var tableau = [2, 6, 8, 9, 4, 6, 8, 9, 11, 1, 2, 5, 18, 21, 3];
document.write("Tableau avant le tri: " + tableau+ "<br>");
/// Applicaion de la méthode sort pour mettre les valeurs du tableau par ordre décroissant: b - a (si a - b = ordre croissant) ///
tableau.sort(function(a, b)
{
    return b - a;
});

document.write("Tableau après le tri: " + tableau);