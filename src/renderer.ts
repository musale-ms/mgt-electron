import { Providers } from "@microsoft/mgt-element";
import { ElectronProvider } from "@microsoft/mgt-electron-provider/dist/Provider";
// import the mgt components so we can use them in our html
import "@microsoft/mgt-components";

// initialize the auth provider globally
Providers.globalProvider = new ElectronProvider();
