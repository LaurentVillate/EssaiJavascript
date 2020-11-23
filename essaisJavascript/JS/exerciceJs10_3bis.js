/// Initialisation d'un tableau avec 15 valeurs numériques ///
var tableau = [2, 6, 8, 9, 4, 6, 8, 9, 11, 1, 2, 5, 18, 21, 3];
document.write("Tableau avant le tri: " + tableau+ "<br>");
/// Méthode bubbleSort pour mettre les valeurs du tableau par ordre croissant ///
function bubbleSort(tableau) 
{
    var bulleexe = false;
    /// Le "! renverse la valeur de bulleexe en = true"///
    while (!bulleexe) 
    {
      bulleexe = true;
      for (i=0; i<tableau.length - 1; i++) 
      {
        if (tableau[i] > tableau[i + 1]) 
        {
        [tableau[i], tableau[i + 1]] = [tableau[i + 1], tableau[i]];
          bulleexe = false;
        }
      }
    }
    return tableau;
  }
  
  bubbleSort(tableau);
  document.write("Tableau après le tri: " + tableau);