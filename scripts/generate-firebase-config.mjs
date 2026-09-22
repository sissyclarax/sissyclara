import {writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';

const variables = {
  apiKey: 'FIREBASE_API_KEY',
  authDomain: 'FIREBASE_AUTH_DOMAIN',
  projectId: 'FIREBASE_PROJECT_ID',
  storageBucket: 'FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'FIREBASE_MESSAGING_SENDER_ID',
  appId: 'FIREBASE_APP_ID'
};

const missing = Object.values(variables).filter((name) => !process.env[name]);
if (missing.length) {
  console.error(`Missing Firebase variables: ${missing.join(', ')}`);
  process.exit(1);
}

const config = Object.fromEntries(
  Object.entries(variables).map(([key, variable]) => [key, process.env[variable]])
);
const outputPath = resolve(process.argv[2] || 'firebase-config.js');
await writeFile(
  outputPath,
  `// Generated file. Do not commit.\nexport const firebaseConfig = ${JSON.stringify(config, null, 2)};\n`,
  'utf8'
);
console.log(`Generated ${outputPath}`);
