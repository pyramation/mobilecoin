import type { StringB58 } from '../../types/SpecialStrings.d';
export declare type CheckGiftCodeStatusParams = {
    giftCodeB58: StringB58;
};
export declare type CheckGiftCodeStatusResult = {
    giftCodeStatus: string;
    giftCodeValue: number;
};
declare const checkGiftCodeStatus: ({ giftCodeB58, }: CheckGiftCodeStatusParams) => Promise<CheckGiftCodeStatusResult>;
export default checkGiftCodeStatus;
