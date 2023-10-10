Filtre les données. Seules les données qui passent le filtres seront passées au composant suivant.
Si le filtre n'autorise que les données dont l'ID est de 2, il n'y aura donc que la donnée d'ID 2 qui passera au composant suivant.

### Exemples

Pour ajouter des objets ou des tableaux, lorsque vous appuyez sur le petit carré en haut à droite à l'intérieur du carré bleu, il faut appuyer sur la flèche à droite du bouton "Append" et précisez Array pour tableau, Object pour objet et String pour affecter une valeur à un champs.
"$eq" signifie égal à et "$ne" n'est pas égal à, "$exists" interroge sur l'existence d'un champs.

Lorsqu'il n'y a qu'un seul champs à filtrer on peut procéder de cette manière : 
Ici seules les données n'ayant pas pour valeur "adresse" comme adresse seront envoyées au composant suivant.

```
{
 addressString {
  $ne : adresse
 }
}
```

Dans l'exemple ci-dessous seuls les objets dont le `champ_1` vaut "Oui" mais le `champ_2` ne vaut pas "Oui" seront sélectionnés.

```
{
  "$and": [
    {
      "champ_1": {
        "$eq": "Oui"
      }
    },
    {
      "champ_2": {
        "$ne": "Oui"
      }
    }
  ]
}
```

Pour avoir plusieurs conditions de filtrage, il faut utiliser un objet "$or" ou "$and" qui se décompose en un tableau de 2 ou plusieurs éléments.
"$and" permettra d'accumuler les filtres alors que "$or" permettra de choisir les données correspondantes à un des filtres.

Voici un autre exemple spécifiant que les objet error de l'objet address.lat ou adress.long ne doivent pas exister

```
{
 $or [
  {
    adress.lat {
     error {
       $exists : false
    }
   }
  }

  {
    adress.long {
     error {
       $exists : false
    }
   }
  }

 ]
}
```

On peut également utiliser la clause `$where`
Ici par exemple on vérifie qu'un champs n'est pas non défini à l'aide du mot clé `this` : 

```
{
 $where : this.mail != undefined
}
```

Pour tester si les valeurs d'un champs n'ont pas une longueur nulle on peut faire : 

```
{
 $where : this.mail.length>0
}
```

et pour filtrer deux conditions on peut utiliser `&&` :

```
{
 $where : this.mail.length>0&&this.website.length>0
}
```

### Fonctionnement technique

Utilise la syntaxe de la librairie Sift (https://github.com/crcn/sift.js) pour déterminer les conditions.

**Warning**
Le composant Filter ne fonctionne que sur des tableaux d'objets.

#### Branches

Il est possible d'utiliser deux composants Filter pour appliquer un traitement différent à des objets.

<table>
  <tr>
    <td rowspan="3">Input =></td>
    <td>Filter #1 =></td>
    <td>Output #1</td>
  </tr>
  <tr>
    <td>Filter #2 =></td>
    <td>Output #2</td>
  </tr>
</table>
