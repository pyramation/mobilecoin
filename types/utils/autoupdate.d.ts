import { BrowserWindow } from 'electron';
export declare const initializeAutoUpdater: () => void;
export declare const checkForAppUpdates: (appWindow: BrowserWindow | null) => Promise<void>;
