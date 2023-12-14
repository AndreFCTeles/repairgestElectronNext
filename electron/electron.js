// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const { join, path } = require('path');
const url = require('url');

let mainWindow;

const appMetadata = {
   name: 'RepairGest',
   //description: 'Aplicação de gestão de reparações - Electrex / João R. Matos',
   version: '0.1.0'
}

function createWindow() {
   mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: true,
         enableRemoteModule: true,
         preload: join(__dirname, 'preload.js'),
      },
   });

   // caminhos
   const startUrl = isDev
      ? 'http://localhost:3000' // Next.js development server URL
      : url.format({
         pathname: path.join(__dirname, '../out/index.html'),
         protocol: 'file:',
         slashes: true,
      });

   // inicio
   mainWindow.loadURL(startUrl);
   // fim
   mainWindow.on('closed', () => (mainWindow = null));
};

app.setName(appMetadata.name);
app.setVersion(appMetadata.version);
app.whenReady()
   /*
      .then(async () => {
         await installExtension(REACT_DEVELOPER_TOOLS, {
            loadExtensionOptions: { allowFileAccess: true }
         })
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err))
      })
      */
   .then(createWindow)
   .then(console.log(__dirname));

//iOS event listeners
app.on('activate', () => { if (mainWindow === null) createWindow(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });