import type { Account } from '../../types/Account.d';
declare type ImportAccountParams = {
    entropy: string;
    firstBlockIndex?: string;
    name: string | null;
};
declare type ImportAccountResult = {
    account: Account;
};
declare const importLegacyAccount: ({ entropy, firstBlockIndex, name, }: ImportAccountParams) => Promise<ImportAccountResult>;
export default importLegacyAccount;
