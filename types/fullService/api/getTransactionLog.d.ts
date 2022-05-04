import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog } from '../../types/TransactionLog.d';
declare type GetTransactionLogParams = {
    transactionLogId: StringHex;
};
declare type GetTransactionLogResult = {
    transactionLog: TransactionLog;
};
declare const getTransactionLog: ({ transactionLogId, }: GetTransactionLogParams) => Promise<GetTransactionLogResult>;
export default getTransactionLog;
