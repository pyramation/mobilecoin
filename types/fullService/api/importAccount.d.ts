import type { Account } from '../../types/Account.d';
declare type ImportAccountParams = {
    mnemonic: string;
    key_derivation_version: string;
    firstBlockIndex?: string;
    name: string | null;
};
declare type ImportAccountResult = {
    account: Account;
};
declare const importAccount: ({ mnemonic, key_derivation_version, firstBlockIndex, name, }: ImportAccountParams) => Promise<ImportAccountResult>;
export default importAccount;
