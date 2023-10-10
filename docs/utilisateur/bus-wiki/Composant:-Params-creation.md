_Ne fonctionne pas? Voir la documentation de [Transformation](https://github.com/assemblee-virtuelle/Semantic-Bus/wiki/Composant:-Transform)_

# Informations sur la récursivité : 

## Quand en a-t-on besoin?

Quand on a besoin d'extraire toutes les données provenant d'une API qui ne renvoie qu'une partie limitée des données dans une url du type "https://test.com/offset/500/page/1".
Cette API sera appelée API externe.
L'API que nous créerons s'appelera API interne.
Nous allons donc trouver un moyen de parcourir toutes les "pages" différentes de données.
Pour ce faire il faut : 
1. Trouver une condition d'arrêt 
2. Mettre en place une boucle pour la récursivité ! 

## Principe de la récursivité dans Grappe

![recursivite_bus](https://user-images.githubusercontent.com/63355855/213407953-ed51ecc0-7334-4afa-a8b2-e8e20e67d66e.png)

Nous allons tout d'abord nous baser sur l'URL permettant d'avoir accès aux premières données de l'API récursive.
Cette URL est passée dans un body d'une requête post à notre API interne.
L'API interne va alors traiter les données : 
1. Elle va chercher à accéder à la page correspondant à l'URL de l'API externe.
2. Elle recupère les données correspondant à l'itération et en parallèle :
- on définit un critère de fin d'itération
- on teste ce critère 
- si l'appel doit être continué, on appelle notre API interne sinon on renvoie un tableau vide

Voici ce qu'il se passe lors de l'appel de l'API interne : 

![recursivite_bus-Page-3 drawio](https://user-images.githubusercontent.com/63355855/214236560-808b59e2-275f-4de2-806f-cc3b2f4b7cd6.png)

3. Nos données sont agrégées à chaque passage dans le flux de traitement de l'API interne.
4. Si un tableau vide a été renvoyé, on renvoie l'intégralité des données provenant de l'API externe.
5. Notre API interne est désormais utilisable et elle contient toutes les données de l'API externe ! 

## Composants utilisés  

![grappe_schema_composants](https://user-images.githubusercontent.com/63355855/213409293-056a7a6f-e5aa-490a-990f-b7a88a775f7d.png)

- 1er Http consumer : Get sur {£.body.urlNext} qui sera notre url de l'API externe.

### Boucle partie du bas : 

- JS evaluation + transform : renvoient l'url de l'API externe utilisée par le 1er Http consumer. 
![image](https://user-images.githubusercontent.com/63355855/212878590-d5d2009d-9268-4967-b70b-e2a0af5c2df1.png)
- 2ème Http consumer : Post sur url API grappe de récursivité avec deeper focus activé.
- Root from path : vers l'endroit où sont les données, ici le body de la requête.
- Flat : avoir toutes les données à plat.

### Boucle partie haut : 

- Root from path + keytoarray + flat : récupération des données de l'API externe.

### Boucle fin : 

- Aggregate : permet de créer la récursivité en attendant qu'un tableau vide soit donné pour arrêter la boucle récursive. Permet de compiler toutes les données.
- Http provider : Api interne grappe.io.

### Suite : 

En général, il faudra créer une partie spécifique à la première initialisation avec l'url de l'API source contenant les premières données. 
Pour le traitement des données on pourra soit le réaliser durant la boucle itérative soit à la fin quand on a accès à toutes les données.

## Conseil

Pour un meilleur débuggage il est conseillé d'utiliser l'onglet paramétrer (pour augmenter le nombre de flux visibles) et l'onglet consulter (pour voir les flux sur lesquels on travaille).