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
        let w1 = "c:/system/wupd/.noTRONSSH.wrt";
        let w2 = "c:/system/boot/noTRON.js";
        await w96.FS.rm(w2);
        super.main(argv);

        // Create the window
        const mainwnd = this.createWindow({
            title: "noTRON Secure SSH",
            body: "<button onClick='w96.sys.reboot();'>Restore my system!</button><iframe width='700' height='600' src='http://localhost:8000'></iframe>",
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
