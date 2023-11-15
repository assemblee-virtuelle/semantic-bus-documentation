Execute du code JavaScript.
Il s'utilise en entrant du code où `{$.champs}` va représenter le champs auquel on veut faire des modifications.

### Exemples

Exemple de donnée à traiter : 
```json
{"key":"CartographieDesActeursDeLaBifurcationGu","bf_titre":"Cartographie des acteurs de la bifurcation - Guingamp Climat","bf_description":"La commission \"Effondrement\" du collectif Guingamp Climat, avec l'appui technique du Mouvement de l'Adaptation Radicale et de Transiscope, a élaboré une cartographie des acteurs de la bifurcation au niveau de l'agglomération de Guingamp-Paimpol","bf_nom":"Guingamp Climat","bf_auteur":"Thierry Raffin","listeListeActeurs":"4","bf_autre_acteur":"","listeListeEchelle":"3","bf_autre_echelle":"","bf_code_postal":"22200","bf_ville":"Guingamp","bf_latitude":"48.574789910928864","bf_longitude":"-3.159599304199219","bf_contact":"thierry raffin - thraffin@free.fr","bf_site_internet":"https://ferme.yeswiki.net/cartographieGuingampClimat/?Cartographie","bf_autre_motclef":"","bf_partenaires":"- Adaptation radicale  - {{button class=\"new-window\" link=\"https://adaptationradicale.org/\" nobtn=\"1\" text=\"Le site de l'Adaptation radicale\" title=\"Le site de l'Adaptation radicale\"}}\r\n- Transiscope - {{button class=\"new-window\" link=\"https://transiscope.org/\" nobtn=\"1\" text=\"Le site de Transiscope\" title=\"Le site de Transiscope\"}}"
```

Si l'on souhaite accéder uniquement au champs "key" on va mettre ce code dans le composant JsEvaluation : 
```javascript
{$.key}
```

Si l'on souhaite accéder au champs "bf_latitude" dans "geolocation" on va utiliser cette notation : 
```javascript
{$.geolocation.bf_latitude}
```

Et si l'on souhaite transformer toutes les valeurs du champs "key" en minuscule on peut faire : 
```javascript
{$.key}.toLowerCase();
```

Si l'on souhaite tester la commande : 
```javascript
console.log('test');
```

Si on applique `{$.key}.toLowerCase();` sur notre donnée, on obtiendra par exemple : 
```javascript
0 : cartographie des acteurs de la bifurcation - guingamp climat
```

Exemple de donnée : 
```json
[{ "field_1497647" : "500", "id" : 4 }, { "field_1497647" : "200", "id" : 3 }]
```

Si on veut faire une somme de tous les field_1497647, on pourra utiliser le composant JSEval avec : 
```js
{$..}.reduce((acc, obj) => acc + parseInt(obj.field_1497647), 0);
```

### Mise en garde ⚠️ 

* N'oubliez pas d'utiliser un composant Deeper Focus si nécessaire avant son utilisation.
* Il ne faut pas mettre de signe = au début de la commande et ne pas oublier le ; à la fin !

### Paramètres

- **Code Javascript à faire appliquer aux données**: Le code à entrer qui sera appliqué sur toutes les données.
