_à renommer HTTP Consumer_

Créé des API HTTP supportant tous les verbes HTTP (Get, Post, Patch, Put, Delete).

### Exemple 

Si on veut lire des données provenant de cette url : `https://grappe.io/75tzO9hd21otest-donnes`, on va mettre l'url dans "Url externe où envoyer les données", valider l'option corps de requête vide et employer la méthode GET. 
Pour afficher les données il suffit d'appuyer sur "Persistance du processus (payant)" en haut à droite du composant.
Puis sur le petit logo jaune en revenant à la chaîne de composants. Si ça a fonctionné, des données apparaissent.

### Paramètres 

- **Url externe où envoyer les données**: L'url de l'API grâce à laquelle on va pouvoir créer, lire, modifier, corriger, supprimer des données.
- **Corps de requête vide**: ne pas remplir le body de la requete avec le flux. Généralement utilisé pour les requettes GET par exemple.
- **Content-type**: Type de contenu de la requête HTTP, par exemple `application/json`.
- **Méthode** : Le "verbe" HTTP qui déterminera la nature de la requête, par exemple : Get, Post, Patch, Put, Delete.
- **Content-type de réponse forcé**: Dans le as ou la requête ne retourne pas de content-type, il est posible de le forcer ici. Par exemple `application/json`.
- **Header**: Informations supplémentaires pouvant être rajoutées lors d'une requête, par exemple `Accept-Encoding : gzip`.