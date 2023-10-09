Remplace les valeurs d'un champs présent dans les données par une autre valeur à la manière d'un tableau de correspondance.

### Exemple

Prenons ces trois données en entrée : 
```js
{ 
   { name : "Cybelle Planète", categories : "Nourrir" }, 
   { name : "Costumotek", categories : "culture" }, 
   { name : "Les semeurs de jardin", categories : "Former, noùrrir, bio" } 
}
```

Si l'on souhaite remplacer toutes les valeurs des champs categories on va procéder comme ceci.
Il suffira d'appuyer sur "ignorer la valeur source", sur "ignorer les majuscules", sur "ignorer les accents" puis d'appuyer 5 fois sur "Ajouter une valeur".
On rentrera les valeurs "nourrir" (on le rentre deux fois car on souhaite avoir deux valeurs de sortie pour la catégorie "nourrir") puis "culture", "former" et "bio"  dans chacune des cases en "Valeur d'entrée".
Il suffit ensuite de nommer les valeurs de sortie de chacune des valeurs des champs.

`nourrir = "ag_al", nourrir = "e_s_s", culture = "cultu", former = "forma", bio = "ag_al"`

Après avoir entré tous les paramètres, on obtiendra ce résultat : 
```js
{ 
   { name : "Cybelle Planète", categories : "ag_al, e_s_s" }, 
   { name : "Costumotek", categories : "cultu" }, 
   { name : "Les semeurs de jardin", categories : "forma, ag_al, ag_al, e_s_s" } 
}
```

### Fonctionnement technique

* Une valeur source peut être traduite en plusieurs valeurs cibles.
* Une valeur cible peut être référencée par plusieurs valeurs sources.

### Mise en garde ⚠️ 

* N'oubliez pas de faire précéder ce composant d'un composant Deeper Focus pour déterminer sur quel champs de données le mapping se fera !

### Paramètres 

- **Ignorer la valeur source**: Permet de garder uniquement la "nouvelle valeur du champs" et non "l'ancienne valeur et la nouvelle".
- **Ignorer les majuscules**: Permet de réaliser le mapping de propriétés sans tenir compte des majuscules.
- **Ignorer les accents**: Permet de réaliser le mapping de propriétés sans tenir compte des accents.
- **Ajouter une valeur**: Permet d'ajouter une propriété et d'y assigner une (pour pouvoir 
