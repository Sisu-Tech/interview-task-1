// #####################################
// # DONT CHANGE ANYTHING IN THIS FILE #
// #####################################

import * as os from 'os';

import { getStore, task } from './todo.mjs';
import { logger } from './utils/logger.mjs';

const analytics = {
    getStartTime: () => {
        return process.hrtime();
    },
    getExecutionTimeInMs: (startTime: [number, number]) => {
        const endTime = process.hrtime(startTime);
        return Number((endTime[0] * 1000 + endTime[1] / 1000000).toFixed(2));
    },
    getAverageExecutionTimeInMs: (executionTimes: number[]) => {
        return Number(
            (
                executionTimes.reduce(
                    (totalExecutionTimeInMs, currentExecutionTimeInMs) => totalExecutionTimeInMs + currentExecutionTimeInMs,
                    0,
                ) / executionTimes.length
            ).toFixed(2),
        );
    },
};

function wrapInBox(text: string, wrapCharacter = '#') {
    const lines = text.split(os.EOL);
    const maxLineLength = lines.reduce((acc, cur) => Math.max(acc, cur.length), 0);

    return [
        wrapCharacter.repeat(maxLineLength + 4),
        ...lines.map((line) => `${wrapCharacter} ${line.padEnd(maxLineLength)} ${wrapCharacter}`),
        wrapCharacter.repeat(maxLineLength + 4),
    ].join(os.EOL);
}

const store = await getStore();
const executionTimes: number[] = [];
logger.disable();

Array(50)
    .fill(null)
    .forEach(() => {
        const startTime = analytics.getStartTime();
        task(store);
        executionTimes.push(analytics.getExecutionTimeInMs(startTime));
    });

logger.enable();
task(store);

console.log();
console.log(wrapInBox(`✅  Task completed in average in ${analytics.getAverageExecutionTimeInMs(executionTimes)}ms`));
