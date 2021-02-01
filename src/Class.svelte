<script lang="ts">
    import { onMount } from 'svelte';

    let isActive: boolean = false;

    function handleClick() {
        isActive = !isActive;
        console.log('isActive => ', isActive);
    }
</script>

<button class="btn" on:click={handleClick} class:active={isActive}> Click Me </button>

<style>
    .btn {
        padding: 0.75rem 1rem;
        border-radius: 6px;
    }

    .active {
        background-color: darkturquoise;
        color: floralwhite;
        font-weight: bold;
    }
</style>
