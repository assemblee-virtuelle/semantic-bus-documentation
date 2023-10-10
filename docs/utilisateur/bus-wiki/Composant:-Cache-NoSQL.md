Met en cache les données pour pouvoir les réinterroger plus tard.

### Fonctionnement technique

Ce composant permet de stocker les données traitées dans une base de données (cache). 
Cela permet d’avoir toujours des données finalisées à disposition sans avoir besoin de refaire tous les calculs.
La mise en cache permet de gagner en performance, il faut donc l'utiliser sans modération lors du débuggage de flux de données .

### Mise en garde ⚠️ 

* Ce stockage n’est pas considéré comme une base de donnée “métier” mais uniquement comme un stockage technique.

### Paramètres

- **Historisation**: Si coché, les données seront ajoutées à l'historique ("empilées" les unes après les autres), et visualisables lorsqu'on édite le composant. Il faut recharger la page et relancer le processus pour voir le résultat.
- **Sortie avec historique**: Si coché, l'entier de l'historique est envoyé au composant suivant.