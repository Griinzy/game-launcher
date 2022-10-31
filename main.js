const { app, BrowserWindow, globalShortcut } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 600,
        minHeight: 180,
        autoHideMenuBar: true
    })
    //win.removeMenu() 
  
    win.loadFile('index.html')
    }
    app.whenReady().then(() => {
        createWindow()
        globalShortcut.register("q", () => {
            document.getElementById('#gallery').checked = true;
        });
    })