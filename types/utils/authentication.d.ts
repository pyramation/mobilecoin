import { SjclCipherEncrypted } from 'sjcl';
export declare const encryptAndStorePassphrase: (passphrase: string) => Promise<{
    encryptedPassphrase: SjclCipherEncrypted;
    secretKey: string;
}>;
export declare const validatePassphrase: (passphrase: string, encryptedPassphrase: SjclCipherEncrypted) => Promise<{
    secretKey: string;
}>;
