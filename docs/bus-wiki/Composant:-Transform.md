Transforme un objet par mapping grâce à un objet transformation.

### Exemples

#### Changer le nom des champs

Prenons cette donnée en exemple : 
`{ id : "2", fields { city : "Dar es salaam", contact : "biobuutz@gmail.com" } }`

Si l'on souhaite que les champs city et contact soient renommés en "addressLocality" et en "email", il suffit d'appuyer à droite dans le carré bleu, sur "append" deux fois et de rentrer ceci : 
```js
id : $.id
email : $.fields.Contact
addressLocality : $.fields.City
```

Vous noterez que pour accéder à un champs il suffit de faire `$.champs`.
Et pour accéder à un objet au sein de notre donnée, il suffit de mettre son nom après un signe "$" et de mettre le nom du champs recherché par la suite : `$.objet.champs`.

Ce qui donnera comme résultat : 
`{ id : "2", email : "biobuutz@gmail.com", addressLocality : "Dar es Salaam" }`

#### Réorganiser la donnée

Si l'on souhaite mettre le champs adressLocality dans un objet address, il suffit d'appuyer à droite du Bouton Append et de selectionner un objet.
On pourra par la suite y ajouter des champs comme on l'a fait précédemment.

```js
id : $.id
email : $.fields.Contact
address {
 addressLocality : $.fields.City
}
```

donnera donc : 
`{ id : "2", email : "biobuutz@gmail.com", address { addressLocality : "Dar es Salaam" } }`

#### Modification de la donnée

On peut également réaliser des traitements sur la donnée, comme lui demander si elle contient bien un signe '@' pour une adresse mail, mettre toutes les valeurs d'un champs en minuscule etc..
On commencera alors le traitement par `=` et on mettra le champs entre `{}`.

Reprenons cette donnée : 
`{ id : "2", fields { city : "Dar es Salaam", contact : "biobuutz@gmail.com" } }`

Si l'on souhaite que le champs "Dar es Salaam" apparaisse en minuscule, on peut faire : 

```js
id : $.id
email : $.fields.Contact
addressLocality : ={$.fields.City}.toLowerCase()
```

On obtiendra : 
`{ id : "2", fields { city : "dar es salaam", contact : "biobuutz@gmail.com" } }`

* Pour mettre un champs par défaut quand la valeur du champs est vide on peut faire : 
`email : ={$.fields.Contact} ? {$.fields.Contact} : 'Autre'`
* Pour vérifier si les valeurs d'un champs contiennent un signe '@' et ne pas renvoyer la valeur si il n'y en a pas :
`email : ={$.fields.Contact}.includes('@') ? {$.fields.Contact} : '' `
* Pour donner une valeur constante au champs on peut faire `email : marshmallow@gmail.com` sans mettre le signe $ !

### Fonctionnement technique 

Le composant Transform liste des opérations à effectuer pour chaque donnée fournie en entrée.
Il est capable de transformer la structure des données. Il se paramètre grâce à un objet de transformation qui décrit comment transformer la structure.
Il est basé sur cette librairie : https://www.npmjs.com/package/jsonpath-object-transform

### Mise en garde ⚠️ 

* Lorsque le nom d'un champ contient des majuscules/des espaces il faut les préciser.
Par exemple avec un champs `ZIP code` pour la transformation on aura `postalCode : $.fields.ZIP code` 

### Paramètres

- **Détail des évaluations**: 
- **Conserver les champs de la source**: Permet de conserver les anciens champs de la source de données.
- **Version du Transformer**: V1 ou V2, les transformers agissent de manières différentes, la V2 étant la plus récente.