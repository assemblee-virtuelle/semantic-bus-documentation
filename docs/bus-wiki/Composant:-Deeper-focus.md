Précise le niveau de profondeur de traitement du flux de la grappe d’objets qui s'appliquera sur le prochain bloc de traitement des données. 

### Exemple

Si on a une donnée `{ address : { postalCode : "22110" , city : "Rostrenen" }}` et que l'on souhaite avoir uniquement accès aux données contenues dans les champs postalCode et city, on mettra "address" dans le paramètre "Chemin à inspecter pour les traitements qui suivent" et si on souhaite accélerer le temps du prochain traitement des données, on mettra un chiffre dans "Nombre de traitements parallèles" (comme 2 par exemple, pour avoir 2 traitements de données en parallèle).

### Fonctionnement technique 

Envoie les données une par une au composant suivant (B). Lorsque le traitement est terminé, envoie l'ensemble des données traitées au composant d'après (C). Ce composant devrait être utilisé en particulier avant les composants qui demandent un traitement lourd, comme le Geocoding, mais même avec tout type de composant de transformation. pour éviter des problèmes de mémoire.

### Mise en garde ⚠️

* Ce composant n'est valable que pour le bloc/composant suivant dans la chaine de traitement des données.
* Il faut faire attention au chiffre mis dans "Nombre de traitements parallèles" parce que certaines API comme celles de Geocoding n'acceptent pas plus d'un certain nombre d'appels en même temps.

### Paramètres

- **Chemin à inspecter pour les traitements qui suivent**: Si vide, l'objet entier sera envoyé. Si un chemin est spécifié (voir le composant [Deeper-focus](https://github.com/assemblee-virtuelle/Semantic-Bus/wiki/Composant:-deeper-focus) pour la syntaxe), seule cette partie du composant sera transmise pour traitement au composant suivant (B). Cependant, le composant C recevra les objets en entier.
- **Nombre de traitements parallèles**: Par défaut 1. Nombre d'objets à envoyer en même temps au composant suivant.

