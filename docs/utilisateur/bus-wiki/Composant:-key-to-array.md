_à compléter_

Transforme les clés d'un objet en tableau.

### Exemple 

Prenons ces données en exemple :

```js
{
 "DeLaTerreAuxEtoiles":
   {
     "bf_titre":"De la terre aux étoiles",
     "bf_site_internet":"https://de-la-terre-aux-etoiles.webnode.fr",
     "bf_prenom":"Marie",
     "bf_nom":"Louis"
   },
 "LauraEtSesPaniers":
   {
     "bf_titre":"Les paniers de Laura",
     "bf_site_internet":"www.lespaniersdelaura.fr",
     "bf_prenom":"Laura",
     "bf_nom":"Guénot"
   }
}
```

Après avoir utilisé le composant KeyToArray, voici le résultat qu'on obtiendra : 

```js
{
   {
     "key" : "DeLaTerreAuxEtoiles",
     "bf_titre":"De la terre aux étoiles",
     "bf_site_internet":"https://de-la-terre-aux-etoiles.webnode.fr",
     "bf_prenom":"Marie",
     "bf_nom":"Louis"
   },
   {
     "key" : "LauraEtSesPaniers",
     "bf_titre":"Les paniers de Laura",
     "bf_site_internet":"www.lespaniersdelaura.fr",
     "bf_prenom":"Laura",
     "bf_nom":"Guénot"
   }
}
```

Les clés sont désormais à l'intérieur de chaque donnée ! 
