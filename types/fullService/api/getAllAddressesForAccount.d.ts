import type { Addresses } from '../../types/Address.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type GetAllAddressesForAccountParams = {
    accountId: StringHex;
};
declare type GetAllAddressesForAccountResult = Addresses;
declare const getAllAddressesForAccount: ({ accountId, }: GetAllAddressesForAccountParams) => Promise<GetAllAddressesForAccountResult>;
export default getAllAddressesForAccount;
