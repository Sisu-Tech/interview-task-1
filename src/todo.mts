import { User, UserProfile, UserTransaction } from './types.mjs';
import { getAllUsers } from './utils/data.mjs';
import { logger } from './utils/logger.mjs';

export async function getStore() {
    const users: User[] = await getAllUsers();

    // Task 1: getAllUserProfiles uses callback API. Convert it here to use async/await.
    // const userProfiles: UserProfile[] = getAllUserProfiles();

    // Task 2: getAllUserTransactions uses callback API. Convert it here to use async/await.
    // const userTransactions: UserTransaction[] = getAllUserTransactions();

    // Task 3
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getProfileForUser = (userId: string): Omit<UserProfile, 'userId'> | null => {
        // TODO: find and return user profile for given user id.
        return null;
    };

    // Task 4
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getTransactionsForUser = (userId: string): Omit<UserTransaction, 'userId'>[] => {
        // TODO: find and return all user transactions for given user id.
        return [];
    };

    // Task 5
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getAccountBalanceOfUser = (userId: string): number => {
        // TODO: find and return account balance (the sum of all user transactions) for given user id.
        return 0;
    };

    // Task 6
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getFullUserProfile = (userId: string): (User & Omit<UserProfile, 'userId'> & { accountBalance: number }) | null => {
        // TODO: find and return full user profile for given user id.
        return null;
    };

    // Task 7
    const getUserWithLargestAccountBalance = (): {
        accountBalance: number;
        userId: string | null;
    } => {
        // TODO: find and return the largest account balance.
        return { accountBalance: 0, userId: null };
    };

    // Task 8
    const getUserWithSmallestAccountBalance = (): {
        accountBalance: number;
        userId: string | null;
    } => {
        // TODO: find and return the smallest account balance.
        return { accountBalance: 0, userId: null };
    };

    // Task 9
    const getUserWithSmallestPositiveAccountBalance = (): {
        accountBalance: number;
        userId: string | null;
    } => {
        // TODO: find and return the smallest positive account balance.
        return { accountBalance: 0, userId: null };
    };

    // Task 10
    const getUserWithLargestNegativeAccountBalance = (): {
        accountBalance: number;
        userId: string | null;
    } => {
        // TODO: find and return the largest negative account balance.
        return { accountBalance: 0, userId: null };
    };

    return {
        users,
        getProfileForUser,
        getTransactionsForUser,
        getAccountBalanceOfUser,
        getFullUserProfile,
        getUserWithLargestAccountBalance,
        getUserWithSmallestAccountBalance,
        getUserWithSmallestPositiveAccountBalance,
        getUserWithLargestNegativeAccountBalance,
    };
}

export function task(store: Awaited<ReturnType<typeof getStore>>) {
    // TODO: Leave one of the store method calls uncommented (when the method is implemented and run the code.

    for (const user of store.users) {
        logger.log(`Profile for user ${user.id}`, store.getProfileForUser(user.id));
        // logger.log(`Transactions for user ${user.id}`, store.getTransactionsForUser(user.id).length);
        // logger.log(`Account balance for user ${user.id}`, store.getAccountBalanceOfUser(user.id));
        // logger.log(`Full profile for user ${user.id}`, store.getFullUserProfile(user.id));
    }

    // logger.log(`User with largest account balance`, store.getUserWithLargestAccountBalance());
    // logger.log(`User with smallest account balance`, store.getUserWithSmallestAccountBalance());
    // logger.log(`User with smallest positive account balance`, store.getUserWithSmallestPositiveAccountBalance());
    // logger.log(`User with largest negative account balance`, store.getUserWithLargestNegativeAccountBalance());
}
