# interview-task-1

## After cloning the repository:

-   Make sure you have **NodeJS** _>=16.0.0 <18.19.0_ installed `nvm install 18.18.2`
-   Install packages by running `npm install`
-   Turn off any AI based code completion in your IDE (CoPilot etc.) as we are not evaluating your ability to use AI based code completion tools. We are evaluating your ability to write code and solve problems.

## Task Description

There is a store object factory in `./src/todo.mts` which has the following methods on it:

-   `getProfileForUser`
-   `getTransactionsForUser`
-   `getAccountBalanceOfUser`
-   `getFullUserProfile`
-   `getUserWithLargestAccountBalance`
-   `getUserWithSmallestAccountBalance`
-   `getUserWithSmallestPositiveAccountBalance`
-   `getUserWithLargestNegativeAccountBalance`

You task is to implement all of these methods. The `./src/todo.mts` file is also the only file you should modify as part of this task. The store has the following variables with data in scope that you should source the data from: `users`, `userProfiles`, `userTransactions`. You can create more variables for the data if needed for example to transform the data into a different data structure or format. Don't change the definitions or data in the aforementioned variables unless the task description explicitly asks you to do so.

Inside `./src/todo.mts` you will also find `task` function which is being passed the store object that you're working on. After you implement the `getProfileForUser` method you can comment out the line that calls this method and uncomment the next line that calls `getTransactionsForUser` and so on so we always call one method at a time. This is necessary because we want to benchmark the execution time of each method separately.
