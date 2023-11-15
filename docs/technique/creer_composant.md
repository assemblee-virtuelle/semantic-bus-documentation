---
sidebar_position: 4
title: Créer un composant
tags: [bus sémantique, technique]
---

# Comment créer un composant dans le Bus Sémantique?

:::caution
Cette page est encore en cours de construction.
:::

Les composants sont créés grâce à différents lignes de code et fichier créés dans les parties main et engine (moteur du bus) du Bus Sémantique.

Les fichiers servant à "afficher" le composant dans le bus sont situés dans la partie main, à "../main/client/static/tag/editorComponents/{TYPE DE VOTRE COMPOSANT}/{NOM DE VOTRE COMPOSANT}.tag".
Le nom du composant s'écrit de la sorte "split-editor" ("nomducomposant-editor"). 
Il existe différents dossiers permettant de classer votre composant en fonction de ses utilités. Le dossier "bdd" représente par exemple les composants de base de données (requêtage, création etc.).

![components-type](/img/type-components.png)

Ce sont des fichiers .tag, on y retrouve le code html du composant ainsi qu'une partie de code js permettant de gérer les mises à jour des données avec le front.
Il faudra customiser le composant en fonction de ce qui est souhaité graphiquement (checkbox, propriétés à entrer..) ainsi que compléter le code riot js associé.

Structure d'un fichier graphique .tag
```html
<!-- bouton aide -->
  <div class="contenaireH" style="margin-left:97%">
    <a href="https://github.com/assemblee-virtuelle/Semantic-Bus/wiki/Composant:----CLASSNAME---" target="_blank"><img src="./image/help.png" alt="Aide" width="25px" height="25px"></a>
  </div>
 <!-- Titre du composant -->
  <div class="contenaireV title-component">{data.type}</div>
  <div>
    <div class="bar"/>
  </div>
  <!-- Description du composant -->
  <div class="title-description-component">{data.description}</div>
  <div>
    <div class="bar"/>
  </div>
  <!-- Customisation du composant ci-dessous -->

<script>
  this.updateData=function(dataToUpdate){
    this.data=dataToUpdate;
    this.update();
  }.bind(this);

  this.on('mount', function () {
    RiotControl.on('item_current_changed',this.updateData);
  });
  this.on('unmount', function () {
    RiotControl.off('item_current_changed',this.updateData);
  });
</script>
```

Il y a ensuite les fichiers permettant de construire les classes qui serviront lors de l'affichage des composants.
Ces derniers sont situés à "../main/server/workspaceComponentInitialize/{NOM DE CLASSE}.js". 
Ici les noms de classe sont de la forme "split.js" "{NOM DU COMPOSANT}.js".

Il faudra bien évidemment changer la description du composant, son logo ("default.svg") ainsi que les fichiers .tag en fonction de l'utilité du composant.

Structure d'un fichier de classe 
```js
'use strict'
class ---CLASSNAME--- {
  constructor () {
    this.type = '---CLASSNAME---'
    this.description = 'Description du composant à changer'
    this.editor = '---EDITORNAME---'
    this.graphIcon = 'default.svg'
    this.tags = [
      'http://semantic-bus.org/data/tags/middleComponents',
      'http://semantic-bus.org/data/tags/middleQueryingComponents'
    ]
  }
}

module.exports = new ---CLASSNAME---()
```

Il reste ensuite à coder le composant. Que va-t-il calculer?
Cette partie se fait dans "./engine/workspaceComponentExecutor/{NOM DU COMPOSANT}.js".
Ici les noms de classe sont de la forme "split.js" "{NOM DU COMPOSANT}.js".

Structure du code js du composant
```js
'use strict';
class ---CLASSNAME--- {
    constructor() {}
    pull(data, flowData, pullParams) {
        return new Promise((resolve, reject) => {
            try {
                var result = []

                resolve({
                    data: result
                })
            } catch (e) {
                reject(e)
            }
        })
    }
}
module.exports = new ---CLASSNAME---()
```

Afin de faire les liens entre ces 3 fichiers/classes, il faudra rajouter des lignes de code dans ces fichiers (en général à la fin du fichier) : 
- main/server/services/technicalComponentDirectory.js
  ```js
  {NOM DE CLASSE}: require('../workspaceComponentInitialize/{NOM DE CLASSE}.js'),
  ```
- engine/services/technicalComponentDirectory.js
  ```js
  {NOM DE CLASSE}: require('../workspaceComponentExecutor/{NOM DE CLASSE}.js'),
  ```
- Dans la partie de configuration (hébergé en ligne ou dans le fichier config.json ou config.local.json)
  ```json
  "{NOM DE CLASSE}":{"price":40},
  ```