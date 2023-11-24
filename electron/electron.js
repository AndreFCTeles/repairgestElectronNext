// src/electron-main.js
const { app, BrowserWindow, autoUpdater } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
   mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
      },
   });

   const startUrl = isDev
      ? 'http://localhost:3000' // Next.js development server URL
      : url.format({
         pathname: path.join(__dirname, '../out/index.html'),
         protocol: 'file:',
         slashes: true,
      });

   mainWindow.loadURL(startUrl);

   mainWindow.on('closed', () => (mainWindow = null));
}

// Set the update server URL (replace with your server URL)
// autoUpdater.setFeedURL('https://your-update-server.com');

app.on('ready', () => {
   createWindow();
   // Check for updates on app start
   // autoUpdater.checkForUpdatesAndNotify();
});




//iOS event listeners
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
   if (mainWindow === null) createWindow();
});
