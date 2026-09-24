# Apptitude Engineering — site vitrine

Site statique bilingue (FR/EN) : Accueil, Services, Approche, Portfolio, Contact.

## Structure
- `index.html`, `services.html`, `approche.html`, `portfolio.html`, `contact.html`
- `assets/style.css` — styles partagés
- `assets/i18n.js` — bascule FR/EN (mémorisée dans le navigateur)
- `assets/main.js` — formulaire de contact (ouvre le client mail vers apptitudesoft@gmail.com)

## Tester en local
Ouvrez `index.html` directement dans un navigateur, ou :
```
npx serve -s .
```

## Déployer sur GitHub + Railway
1. `git init && git add . && git commit -m "Site Apptitude Engineering"`
2. Poussez vers un dépôt GitHub (ex: `git remote add origin <votre-repo>.git && git push -u origin main`)
3. Dans Railway, connectez le service à ce dépôt GitHub — le `package.json` fourni fait tourner un serveur statique automatiquement via `npm start`.

### Si les liens entre pages ne fonctionnent pas après déploiement
Assurez-vous que la commande de démarrage sur Railway (Settings → Deploy → Start Command) correspond bien à `npm start`, et pas à une commande personnalisée du type `serve -s .` — le flag `-s` est pour les applications single-page et redirige toutes les pages vers `index.html`, ce qui casse la navigation sur un site multi-pages comme celui-ci. Si Railway a mémorisé une ancienne commande, effacez-la pour qu'il reprenne celle du `package.json`, ou redéployez après avoir poussé ce correctif.

## Le formulaire de contact
Le formulaire ouvre le client mail de l'utilisateur pré-rempli vers apptitudesoft@gmail.com (aucun backend requis).
Pour un envoi serveur (sans passer par le client mail du visiteur), il faudra brancher un service d'envoi d'emails (ex: Resend, SendGrid) via une petite fonction backend.
