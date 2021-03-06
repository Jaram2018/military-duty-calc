const {app, BrowserWindow} = require('electron')

function createWindow () {
    win = new BrowserWindow({width: 1000, height: 800, resizable: false})

    win.loadFile('index.html')
    
    win.on('closed', () => {win = null})

}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
    if (process.platform == 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })