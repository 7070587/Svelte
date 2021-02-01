<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let num: number = 0;

    onMount(() => {
        // after 3 sec, send completed eventm param is { time: 3000 }
        setTimeout(() => {
            dispatch('completed', { time: 3000 });
        }, 3000);
    });

    function handleClick(): void {
        console.log('handleClick => ', num++);
    }

    function handleClickOnce(): void {
        console.log('handleClickOnce => ', num++);
    }
</script>

<main>
    <button on:click={handleClick}>Click</button>
    <button on:click|once|preventDefault={handleClickOnce}>Can Click Once</button>
    <a href="/src" on:click|once|preventDefault={handleClick}>Go!!</a>
</main>

<style>

</style>
