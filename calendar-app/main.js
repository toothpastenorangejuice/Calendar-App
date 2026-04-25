/* *****************************************************************************/
/*  Title: Nasha Wanich source code
    Author: Wanich, N
    Date: 2026
    Availability: https://github.com/nasha-wanich
*/
/* *****************************************************************************/

const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: false,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});