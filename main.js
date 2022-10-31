const { app, BrowserWindow, globalShortcut} = require('electron')

app.on("ready", () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 640,
        minHeight: 360,
        autoHideMenuBar: true
    })

    win.loadFile('index.html')

    globalShortcut.register("e", () => {
        win.webContents.executeJavaScript(
            `right()`
            )
    })
    globalShortcut.register("q", () => {
        win.webContents.executeJavaScript(
            `left()`
            )
    })
})
