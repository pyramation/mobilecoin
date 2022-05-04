import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog } from '../../types/TransactionLog.d';
import type { TxProposal } from '../../types/TxProposal.d';
declare type SubmitTransactionParams = {
    accountId?: StringHex;
    txProposal: TxProposal;
};
declare type SubmitTransactionResult = {
    transaction: TransactionLog;
};
declare const submitTransaction: ({ accountId, txProposal, }: SubmitTransactionParams) => Promise<SubmitTransactionResult>;
export default submitTransaction;
