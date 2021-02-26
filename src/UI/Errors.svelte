<script>
    import Modals from './Modal.svelte';

    let modalTitle: string = 'An error occurred';
    export let message: string = 'An error occurred';
</script>

<Modals {modalTitle} on:close-modal>
    <p>{message}</p>
</Modals>

<style>
</style>
