Ce composant se compose de 3 parties différentes permettant de réaliser une action chacune.
On peut choisir de combiner plusieurs actions essemble ou de toutes les combiner en même temps.

# Parties du composant

Données obligatoires à entrer : 
* **url influx** : url de connexion à votre serveur influx
* **clé influxdb ou clé d'api** : permet de se connecter à tous vos buckets ou seulement à certains buckets et à réaliser certaines actions sur ces derniers selon vos choix.
* **organisation **: le nom de votre organisation sur influxdb

### 1. Suppression des données

Permet de supprimer des données 

Il faut entrer les données suivantes : 
* **bucket** (équivalent bdd)
* **nom de la mesure** (à quoi correspondent nos données? permet de rendre les données uniques)
* **Tag et sa valeur** (sur quel champs de tag et sur quelle valeur contenue dans ce champs va-t-on faire la suppression?)

### 2. Insertion des données

Il faut entrer les données suivantes : 
* **bucket** (équivalent bdd)
* **nom de la mesure** (à quoi correspondent nos données? permet de rendre les données uniques)
* **champs contenant le timestamp** (dans quel colonnes/champs va-t-on pouvoir retrouver le timestamp?)
Le timestamp doit être de cette forme ``
* **champs de tag** : grâce à quels champs va-t-on pouvoir reconnaître/requêter les données? 

### 3. Requêtage des données

Le requêtage des données s'effectue avec un langage créé par Influxdb qui s'appelle Flux.
[Nous vous invitons à aller voir la documentation influxdb sur le sujet.](https://docs.influxdata.com/influxdb/v2.7/query-data/get-started/)

Pour le requêtage il suffit d'insérer une requête de cette forme : 
```
from(bucket:"Prats") 
|> range(start: -18d) 
|> filter(fn: (r) => r._field == "suppliedACenergyToday") 
|> filter(fn: (r) => r.location == "ctm") 
|> filter(fn: (r) => r._measurement == "electricitySensors")
|> aggregateWindow(every: 1d, fn: max, createEmpty: false)
|> yield(name: "max")

```
Les '|>' sont très importants puisqu'ils permettent d'indiquer le passage à la ligne pour la requête influxdb.

# Notes sur le composant

- La suppression des données se fait jusqu'en 1950 uniquement.
- Toutes les données des tags et des fields doivent être des integer pour le moment. 

# [Lexique :](https://docs.influxdata.com/influxdb/v2.7/reference/key-concepts/data-elements/)

- **Buckets** : Conteneur contenant les données (équivalent à un dataset/une base de données mais avec une notion de période de rétention des données) On peut y préciser sur combien de temps/d'années on veut garder les données.
- **Tag** (clé-valeur) : Données indéxées (requêtes plus rapides donc). Optionnels. Moins ils ont de valeur différentes mieux c'est pour le référencement.
- **Field** (clé-valeur) : Colonnes de données + nom de la colonne . Ces données ne sont pas indexées (beaucoup moins rapide d'accès donc)
Exemple : `bees=23i` avec i pour integer
- **Mesure (Measurement)** : Ce sont des chaînes de caractère. Agit comme un conteneur pour les tags, fields et timestamps associés aux données.

## Pistes d'amélioration 

- Permettre de personnaliser la stop date pour la suppression des données (si on ne veut que supprimer les données jusqu'à 1 an en arrière par exemple).
- Gérer d'autres types de valeurs que les integers pour les fields et tags.