# Salaria : Projet React

Ceci est un simple application React pour la gestion et visualisation des salaires des employés avec système backend PHP. Projet ouvert aux contributions, particulièrement pour les styles et animations.

## 🚀 Prérequis

- **Node.js** (version 18 ou supérieure recommandée)
- **npm** (version 9 ou supérieure) ou yarn (version 1.22+)
- **Git** pour la gestion de version
- **PHP** (version 7+ pour le backend)

## 🛠 Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/ClaudineRas02/projet-salaireemploye.git
cd projet-salaireemploye
```

2. Installer les dépendances:
- dans le dossier Frontend/ 
```bash
cd Frontend/
npm install
```
- dans le dossier Backend/
```bash
cd Backend/
composer install
```
## ⚙ Configuration de l'environnement
1. Créez un fichier .env à la racine du dossier Backend basé sur .env.example (pour la connexion à la base de données):
```ini
DB_HOST=hostname
DB_NAME=dbname
DB_USER=username
DB_PASS=passwd
```
1.  Créez un fichier .env à la racine du dossier Frontend sur .env.example (pour le chemin vers l'api):
```ini
VITE_API_URL =url
```

1. Importer la structure de la base de données:
```bash
   mysql -u username -p SALARIA < salaria_project.sql
```

##  🏃‍♂️ Lancer l'application
1. Dans le dossier Backend
```bash
php -S localhost:8000
```

2. Dans le dossier Frontend
```bash
npm run dev
```
Ouvrez http://localhost:5173 dans votre navigateur.


## 🎨 Zones Ouvertes aux Contributions

- Je cherche particulièrement des contributions pour :

- Améliorations UI/UX

- Animations modernes

- Nouvelles visualisations de données

- Responsive design

- Thèmes dark/light

## 🤝 Guide de Contribution

1. Forkez le projet

2. Créez une branche (git checkout -b feature/amazing-feature)

3. Committez vos changements (git commit -m 'Add some amazing feature')

4. Pushez vers la branche (git push origin feature/amazing-feature)

5. Ouvrez une Pull Request