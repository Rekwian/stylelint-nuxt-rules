# stylelint-oi-nuxt-rules

## Description

`stylelint-oi-nuxt-rules` est un ensemble de règles Stylelint conçu pour les projets Nuxt.js, prenant en charge SCSS et Vue. Il intègre des bonnes pratiques et des règles de structuration adaptées pour un développement efficace et cohérent.

---

## Installation

### Étape 1 : Pré-requis

Avant d'utiliser `stylelint-oi-nuxt-rules`, installez les dépendances nécessaires :

```bash
npm install stylelint stylelint-config-standard-scss stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-order --save-dev
```

### Étape 2 : Installer `stylelint-oi-nuxt-rules`

Ajoutez la dépendance à votre projet :

```bash
npm install git+ssh://git@bitbucket.org:proprietes-privees/stylelint-oi-nuxt-rules.git --save-dev
```

---

## Configuration

Créez un fichier stylelint.config.js à la racine de votre projet (ou modifiez-le s’il existe déjà) avec la configuration suivante :

```javascript
export default {
  extends: [
    'stylelint-oi-nuxt-rules',
  ],
};
```

---

## Ajouter un script npm

Ajoutez un script dans le fichier package.json pour exécuter Stylelint :

```json
{
  "scripts": {
    "lint:css": "stylelint **/*.{vue,scss,css}"
  }
}
```

---

## Utilisation

Pour vérifier vos fichiers SCSS, Vue, et CSS avec Stylelint, exécutez la commande suivante :

```bash
npm run lint:css
```
