---
sidebar_position: 2
title: Description généraliste
tags: [bus sémantique, low code]
---

# Découvrez le Bus Sémantique !

Le Bus Sémantique est un outil clé en main de traitement de données. Il permet de concevoir, éditer et visualiser des traitements sur des données sans nécessiter de développement, le tout sur un graphe dynamique, appelé Workflow.

![]("../../../static/img/Capturegrappe.png)

## Workflow
Le Workflow est composé de connecteurs et de gestionnaires de flux appelés “composants”, qui assurent un suivi clair et précis de chaque étape de votre traitement, garantissant des résultats rapides et efficaces. 

Actuellement, plus d’une trentaine de composants sont disponibles pour interpréter une variété considérable de sources de données en flux poussé et tiré ; effectuer diverses opérations sur les données et acheminent le flux traité d'un composant à un autre ; et enfin, exposer les flux de données traitées sur l'interface ou de les envoyer vers le support de votre choix.

![]("../../../static/img/agregation-agenda-comme-un.png)

## Dashboard
Page principale du Bus Sémantique, c’est ici que vous retrouverez tous vos Workflow personnelles et partagées.

## Les fonctionnalités
### Superviser
La fonctionnalité "Consommation" (en cours de développement) sur le profil utilisateur offre la possibilité de suivre la quantité d'octets traitée et stockée à chaque exécution de vos workflows. Pour obtenir une vue détaillée par composant, veuillez accéder à la fonctionnalité "Superviser" disponible dans l'onglet Workflow.

### Sauvegarder
La fonctionnalité "Consulter" intégrée au Workflow permet de rejouer l'exécution précédente en ignorant les modifications ultérieures. Vous pouvez épingler une exécution spécifique afin de la conserver en tant que point de référence. Cette fonction s'avère utile pour comparer les évolutions du Workflow et effectuer une restauration à partir d'un point de sauvegarde.

Le nombre d'exécutions sauvegardées est limité. Par défaut, cette option est configurée pour sauvegarder uniquement la dernière exécution.

Le composant Cash NoSQL est doté d'une mémoire interne, appelée "cash", conçue pour stocker le flux de données entrant. Cette fonctionnalité permet d'améliorer les performances en offrant la possibilité de réutiliser le flux de données sauvegardé sans avoir à relancer l'exécution des composants précédents. Les données sont stockées localement.

### Partager
La fonctionnalité "Partager" intégrée au Workflow permet de collaborer simultanément sur le même Workflow en temps réel, en utilisant un écran partagé. 

Pour inviter un collaborateur, celui-ci doit disposer d'un compte sur la même instance du Bus Sémantique.
Par défaut, le créateur du Workflow est désigné en tant que propriétaire. Lorsqu'un utilisateur est ajouté, il se voit attribuer le statut d'éditeur, lui conférant ainsi les droits de modification et d'exécution du Workflow. 

Le Workflow s'ajoute automatiquement au Dashboard de l’utilisateur partagé.
