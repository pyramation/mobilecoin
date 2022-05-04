export declare type RemoveAccountParams = {
    accountId: string;
};
export declare type RemoveAccountResult = {
    removed: boolean;
};
declare const removeAccount: ({ accountId }: RemoveAccountParams) => Promise<RemoveAccountResult>;
export default removeAccount;
