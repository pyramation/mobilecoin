import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLogs } from '../../types/TransactionLog.d';
declare type GetAllTransactionLogsForAccountParams = {
    accountId: StringHex;
};
declare type GetAllTransactionLogsForAccountResult = TransactionLogs;
declare const getAllTransactionLogsForAccount: ({ accountId, }: GetAllTransactionLogsForAccountParams) => Promise<GetAllTransactionLogsForAccountResult>;
export default getAllTransactionLogsForAccount;
