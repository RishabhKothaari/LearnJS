'use strict';

var app = require('app')
var browserWindow = require('browser-window')
var mainWindow = null
app.on('ready', function(){
  mainWindow = new browserWindow({
    height:800,
    width:600
  })
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL('file://'+__dirname+'/app/views/index.html')
})
