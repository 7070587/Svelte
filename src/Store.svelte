<script lang="ts">
    // import { writable, Writable } from 'svelte/store';
    // const countdown: Writable<number> = writable(10);

    import { writable, readable, derived } from 'svelte/store';
    import type { Writable, Readable } from 'svelte/store';
    const countdown_writable: Writable<number> = writable(10);
    const countdown_readable: Readable<number> = readable(10, () => null);
    const list = readable(['eat', 'sleep', 'program'], () => null);
    const list_derived = writable([1, 2]);

    countdown_writable.subscribe((x) => console.log('subscribe => ', x));

    console.log('countdown => ', countdown_writable);
    console.log('countdown_readable => ', countdown_readable);

    // selected list
    // derived([list, list_derived],);

    const selectedList = derived([list, list_derived], ([list, list_derived], set: any) => {
        set(list.filter((item: string, index: number) => list_derived.includes(index)));
    });
</script>

<div>countdown_writable: {$countdown_writable}</div>
<div>countdown_readable: {$countdown_readable}</div>
<div>Selected List: {$selectedList}</div>

<style>
</style>
