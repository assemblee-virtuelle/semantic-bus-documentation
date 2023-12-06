Mettre à disposition une **API HTTP**; Permettre à votre workflow d'être appelé par une requete HTTP.

Permet d'envoyer des requêtes grâce à une url et des paramètres.
Méthodes autorisées : Get, Post, Patch, Put, Delete.

On peut décider de mettre des données dans la requête ou non avec le paramètre "corps de requête vide".

# Exemple
On peut utiliser ce composant à la fin de notre flux de données pour le rendre accessible par une API à d'autres personnes. Son url commencera par https://grappe.io/data/api/ suivi de chiffres et de lettres et du texte qu'on souhaite mettre à la fin de la case du paramètre Clé de l'api". Ainsi si on décide d'appeler sa clé "saveur d'orient" on écrira ceci à la fin de la clé. En sauvegardant, l'url d'accès à la nouvelle API (https://grappe.io/data/api/1234d5c6ab7d8e9101) apparaît dans "Url de l'API" et vous pouvez y accéder en cliquant dessus.
****

# Mise en Garde ⚠️
* Il faut sauvegarder et recharger la page pour voir l'URL de l'API s'afficher en entière.

# Paramètres
* **Clé de l'api**:  nom de l’API
* **Url de l'API**: Url généré après avoir entré du texte à la fin de la clé de l'API. 
 * **Content-type**: Type de contenu de la requête HTTP, exemple :application/json
   * Pour les données "sémantiques", il faut utiliser un content-type "application/ld+json" et un Header "accept" qui vaut "application/ld+json".
* **Composant qui tient le flux principal**: Sert à préciser quel composant de la chaîne de données contient le flux de données principal
