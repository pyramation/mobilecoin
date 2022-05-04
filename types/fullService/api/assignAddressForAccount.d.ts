import type { Address } from '../../types/Address.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type AssignAddressForAccountParams = {
    accountId: StringHex;
    metadata?: string;
};
export declare type AssignAddressForAccountResult = {
    address: Address;
};
declare const assignAddressForAccount: ({ accountId, metadata, }: AssignAddressForAccountParams) => Promise<AssignAddressForAccountResult>;
export default assignAddressForAccount;
