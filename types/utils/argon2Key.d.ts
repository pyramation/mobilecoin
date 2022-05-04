export declare const KEY_LENGTH = 32;
export declare const SALT_LENGTH = 16;
declare const argon2Key: (password: string) => Promise<{
    secretKey: string;
}>;
export default argon2Key;
