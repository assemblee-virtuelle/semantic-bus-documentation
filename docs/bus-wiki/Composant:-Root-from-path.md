Extrait une donnée selon son chemin.

### Exemple

#### Extraction d'un objet

Prenons cette donnée en exemple.

```
{
  "success": true,
  "data": {
    "content": "Hello world !"
  }
}
```
Si l'on passe cette donnée au composant avec `data` comme valeur pour le champs "Chemin vers la valeur à récupérer et la mettre à la racine", on obtiendra ce résultat:

```
{
  "content": "Hello world !"
}
```

#### Extraction d'un tableau

Prenons cette donnée en exemple.

```
{
  [{
    "success": true,
    "data": {
      "content": "Hello world !"
    }
  }]
}
```
Pour extraire le contenu de `data` pour une array de ce type, il suffit d'utiliser `0.data` comme valeur du champs "Chemin vers la valeur à récupérer et la mettre à la racine".

### Paramètres 

- **Chemin vers la valeur à récupérer et la mettre à la racine**: Nom du champs à partir duquel va être extrait la donnée.