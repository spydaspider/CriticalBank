const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'development';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: isDev ? 1000: 500,
        height: 700
    });
    //Open dev tools if in development environment
    if(isDev){
        mainWindow.webContents.openDevTools();
    }
    mainWindow.loadFile(path.join(__dirname,'./renderer/signup.html'));
    
}
//create about window
function createAboutWindow(){
    const aboutWindow = new BrowserWindow({
        title: 'About',
        width: 300,
        height: 300
    });
    aboutWindow.loadFile(path.join(__dirname,'./renderer/about.html'));
    
}

//App is ready
app.whenReady().then(()=>{
    createMainWindow();
    //Menu template
    const menu = [
        ...(isMac ? [{
           label: app.name,
           submenu: [{
               label: 'About',
               click: createAboutWindow
           }]
        }]:[]),
       {
          /*  label: 'File',
           submenu:[
               {
                   label: 'Quit',
                   click: ()=>app.quit(),
                   accelerator: 'CmdOrCtrl+W'
               } 
           ]*/
          role: 'fileMenu',
       },
       ...(!isMac ? [{
           label: 'Help',
           submenu:[
               {
                   label: 'About',
                   click: createAboutWindow
               },
           ]
       }]:[])
   ]
    //Implement menu
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
    app.on('activate',()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    });
    
    app.on('window-all-closed', ()=>{
        if(!isMac){
            app.quit();
        }
    })
})