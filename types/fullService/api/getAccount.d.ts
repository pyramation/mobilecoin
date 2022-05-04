import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type GetAccountParams = {
    accountId: StringHex;
};
declare type GetAccountResult = {
    account: Account;
};
declare const getAccount: ({ accountId }: GetAccountParams) => Promise<GetAccountResult>;
export default getAccount;
