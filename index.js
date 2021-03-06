const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
})

app.on('window-all-closed', () => {
  app.quit()
})
