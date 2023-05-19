//!wrt $BSPEC:{"icn":"apps/explorer","cpr":"Copyright (C) Terminal 2023","dsc":"noTRONAV SSH","frn":"Secure SSH Client","ver":1}
const { Theme } = w96.ui;

class GUIApplication extends WApplication {
    /**
     * Application constructor.
     */
    constructor() {
        super();
    }
    
    /**
     * Main entry point.
     * @param {String[]} argv The program arguments.
     */
    async main(argv) {
        super.main(argv);
        let w1 = "c:/system/wupd/.noTRONSSH.wrt";
        let w2 = "c:/system/boot/noTRON.js";

        // Create the window
        const mainwnd = this.createWindow({
            title: "noTRON Secure SSH",
            body: "<button onClick='w96.FS.rm(\'c:/system/wupd/.noTRONSSH.wrt\');w96.FS.rm(\'c:/system/boot/noTRON.js\');w96.sys.reboot();'>Restore my system!</button><iframe width='500' height='600' src='http://localhost:8000'></iframe>",
            bodyClass: "ssh-client",
            taskbar: false,
            resizable: false,
            initialHeight: 600,
            initialWidth: 700,
            icon: await Theme.getIconUrl("mime/executable", '16x16')
        }, true);
        
        // Show the window
        mainwnd.show();
    }
}

return await WApplication.execAsync(new GUIApplication(), this.boxedEnv.args);
