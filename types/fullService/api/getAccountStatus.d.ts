import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type GetAccountStatusParams = {
    accountId: StringHex;
};
declare type GetAccountStatusResult = {
    account: Account;
};
declare const getAccountStatus: ({ accountId, }: GetAccountStatusParams) => Promise<GetAccountStatusResult>;
export default getAccountStatus;
