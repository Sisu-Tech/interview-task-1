// #####################################
// # DONT CHANGE ANYTHING IN THIS FILE #
// #####################################

export interface User {
    id: string;
    username: string;
}

export interface UserProfile {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    city: string;
    address: string;
    postalCode: string;
}

export interface UserTransaction {
    userId: string;
    amount: number;
    type: TransactionType;
    currency: Currency;
}

export type Currency = 'EUR' | 'USD' | 'GBP';
export type TransactionType = 'credit' | 'debit';
