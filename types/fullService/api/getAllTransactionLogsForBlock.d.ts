import type { StringUInt64 } from '../../types/SpecialStrings.d';
import type { TransactionLogs } from '../../types/TransactionLog.d';
declare type GetAllTransactionLogsForAccountParams = {
    blockIndex: StringUInt64;
};
declare type GetAllTransactionLogsForAccountResult = TransactionLogs;
declare const getAllTransactionLogsForAccount: ({ blockIndex, }: GetAllTransactionLogsForAccountParams) => Promise<GetAllTransactionLogsForAccountResult>;
export default getAllTransactionLogsForAccount;
