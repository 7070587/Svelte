<script>
    import { createEventDispatcher } from 'svelte';
    import { fly, fade } from 'svelte/transition';

    import type { IMeetup } from './../modals';

    import Button from './Button.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    export let modalTitle: string;

    let flyTransition: IMeetup.IFlyParams = {
        y: 300,
        duration: 650,
    };

    function closeModal(): void {
        dispatch('close-modal');
    }
</script>

<div transition:fade class="modal-backdrop" on:click={closeModal} />
<div transition:fly={flyTransition} class="modal">
    <h1>{modalTitle}</h1>
    <div class="content">
        <slot />
    </div>
    <footer>
        <slot name="footer">
            <Button on:click={closeModal}>Close</Button>
        </slot>
    </footer>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .modal {
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 80%;
        max-height: 80vh;
        background: white;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        overflow: auto;

        h1 {
            padding: 1.5rem;
            margin: 0;
            border-bottom: 1px solid #ccc;
            font-family: 'Roboto Slab', sans-serif;
        }

        .content {
            padding: 1.5rem;
        }

        footer {
            padding: 1.5rem;
        }
    }

    @media (min-width: 768px) {
        .modal {
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }
</style>
