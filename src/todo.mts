/* eslint-disable @typescript-eslint/no-unused-vars */
import { Currency, User, UserProfile, UserTransaction } from './types.mjs';
import { getAllUserProfiles, getAllUsers, getAllUserTransactions, getCurrencyRate } from './utils/data.mjs';
import { logger } from './utils/logger.mjs';

export async function task(store: Awaited<ReturnType<typeof getStore>>) {
    // TODO: Leave one of the store method calls uncommented (when the method is implemented) and run the code.

    for (const user of store.users) {
        // logger.log(`Profile for user ${user.id}`, store.getUserProfile(user.id));
        // logger.log(`Transactions for user ${user.id}`, store.getUserTransactions(user.id));
        // logger.log(`Account balance for user ${user.id}`, store.getUserAccountBalance(user.id));
        logger.log(`Account balance for user ${user.id}`, await store.getUserAccountBalanceInEur(user.id));
        // logger.log(`Full profile for user ${user.id}`, store.getUserFullProfile(user.id));
    }

    // logger.log(`User with largest account balance`, store.getUserWithLargestAccountBalance());
    // logger.log(`User with smallest account balance`, store.getUserWithSmallestAccountBalance());
    // logger.log(`User with smallest positive account balance`, store.getUserWithSmallestPositiveAccountBalance());
    // logger.log(`User with largest negative account balance`, store.getUserWithLargestNegativeAccountBalance());
}

export async function getStore() {
    const users: Readonly<User[]> = await getAllUsers();

    // Task 1
    // You should import getAllUserProfiles method from ./utils/data.mjs and use it to populate the userProfiles variable with data.
    // There is a catch: getAllUserProfiles uses callback API. Make it so that it returns a promise instead and resolves with the data.
    const userProfiles: Readonly<UserProfile[]> = await new Promise<UserProfile[]>((resolve) => getAllUserProfiles(resolve));

    // Task 2
    // You should import getAllUserTransactions method from ./utils/data.mjs and use it to populate the userProfiles variable with data.
    // There is a catch: getAllUserTransactions uses callback API. Make it so that it returns a promise instead and resolves with the data.
    const userTransactions: Readonly<UserTransaction[]> = await new Promise<UserTransaction[]>((resolve) =>
        getAllUserTransactions(resolve),
    );

    // Task 6
    // Transform the existing data (without mutating the original data) into a data structure that would be more suitable for the tasks below.

    // const userTransactionsByUserId: Readonly<Record<string, UserTransaction[]>> = userTransactions.reduce((acc, transaction) => {
    //     if (!acc[transaction.userId]) {
    //         acc[transaction.userId] = [];
    //     }
    //
    //     acc[transaction.userId].push(transaction);
    //
    //     return acc;
    // }, {} as Record<string, UserTransaction[]>);

    // Task 3
    const getUserProfile = (userId: string): Omit<UserProfile, 'userId'> | null => {
        // TODO: find and return user profile for given user id.
        // Make sure what you return corresponds to the return type of this function.
        return null;
    };

    // Task 4
    const getUserTransactions = (userId: string): Omit<UserTransaction, 'userId'>[] => {
        // TODO: find and return all user transactions for given user id.
        // Make sure what you return corresponds to the return type of this function.
        // return userTransactionsByUserId[userId] ?? [];
        return userTransactions.filter((transaction) => transaction.userId === userId);
    };

    // Task 5
    const getUserAccountBalance = (userId: string): { balance: number; currency: Currency } => {
        // TODO: find and return account balance (the sum of all user transactions) for given user id.
        // Make sure what you return corresponds to the return type of this function.
        const transactions = getUserTransactions(userId);

        const balance = transactions.reduce((acc, transaction) => {
            if (transaction.type === 'credit') {
                return acc + transaction.amount;
            }

            return acc - transaction.amount;
        }, 0);

        return { balance, currency: transactions[0]?.currency };
    };

    // Task 6
    const getUserAccountBalanceInEur = async (userId: string): Promise<{ balance: number; currency: 'EUR' }> => {
        // TODO: find and return the account balance in EUR for given user id. Round the balance to 2 decimal places.
        // Make sure what you return corresponds to the return type of this function.
        const { balance, currency } = getUserAccountBalance(userId);
        const currencyRate = await getCurrencyRate('EUR', currency);
        const balanceInEur = balance * currencyRate;
        return { balance: Number(balanceInEur.toFixed(2)), currency: 'EUR' };
    };

    // Task 7
    const getUserFullProfile = (userId: string): (User & Omit<UserProfile, 'userId'> & { accountBalance: number }) | null => {
        // TODO: find and return full user profile for given user id.
        // Make sure what you return corresponds to the return type of this function.
        return null;
    };

    // Task 8
    const getUserWithLargestAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the largest account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    // Task 9
    const getUserWithSmallestAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the smallest account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    // Task 10
    const getUserWithSmallestPositiveAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the smallest positive account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    // Task 11
    const getUserWithLargestNegativeAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the largest negative account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    return {
        users,
        getUserProfile,
        getUserTransactions,
        getUserAccountBalance,
        getUserAccountBalanceInEur,
        getUserFullProfile,
        getUserWithLargestAccountBalance,
        getUserWithSmallestAccountBalance,
        getUserWithSmallestPositiveAccountBalance,
        getUserWithLargestNegativeAccountBalance,
    };
}
