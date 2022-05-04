import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type UpdateAccountNameParams = {
    accountId: StringHex;
    name: string;
};
declare type UpdateAccountNameResult = {
    account: Account;
};
declare const updateAccountName: ({ accountId, name, }: UpdateAccountNameParams) => Promise<UpdateAccountNameResult>;
export default updateAccountName;
