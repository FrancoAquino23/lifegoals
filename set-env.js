const fs = require('fs');
const path = require('path');

const envDirectory = './src/environments';
const targetPath = path.join(envDirectory, 'environment.ts');

if (!fs.existsSync(envDirectory)) {
  fs.mkdirSync(envDirectory);
}

const envConfigFile = `
export const environment = {
  production: true,
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}'
  }
};
`;

fs.writeFileSync(targetPath, envConfigFile);
console.log('Archivo environment.ts generado correctamente.');
