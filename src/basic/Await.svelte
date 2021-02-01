<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    const url: Promise<any> = fetch('https://api.github.com/user/7070587').then((res) => res.json());
</script>

{#await url}
    <span>Loading.....</span>
{:then res}
    <img src={res.avatar_url} alt="" />
    <h2>{res.id}</h2>
    <h2>{res.created_at}</h2>
{:catch error}
    <span> {error} </span>
{/await}

<style>
</style>
