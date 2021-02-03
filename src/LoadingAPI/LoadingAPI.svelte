<script lang="ts">
    import { onMount } from 'svelte';
    // import fetchAPI from '@/LoadingAPI/loading_api';
    import { selected, setSelected, repos } from '@/stores/loading_api';

    const labels: string[] = ['React', 'Vue', 'Svelte'];

    // let selected: string = labels[0];

    // $: [res, controller] = fetchAPI(selected.toLowerCase());

    function handleClick(selectedStr: string) {
        $selected = selectedStr;
    }
</script>

<main>
    {#each labels as label}
        <button class:active={$selected === label} on:click={() => handleClick(label)}> {label} </button>
    {/each}

    {#if $repos.status === 'loading'}
        <h3>Loading...</h3>
    {:else if $repos.status === 'loaded'}
        {#each $repos.items as item (item.id)}
            <h3>{item.name}</h3>
            <div>{item.description}</div>
            <a href={item.html_url}>Repo Link</a>
        {/each}
    {:else if $repos.status === 'error'}
        <h3>{$repos.error}</h3>
    {/if}

    <!-- {#await res}
        <h3>Loading...</h3>
    {:then value}
        {#each value.items as item (item.id)}
            <h3>{item.name}</h3>
            <div>{item.description}</div>
            <a href={item.html_url}>Repo Link</a>
        {/each}
    {:catch error}
        <h3>{error}</h3>
    {/await} -->
</main>

<style>
    main {
        margin: 1rem;
    }

    button {
        border-radius: 8px;
        padding: 0.5rem 1rem;
        margin: 0.5rem;
    }

    .active {
        background-color: dodgerblue;
        color: floralwhite;
        font-weight: bold;
        border: 3px solid lightskyblue;
    }
</style>
