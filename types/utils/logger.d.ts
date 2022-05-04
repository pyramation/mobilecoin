declare const readLog: () => string;
declare const writeLog: (msg: string, lvl?: string) => void;
declare const initLog: (mw: Electron.BrowserWindow) => void;
export { initLog, writeLog, readLog };
