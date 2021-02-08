<script lang="ts">
    // Loading API
    import LoadingAPI from './LoadingAPI/LoadingAPI.svelte';

    // Custom modal
    import Modal from './Modal/Modal.svelte';
    import Toggle from './Modal/Toggle.svelte';
    import { modal } from '@/stores/modal';

    // Custom slider
    import Slider from './Slider/Slider.svelte';
</script>

<!-- <Toggle />
<button>1</button>
<button>11</button>
<button>111</button>
<button>1111</button>

{#if $modal.status}
    <Modal title={$modal.title}>
        <svelte:component this={$modal.component} {...$modal.params} />
    </Modal>
{/if} -->

<!-- <LoadingAPI /> -->
<style>
    /* main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    } */
</style>
