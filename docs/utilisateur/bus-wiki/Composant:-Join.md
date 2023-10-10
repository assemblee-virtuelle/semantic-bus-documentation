_à compléter_

Complète un flux par un second en se basant sur un champ du 1er et un identifiant du 2nd.

### Exemple

Prenons des données de deux composants en entrée.
Le premier flux A contient des données qui ressemblent à ça : 

```js
{
 {
  thesaurus-id : "filiereeconomique-17",
  corpus-id : "structure-2"
 },
 {
  thesaurus-id : "filiereeconomique-12",
  corpus-id : "structure-2"
 },
 {
  thesaurus-id : "filiereeconomique-16",
  corpus-id : "structure-2"
 }
}
```

Et le deuxième flux B des données ressemblant à ça : 

```js
{
  {
   id : "filiereeconomique-17",
   lib : "Santé, social, emploi" 
  },
  {
   id : "filiereeconomique-12",
   lib : "Edition, Information et communication, publicité" 
  },
  {
   id : "filiereeconomique-16",
   lib : "Enseignement, formation, études/projet" 
  }
}
```

Afin de savoir quel composant est le bon quand ils sont du même type, vous pouvez leur donner un nom lorsque vous les paramétrez.
Nous avons un premier flux de données finissant par un composant "Value Mapping A" et nous avons un second flux de données finissant par un composant "Value Mapping B".

Nous allons sélectionner "Value from Path A" dans "Composant qui contient le flux principal" et "Value from Path B" dans "Composant qui contient le flux secondaire".
Puis entrer "thesaurus-id" dans "Champs du composant principal", "id" dans "Champs du composant secondaire" et "resultat" comme nom de la propriété accueillant le flux secondaire.

Le résultat ressemblera à ça : 

```js
{
 {
  thesaurus-id : "filiereeconomique-17",
  corpus-id : "structure-2",
  resultat {
   id : "filiereeconomique-17",
   lib : "Santé, social, emploi"
  }
 },
 {
  thesaurus-id : "filiereeconomique-12",
  corpus-id : "structure-2",
  resultat {
   id : "filiereeconomique-12",
   lib : "Edition, Information et communication, publicité"
  }
 },
 {
  thesaurus-id : "filiereeconomique-16",
  corpus-id : "structure-2",
  resultat {
   id : "filiereeconomique-16",
   lib : "Enseignement, formation, études/projet"
  }
 }
}
```

### Paramètres 

- **Composant qui contient le flux principal**: Liste de contenants dans laquelle il faut choisir le contenant du flux principal.
- **Champ du composant principal qui contient l'identifiant du flux secondaire**: Champs servant d'identifiant dans le premier flux, il est en commun avec le deuxième flux.
- **Composant qui contient le flux secondaire**: Liste de contenants dans laquelle il faut choisir le contenant du flux secondaire.
- **Champ du composant secondaire qui définir son identifiant**: Champs servant d'identifiant dans le deuxième flux, il est en commun avec le premier flux.
- **Nom de la propriété accueillant le flux secondaire**:
- **Relation multiple**: