var mot = window.prompt("Entrez un mot");
var voyelles = "a";
var n = 0;

for (i=0; i<mot.length; i++)
{
 var substring = mot.substr(0, i);
      console.log(substring);
 var indices = substring.indexOf("a")
 if (indices>=0)
  {
     n++;
   }  
}
alert(n + " voyelles");




////// code complété par M ///////

var mot = window.prompt ("Entrer un mot :");
var voyelle = "aeiouy";
var nbrevoyelle = 0;
var consonnes = 0;

for (i=0; i<mot.length; i++)
{

var lettre = mot.substr(i,1);
//  remplace : lettre == a, lettre = b ....
if(voyelle.indexOf(lettre)>=0)

// 
{nbrevoyelle++;}

else if ((lettre>= 'a' && lettre<='z'))

{consonnes++;}
}

window.alert("le nombre de voyelle est de :"+nbrevoyelle);
window.alert("le nombre de consonnes est :"+consonnes);