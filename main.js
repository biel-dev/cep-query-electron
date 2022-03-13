const { app, BrowserWindow, Menu, Tray } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        minWidth: 700,
        maxWidth: 700,
        minHeight: 500,
        maxHeight: 500,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
          color: '#272727',
          symbolColor: '#9851f5'
        },
        icon: __dirname + './assets/terra.png'

    })

    win.loadFile('public/index.html')
}

Menu.setApplicationMenu(null);


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
})
