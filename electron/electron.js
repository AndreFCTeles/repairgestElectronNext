const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const { app, BrowserWindow, autoUpdater } = require('electron');
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
         preload: join(__dirname, 'preload.js'),
      },
   });

   // paths
   const startUrl = isDev
      ? 'http://localhost:3000' // Next.js development server URL
      : url.format({
         pathname: path.join(__dirname, '../out/index.html'),
         protocol: 'file:',
         slashes: true,
      });

   // start
   mainWindow.loadURL(startUrl);
   // end
   mainWindow.on('closed', () => (mainWindow = null));
};

// Set the update server URL (replace with your server URL)
/*
const checkForUpdates = () => {
   autoUpdater.setFeedURL('https://your-update-server.com')
   autoUpdater.checkForUpdatesAndNotify();
}
*/

app.setName(appMetadata.name);
app.setVersion(appMetadata.version);
app.whenReady()
   .then(() => {
      installExtension(REACT_DEVELOPER_TOOLS)
         .then((name) => console.log(`Added Extension:  ${name}`))
         .catch((err) => console.log('An error occurred: ', err))
      /* .then(checkForUpdates) */;
   })
   .then(createWindow)
   .then(console.log(__dirname));

//iOS event listeners
app.on('activate', () => { if (mainWindow === null) createWindow(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });