Interroge l'API **adresse.data.gouv.fr** pour trouver une latitude et une longitude à partir d'une adresse contenue dans chaque donnée.

### Exemple 

Par exemple avec une donnée `{ street : "106 Rue Alexis Labro", postalCode : 33130, ville : "Bègles", country : "France" }` on entrera street dans Rue, postalCode dans Code Postal, city dans Ville et country dans Pays.
Si on souhaite que la latitude et la longitude soit appelées lat et long, il suffit de le mettre dans les paramètres Latitude et Longitude.
Ce qui nous donnera au final une donnée qui ressemble à ça : `{ street : "106 Rue Alexis Labro", postalCode : 33130, ville : "Bègles", country : "France", lat : "44.7873024", long : "-0.5603328 }"`

### Mise en garde ⚠️ 

* Cette API ne concerne que les données situées en France.

### Paramètres 

- **Rue, Ville, Code Postal, Pays**: Permet de sélectionner les champs correspondant au nom de la rue, à la ville, au code postal et au pays. C'est l'adresse contenue dans les données. Ce ne sont pas des paramètres qui sont tous obligatoires à remplir afin d'obtenir un résultat.
- **Latitude, Longitude**: Nom des champs qui recevront la latitude et la longitude trouvée grâce à l'adresse composée du code postal, de la rue... contenue dans les données.