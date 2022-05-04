import type { StringB58, StringHex } from '../../types/SpecialStrings.d';
export declare type ClaimGiftCodeParams = {
    accountId: StringHex;
    address?: StringB58;
    giftCodeB58: StringB58;
};
export declare type ClaimGiftCodeResult = {
    giftCodeStatus: string;
};
declare const claimGiftCode: ({ accountId, address, giftCodeB58, }: ClaimGiftCodeParams) => Promise<ClaimGiftCodeResult>;
export default claimGiftCode;
