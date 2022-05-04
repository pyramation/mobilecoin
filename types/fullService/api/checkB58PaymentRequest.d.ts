import type { StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
export declare type CheckB58PaymentRequestParams = {
    b58Code: StringB58;
};
export declare type CheckB58PaymentRequestResponse = {
    error?: string;
    publicAddressB58?: StringB58;
    value?: StringUInt64;
};
export declare type CheckB58PaymentRequestResult = {
    b58Type: string;
    data: CheckB58PaymentRequestData;
};
declare type CheckB58PaymentRequestData = {
    value: StringUInt64;
    publicAddressB58: StringB58;
    memo: string;
};
declare const checkB58PaymentRequest: (b58Code: CheckB58PaymentRequestParams) => Promise<CheckB58PaymentRequestResponse>;
export default checkB58PaymentRequest;
