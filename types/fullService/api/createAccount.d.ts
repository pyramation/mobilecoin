import type { Account } from '../../types/Account.d';
declare type CreateAccountParams = {
    firstBlockIndex?: string;
    name: string | null;
};
declare type CreateAccountResult = {
    account: Account;
};
declare const createAccount: ({ firstBlockIndex, name, }: CreateAccountParams) => Promise<CreateAccountResult>;
export default createAccount;
