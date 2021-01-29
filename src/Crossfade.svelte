<script lang="ts">
    interface ISelection {
        id: number;
        name: string;
    }
    import { crossfade, fade } from 'svelte/transition';

    const [send, receive] = crossfade({
        duration: (d) => Math.sqrt(d * 250),
        fallback: fade,
    });

    // list: all, selected

    let tags: ISelection[] = [
        { id: 0, name: 'Typescript' },
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'HTML' },
        { id: 4, name: 'Vue' },
        { id: 5, name: 'React' },
    ];
    let selected: number[] = [];

    function handleClick(tag: ISelection): any {
        if (selected.includes(tag.id)) {
            selected = selected.filter((id) => id !== tag.id);
        } else {
            selected = [...selected, tag.id];
        }
    }
</script>

<main>
    <h1>All</h1>
    {#each tags.filter((tag) => !selected.includes(tag.id)) as tag (tag.id)}
        <button in:receive={{ key: tag.id }} out:send={{ key: tag.id }} on:click={() => handleClick(tag)}> {tag.name} </button>
    {/each}

    <h1>Selected</h1>
    {#each tags.filter((tag) => selected.includes(tag.id)) as tag (tag.id)}
        <button in:receive={{ key: tag.id }} out:send={{ key: tag.id }} on:click={() => handleClick(tag)}> {tag.name} </button>
    {/each}
</main>

<style>
    button {
        margin: 1rem;
    }
</style>
