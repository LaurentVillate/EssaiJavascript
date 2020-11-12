var an = window.prompt("Entrez votre année de naissance");
var age = 2020 - an; 
alert("Vous avez " + age + " ans");

if (age >= 18)
{
    alert("Vous êtes majeur(e)")
}
else
{
    alert("Vous êtes mineur(e)")
}