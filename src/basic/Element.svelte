<script lang="ts">
    import { onMount } from 'svelte';
    export let count: number = 3;

    let innerWidth: number = 0;
    $: console.log('innerWidth => ', innerWidth);

    const article: string = 'Svelete.js is a new jacascript framework';
    const description: string = article;
    const title = 'Learning Svelete';
    const imageUrl: string =
        'https://images.unsplash.com/photo-1611965771465-eae7a4cd1ba7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80';

    onMount(() => {});

    function handleMouseenter() {
        console.log('handleMouseenter => ');
    }
</script>

<!-- svelte:self 遞迴 -->
{#if count > 0}
    <div>countdown... {count}</div>
    <svelte:self count={count - 1} />
{:else}
    <div>Empty</div>
{/if}

<!-- svelte:window -->
<svelte:window bind:innerWidth />

<!-- svelte:body -->
<svelte:body on:mouseenter={handleMouseenter} />

<svelte:head>
    <meta property="og:image" content={imageUrl} />
    <meta property="description" content={description} />
    <title>{title}</title>
</svelte:head>

{article}

<style>
</style>
