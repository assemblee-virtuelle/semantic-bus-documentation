```diff
- ATTENTION, Ce composant n'est plus supporté. La librairie sheetrock utilisée n'est plus compatible avec les derniere version de linux alpine utilisé par le Bus Sémantique. Pour récupérer des données d'un sheet google,  2 solutions sont possibles:
- * passer par un intermédiare comme nocodeAPI ou un instance n8n
- * utliser l'API V4 de google avec une apikey. L'API V3 n'est plus disponible.
```
## utilisation de l'API V4
### url
l'url à utiliser est de la forme
`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
- spreadsheetId : l'identifiant de votre spreadSheet que vous pouvez trouver dans l'url de celle-ci `https://docs.google.com/spreadsheets/d/spreadsheetId`
- range : nom de la feuille
- apiKey : google impose desormais de disposer d'un apiKey pour identifier qui exploite l'API. [créer et utiliser une clef d'API](https://cloud.google.com/docs/authentication/api-keys?hl=fr)

[documentation google](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get?hl=fr)

[documentation google expliquant la mgigration V3->V4](https://developers.google.com/sheets/api/guides/migration?hl=fr#v4-api_9)
### Query Lanquage non supporté
les 'query' ne sont plus supporté dans l'api V4
extrait de la documentation : `L'API Sheets v4 n'a actuellement pas d'équivalent direct pour les requêtes structurées de l'API Sheets v3. Cependant, vous pouvez récupérer les données pertinentes et les trier si nécessaire dans votre application.`
vous devrez mettre en place un filter pour pouvoir faire un equivalent.

## exploitation des données

### récupération de valeurs
composant 'root from path' paramétré en 'body.values'
### mapping des champs
si vous voulez retrouver les nom de colonne habituel, vous devez passer par un transformer avec cette logique
```json
{
  "A": "$.0",
  "B": "$.1",
  "C": "$.2",
  "D": "$.3",
  "E": "$.4",
  "F": "$.5",
  "G": "$.6",
  "H": "$.7",
  "I": "$.8",
...
}
```

## Ancienne documentation obsolète

Interroge une feuille de calcul Google Sheets qui fournit un flux JSON.
La requête utilise ce langage : https://developers.google.com/chart/interactive/docs/querylanguage .

### Exemple 

Si votre url de Google Sheet est https://docs.google.com/spreadsheets/d/1snqE6leDkZlL61qQ4g-vUmiFjizJyN1OCVAhwWWKSm4/edit#gid=2024304766 et que vous souhaitez récupérer les données de la colonne A et B en commençant à la 5ème ligne.
Il faudra entrer `1snqE6leDkZlL61qQ4g-vUmiFjizJyN1OCVAhwWWKSm4/edit#gid=2024304766` en clé, "select A, B" dans "Sélectionner les colonnes du Google Sheets" et "5" dans "Commencer à partir de la ligne :".

### Paramètres 

- **Insérer la clé du Google Sheet**: La clé présente dans l'url du Google Sheets après `https://docs.google.com/spreadsheets/d` jusqu'à la fin.
- **Sélectionner les colonnes du Google Sheets**: Il faut y mettre le mot clé "select" puis la ou les lettres des colonnes (séparées par des virgules si il y en a plusieurs). Si rien n'est sélectionné, toutes les colonnes du Google Sheet sont récupérées.
- **Commencer à partir de la ligne (Offset)**: Numéro de la ligne à partir de laquelle commencer le traitement des données. Il me semble que les lignes figées sur les Google Sheets ne comptent pas dans le nombre des lignes comptabilisées.

