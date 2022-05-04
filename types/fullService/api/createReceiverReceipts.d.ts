import type { ReceiverReceipts } from '../../types/ReceiverReceipt';
import type { TxProposal } from '../../types/TxProposal';
declare type CreateReceiverReceiptsParams = {
    txProposal: TxProposal;
};
declare type CreateReceiverReceiptsResult = {
    receiverReceipts: ReceiverReceipts;
};
declare const createReceiverReceipts: ({ txProposal, }: CreateReceiverReceiptsParams) => Promise<CreateReceiverReceiptsResult>;
export default createReceiverReceipts;
