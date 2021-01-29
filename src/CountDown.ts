import { writable, derived } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';

export const countdown: Writable<number> = writable(10);
export const setCountdown: Function = (value: number) => countdown.set(value);
export const countdownTimer: Readable<number> = derived(countdown, (value: number, set: any) => {
    let timer: number;
    set(value);

    timer = setInterval(() => {
        value -= 1;
        set(value);

        if (value <= 0) {
            clearInterval(timer);
        }
    }, 1000);

    // if no one subscribe will do this function
    return () => clearInterval(timer);
});
