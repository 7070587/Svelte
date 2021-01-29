<script lang="ts">
    /*
    1. props
    2. if block
    3. $
    */

    import { onMount, afterUpdate, onDestroy } from 'svelte';
    import { tweened } from 'svelte/motion';

    let timer: number = null;

    const nums: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].reverse();
    let countdown_tweened = tweened(9, { duration: 300 });

    onMount(() => {
        timer = setInterval(() => countdown_tweened.update((c) => c - 1), 1000);
    });

    afterUpdate(() => {
        if ($countdown_tweened === 0) {
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
    <!-- tweened x0 -->
    <h3>tweened countDown</h3>
    <ul>
        {#each nums as num}
            <li style={`transform:translateY(-${$countdown_tweened * 21}px);`}>{num}</li>
        {/each}
    </ul>

    {#if $countdown_tweened === 0}
        <h4>Time Out !!!</h4>
    {/if}
</main>

<style>
    h4 {
        color: teal;
        font-size: 2em;
    }

    /* div {
        color: violet;
        font-weight: bold;
    } */

    ul {
        padding: 0;
        list-style: none;
        height: 21px;
        overflow: hidden;
    }
</style>
