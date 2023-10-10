---
sidebar_position: 1
title: Installation
tags: [bus sémantique, technique]
---

Sur cette page vous trouverez comment installer le Bus Sémantique ou comment accéder à sa version en ligne (Grappe.io).

:::caution
Cette page est encore en cours de construction.
:::

# Comment accéder au Bus Sémantique en ligne?

Il faut se rendre sur le site [Grappe.io](https://grappe.io/ihm/login.html?#connexion) et se créer un compte.

:::info
N'hésitez pas à contacter notre équipe si vous rencontrez un problème lors de la création de compte.
:::

## Architecture du Bus Sémantique

L'application est conteneurisée et se compose de 4 conteneurs principaux.

- **Core (./core)** : services de bas niveau partagés avec les autres conteneurs
- **Main ( ./main )** : service permettant le lancement du front et des APIs
- **Engine (./engine)** : moteur principal de l'application
- **Timer (./timer)** : service permettant de lancer des traitements de données de manière différée

## Comment installer le Bus Sémantique en local?

:::caution
Installez Docker et Docker-compose si vous ne les avez pas sur votre machine.
:::

Munissez-vous d'un terminal de commandes. 

1. Clonez le repository du Bus Sémantique

```bash
git clone git@github.com:assemblee-virtuelle/Semantic-Bus.git
```

2. Copiez un fichier de configuration

Copiez le fichier config.js, personnalisez le et appelez le "config.local.json"

```bash
cd ./Semantic-Bus
cp config.json config.local.json
```

### Méthode préconisée

3. Lancez l'éxécution du Bus Sémantique

```bash
make start
```

4. Liste des commandes réalisables dans votre terminal

```bash
# créer les logs des conteneurs main et engine 
make log 
# forcer la re-création des conteneurs
make restart => force recreate
make stop => kill all container
```

### Méthodes non préconisées

#### Docker-compose

Lancez cette commande dans un terminal : 

```bash
docker-compose up -d
```

#### NVM et NPM

Lancez ces commandes dans un terminal : 

```bash
sudo apt-get install g++ build-essential
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```