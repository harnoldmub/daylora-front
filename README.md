# Nocely Marketing

Ce dossier contient l'app **marketing** (landing) de Nocely, prête à être extraite dans un repo séparé.

## Setup

1.  Aller dans ce dossier :
    ```bash
    cd nocely-marketinng
    ```

2.  Installer les dépendances :
    ```bash
    npm install
    ```

## Development

Lancer en dev :

```bash
npm run dev
```

Le front proxifie `/api` vers `http://127.0.0.1:3000` par défaut.
Tu peux changer la cible via `VITE_API_PROXY_TARGET` (ex: `https://api.nocely.co`).

## Build

Build de prod :

```bash
npm run build
```
