_à compléter_

Structure les données en vérifiant l'unicité par champs et répartit les données à la source.

## Exemple

Si on prend ces données : 

```js
[
 "bio",
 "écologie",
 "bio",
 "nourrir",
 "com",
 "énergie",
 "nourrir"
]
```

Après être passées par le composant d'unicité sans mettre de champs d'unicité, on aura

```js
[
 "bio",
 "écologie",
 "nourrir",
 "com",
 "énergie",
]
```

Comme on peut le voir, tous les doublons ont disparu! 

## champs d'unicité
Il est possible d'appliquer l'unictité à un tableau d'objet en précisant quels champs doiventn servir à être comparé pour determiner des objects uniques. Dans ce cas, les champs communs seront attribué à la propriété "key" et le reste des données seront reporté dans la propriété data sous fore de tableau pour chaque propriété. Il est possible d'appliquer un composant "property matrix" pour obtenir un tableau d'objet plutot un tableau pour chaque propriété.
```js
[
 "key":{
      champUnicite1:value1,
      champUnicite2:value2
},
  data:{
      champ3:[value3.1,value4.1, value5.1]
      champ4:[value3.2,value4.2,value5.2]
}
]
```

## Paramètres 
- **Champs d'unicité**: Champs choisi sur lequel réaliser l'unicité. Il peut y en avoir un ou plusieurs.