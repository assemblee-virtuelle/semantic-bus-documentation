_à renommer HTTP Provider?_

#### HTTP Provider
Met à disposition une API HTTP. Permet au flux de données d'être appelé par une requête HTTP.

### Exemple 

On peut utiliser ce composant à la fin de notre flux de données pour le rendre accessible par une API à d'autres personnes.
Son url commencera par `https://grappe.io/data/api/` suivi de chiffres et de lettres et du texte qu'on souhaitera mettre à la fin de la case du paramètre "Clé de l'api".
Ainsi si on décider d'appeler sa clé "saveur d'orient" on écrira ceci à la fin de la clé.
En sauvegardant, l'url d'accès à la nouvelle API (`https://grappe.io/data/api/1234d5c6ab7d8e9101`) apparait dans "Url de l'API" et vous pouvez y accéder en cliquant dessus.

### Paramètres : 

- **Clé de l'api**: Il faut écrire du texte à la fin de la clé pour compléter sa, sauvegarder et recharger la page pour voir l'URL de l'API s'afficher en entière
- **Url de l'API**: Url générée après avoir entré du texte à la fin de la clé de l'API.
- **Content-type**: Type de contenu de la requête HTTP, par exemple `application/json`.
- **Composant qui tient le flux principal**: Sert à préciser quel composant de la chaine de données contient le flux de données principal