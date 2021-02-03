<script lang="ts">
    import { setOpen } from '@/stores/modal';
    import Content from './Content.svelte';
</script>

<div>
    <button on:click={() => setOpen('TypeScript support in Svelte', Content, { tip: 'Please view tips' })}> Click To Open </button>
</div>

<style>
    div {
        display: flex;
        /* justify-content: center;
        align-items: center;
        height: 100vh; */
    }

    button {
        border-radius: 8px;
        padding: 0.75rem 1.75rem;
        cursor: pointer;
    }
</style>
