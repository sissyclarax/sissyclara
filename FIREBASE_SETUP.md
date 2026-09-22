# Firebase configuration

The browser configuration is generated during deployment and is no longer
stored in the repository.

## GitHub Secrets

In the repository, open **Settings → Secrets and variables → Actions** and add:

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

Then enable GitHub Pages with **GitHub Actions** as its source. Pushing to
`main` runs `.github/workflows/deploy-pages.yml`.

## Local development

Copy `firebase-config.example.js` to `firebase-config.js` and fill in the
Firebase web configuration. The generated file is ignored by Git.

Alternatively, define all six environment variables above and run:

```powershell
node scripts/generate-firebase-config.mjs
```

## Security note

Firebase web configuration is delivered to every visitor and is not a true
secret, even when injected from GitHub Secrets. Firestore Security Rules,
Firebase App Check and API-key restrictions are the security boundary.
