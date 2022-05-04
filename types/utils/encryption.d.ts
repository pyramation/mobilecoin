import { SjclCipherEncrypted } from 'sjcl';
export declare const decrypt: (encryptedObject: SjclCipherEncrypted, secretKey: string) => Promise<string>;
export declare const encrypt: (sensitiveString: string, secretKey: string) => Promise<SjclCipherEncrypted>;
