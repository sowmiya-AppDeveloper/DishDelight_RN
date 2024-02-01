/**
 * React hook for accessing functions on the Financial Connections sheet.
 *
 * Retuns the `collectBankAccountToken` and `collectFinancialConnectionsAccounts` functions, and a `loading` boolean that you can use
 * to display loading state (like showing a spinner).
 */
export declare function useFinancialConnectionsSheet(): {
    collectBankAccountToken: (clientSecret: string) => Promise<import("../types/FinancialConnections").TokenResult>;
    collectFinancialConnectionsAccounts: (clientSecret: string) => Promise<import("../types/FinancialConnections").SessionResult>;
    loading: boolean;
};
