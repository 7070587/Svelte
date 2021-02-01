<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    let isConditiona: boolean = false;

    // default is no animation
    // setTimeout(() => (isConditiona = true), 1000);
    // setTimeout(() => (isConditiona = false), 200);

    // Transition Customize

    function rotate(node: Element, params: any): {} {
        const duration: number = 1000;

        return {
            duration,
            easing: cubicOut,
            css: (t) => `
                transform: rotate(${params.range * t}deg);
            `,
        };
    }
    setTimeout(() => (isConditiona = true), 1000);
</script>

{#if isConditiona}
    <h1 transition:rotate={{ range: 180 }}>Transition</h1>
{/if}

<!-- {#if isConditiona}
    <h1 transition:fade={null}>Transition</h1>
{/if} -->

<!-- {#if isConditiona}
    <h1 in:fade={null} out:fly={{ x: 0, y: 100, easing: cubicOut, duration: 3000 }}>Transition In + Out</h1>
{/if}

{#if isConditiona}
    <h1 transition:fade={null}>Transition Customize</h1>
{/if} -->
<style>
</style>
