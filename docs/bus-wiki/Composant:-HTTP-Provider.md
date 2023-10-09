Permet d'envoyer des requêtes grâce à une url et des paramètres.
Méthodes autorisées : Get, Post, Patch, Put, Delete.
On peut décider de mettre des données dans la requête ou non avec le paramètre "corps de requête vide".
Un certain nombre de content-type est autorisé (application/json, application/ld+json etc.)

Pour les données "sémantiques", il faut utiliser un content-type "application/ld+json" et un Header "accept" qui vaut "application/ld+json".