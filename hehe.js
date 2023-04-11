const fs = w96.FS;
const { sysConf: SCM } = w96;

SCM.set("System/Session/Shell/exec", "c:/user/appdata/z.wrt");4
await SCM.syncRoot("Software");
