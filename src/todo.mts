/* eslint-disable @typescript-eslint/no-unused-vars */
import { User, UserProfile, UserTransaction } from './types.mjs';
import { getAllUsers } from './utils/data.mjs';
import { logger } from './utils/logger.mjs';

export function task(store: Awaited<ReturnType<typeof getStore>>) {
    // TODO: Leave one of the store method calls uncommented (when the method is implemented and run the code.

    for (const user of store.users) {
        logger.log(`Profile for user ${user.id}`, store.getUserProfile(user.id));
        // logger.log(`Transactions for user ${user.id}`, store.getUserTransactions(user.id).length);
        // logger.log(`Account balance for user ${user.id}`, store.getUserAccountBalance(user.id));
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
    const userProfiles: Readonly<UserProfile[]> = [];

    // Task 2
    // You should import getAllUserTransactions method from ./utils/data.mjs and use it to populate the userProfiles variable with data.
    // There is a catch: getAllUserTransactions uses callback API. Make it so that it returns a promise instead and resolves with the data.
    const userTransactions: Readonly<UserTransaction[]> = [];

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
        return [];
    };

    // Task 5
    const getUserAccountBalance = (userId: string): number => {
        // TODO: find and return account balance (the sum of all user transactions) for given user id.
        // Make sure what you return corresponds to the return type of this function.
        return 0;
    };

    // Task 6
    const getUserFullProfile = (userId: string): (User & Omit<UserProfile, 'userId'> & { accountBalance: number }) | null => {
        // TODO: find and return full user profile for given user id.
        // Make sure what you return corresponds to the return type of this function.
        return null;
    };

    // Task 7
    const getUserWithLargestAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the largest account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    // Task 8
    const getUserWithSmallestAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the smallest account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    // Task 9
    const getUserWithSmallestPositiveAccountBalance = (): { accountBalance: number; userId: string | null } => {
        // TODO: find and return the smallest positive account balance.
        // Make sure what you return corresponds to the return type of this function.
        return { accountBalance: 0, userId: null };
    };

    // Task 10
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
        getUserFullProfile,
        getUserWithLargestAccountBalance,
        getUserWithSmallestAccountBalance,
        getUserWithSmallestPositiveAccountBalance,
        getUserWithLargestNegativeAccountBalance,
    };
}
