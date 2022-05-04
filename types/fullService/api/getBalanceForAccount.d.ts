import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type GetBalanceParams = {
    accountId: StringHex;
};
declare type GetBalanceResult = {
    balance: BalanceStatus;
};
declare const getBalance: ({ accountId }: GetBalanceParams) => Promise<GetBalanceResult>;
export default getBalance;
