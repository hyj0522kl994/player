// installer.js
var createInstaller = require('electron-installer-squirrel-windows');

createInstaller({
  name : 'TestApp',
  path: './dist/TestApp-win32-ia32',
  out: './dist/installer64',
  authors: 'creamyCode',
  exe: 'TestApp.exe',
  appDirectory: './dist/TestApp-win32-ia32',
  overwrite: true,
  setup_icon: 'favicon.ico'
}, function done (e) {
  console.log('Build success !!');
});
