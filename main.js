const { app, BrowserWindow } = require('electron')
const els = require('electron-localshortcut');

app.on("ready", () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 640,
        minHeight: 360,
        autoHideMenuBar: true
    })

    win.loadFile('index.html')

    // oh my fucking god i almost just did a python comment (i used #)
    
    // no onkeydown for you <3 NOOOOO
    els.register(win, 'e', () => {
        win.webContents.executeJavaScript(
            `move("right"),
            updateContent()`
        )
    })

    //thres no difference between '' and ""
    // is it not working?? nope
    els.register(win, 'q', () => {
        win.webContents.executeJavaScript(
            `move("left"),
            updateContent()`
            )
    })
})