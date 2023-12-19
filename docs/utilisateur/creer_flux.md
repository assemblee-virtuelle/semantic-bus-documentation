---
sidebar_position: 1
title: Créer un flux de données
tags: [bus sémantique, technique]
---

# Comment créer un flux sur le Bus Sémantique?

:::caution
Cette page est encore en cours de construction.
:::

Tout d'abord, il va vous falloir un compte utilisateur pour accéder à l'application, seule une  adresse email valide vous sera demandée. Une fois connecté, vous arrivez sur la page principale du Bus Sémantique.

![Screenshot du dashboard]("../../../static/img/screenshot-dashboard.png)

Le Dashboard, c’est ici que vous retrouverez tous vos Workflow personnelles et partagées que vous pourrez créer votre premier Workflow.

![Screenshot Nouveau Workflow]("../../../static/img/screenshot-newworkflow.png)

Appuyer sur le bouton “+” pour créer un nouveau Workflow

Renseigner le Nom, une description (facultative) et laisser le nombre d’exécutables consultable à 1, nous y reviendrons. Sélectionner la version du moteur V2 pour avoir la nouvelle version des composants. Vous pouvez maintenant valider les informations.

![Screenshot Nouveau Workflow]("../../../static/img/screenshot-editworkflow.png)

Votre Workflow est désormais créé, vous pouvez voir un nouveau menu qui vient d’apparaître à gauche, ce sont les fonctionnalités, nous y reviendrons. Sur le volet à droite se trouve les composants et l’espace “gris” vide et votre Workflow.

>Le Workflow est un graphe de tâches conçu pour designer, déclarer et paramétrer un traitement dans le Bus Sémantique. Il est composé de connecteurs et de gestionnaires de flux appelés “composants”. Ils aident à interagir et connecter diverses données quelles que soient leurs natures et leurs sources.

Les composants interagissent sur les données et entre eux. Ils sont catégorisés en trois principaux groupes : les connecteurs d’entrées, de sorties et les gestionnaires de flux.

![composant Framacalc]("../../../static/img/component-framacalc.png)

Les connecteurs d’entrée permettent de connecter une source de données sur le Workflow de plusieurs manières :

- Charger le contenu d’un fichier
- Consommer (flux tiré) ou accueillir (flux poussé) des API (web service)
- Connecter une base de données (SQL, NoSQL, sparql...)  
- Récupérer des données sur des documents en ligne (Google Sheets, FrameCalc,..)
- Scrapper des pages web
- Interroger des flux déjà créés

Les Gestionnaires de flux quant à eux exécutent des tâches variées et complexes sur les données (transformer, agréger, joindre, filtrer, géolocaliser...) et acheminent le flux traité d’un composant à l’autre. Généralement en bout de course, les connecteurs de sortie réceptionnent et convertissent le flux traité pour adapter les données au(x) format(s) de sortie(s). Le résultat du composant de sortie peut être poussé via une API ou sur un système tabulaire (BDD, fichier externe…) mais peut être également appelé par un autre Workflow. 

Pour commencer votre traitement, choisissez un composant d’entrée de votre choix sur le volet de droite, placez-le sur le Workflow, sélectionnez le composant et cliquez sur l’icône éditer. Il vous reste plus qu’à le paramétrer en fonction de votre source de données. 

Il ne vous reste plus qu'à exécuter le composant pour voir le résultat !
Pour cela rien de plus simple, sélectionnez le composant et cliquez sur l’icône play.

Lors de l’exécution, une couleur verte, orange ou rouge apparaît autour du composant qui permet de suivre son statut. Orange : exécution en cours, Vert : exécution terminée ou Rouge : exécution en erreur.

>Lorsque vous aurez plusieurs composants, ces couleurs permettent également de suivre l’avancée du flux des données

Afin d’assister à la création du Workflow, il est possible consulter le résultat du composant sélectionné. Pour cela, il suffit de cliquer sur l’icône “jaune” qui est apparu autour du composant une fois le traitement terminé sur celui-ci.

>La persistance du process est une sauvegarde temporaire du flux de données à la sortie du composant.

Vous pouvez maintenant choisir le composant suivant pour le paramétrer en fonction du résultat du composant précédent et du traitement que vous souhaitez appliquer. Il ne reste plus qu’à connecter ce composant au précédent et ainsi répéter l’opération jusqu'à obtenir le résultat escompté.

>Tous les composants disposent de deux connecteurs à droite et à gauche, permettant de diriger le flux des données d’un composant à l’autre. Il est possible de connecter plusieurs composants sur un même connecteur.

