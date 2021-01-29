<script lang="ts">
    /*
    1. props
    2. if block
    3. $
    */

    import { onMount, afterUpdate, onDestroy } from 'svelte';
    import { tweened } from 'svelte/motion';

    import { countdown } from './CountDown';

    setTimeout(() => countdown.set(999999), 3000);

    // if no props value, default is 10
    export let countDown: number = 10;
    let timer: number = null;

    const nums: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let countdown_tweened = tweened(0, { duration: 300 });

    // 00:xx
    // when countdown updates, please svelte will auto update countdown value
    $: countDownValue = `00:${countDown.toString().padStart(2, '0')}` as string;

    onMount(() => {
        timer = setInterval(() => (countDown -= 1), 1000);
    });

    afterUpdate(() => {
        if (countDown === 0) {
            if (timer) {
                clearInterval(timer);
            }
        }
    });

    onDestroy(() => {
        if (timer) {
            clearInterval(timer);
        }
    });
</script>

<main>
    <div>writable: {$countdown}</div>
    <h4>Count Down: {countDownValue}</h4>

    <!-- tweened x0 -->
    <h3>tweened</h3>
    <ul>
        {#each nums as num}
            <li>{num}</li>
        {/each}
    </ul>

    {#if countDown === 0}
        <h4>Time Out !!!</h4>
    {/if}
</main>

<style>
    h4 {
        color: teal;
        font-size: 2em;
    }

    div {
        color: violet;
        font-weight: bold;
    }

    ul {
        padding: 0;
        list-style: none;
        height: 20px;
        overflow: hidden;
    }
</style>
