import { app, BrowserWindow } from "electron";
import {
  ElectronAuthenticator,
  MsalElectronConfig,
} from "@microsoft/mgt-electron-provider/dist/Authenticator";

import { join } from "path";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const config: MsalElectronConfig = {
    clientId: "0d21bd08-5027-4009-b04f-73cd3d34519a",
    mainWindow: mainWindow, //This is the BrowserWindow instance that requires authentication
    scopes: [
      "user.read",
      "user.read",
      "people.read",
      "user.readbasic.all",
      "contacts.read",
      "presence.read.all",
      "presence.read",
      "user.read.all",
      "calendars.read",
    ],
  };

  ElectronAuthenticator.initialize(config);

  mainWindow.loadFile(join(app.getAppPath(), "../index.html"));
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
