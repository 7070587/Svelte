<script lang="ts">
    import { setClose, modal } from '@/stores/modal';
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';

    export let title: string = 'modal title';
    let isOpen: boolean = true;
    let modalEle: HTMLElement;
    let titleID: string = 'uuid01';

    // prevent-body-scroll
    $: {
        isOpen ? document.body.classList.add('prevent-body-scroll') : document.body.classList.remove('prevent-body-scroll');
    }

    function handleClose(e) {
        if (e.target === e.currentTarget) setClose();
    }

    // click esc to close modal
    function handleKeydown(e) {
        // esc
        if (e.keyCode === 27) {
            // focus element before open modal
            $modal.firstFocusElement.focus();
            setClose();
        }

        const allElementCanFocusType: string = 'a[href], area, input:not(:disabled), button:not(:disabled), textarea:not(:disabled), [tabindex="0"]';
        const allElementCanFocus = modalEle.querySelectorAll(allElementCanFocusType);
        const length: number = allElementCanFocus.length;
        const firstEle: HTMLElement = allElementCanFocus[0];
        const lastEle: HTMLElement = allElementCanFocus[length - 1];

        // tab, shifttab ?
        if (e.keyCode === 9) {
            if (e.shiftKey) {
                // shift + tab
                if (document.activeElement === firstEle) {
                    e.preventDefault();
                    lastEle.focus();
                }
            } else {
                // tab
                if (document.activeElement === lastEle) {
                    e.preventDefault();
                    firstEle.focus();
                }
            }
        }
    }

    onMount(() => {
        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    });
</script>

<div transition:fade class="modal-wrapper" on:click={(e) => handleClose(e)} tabindex="-1" role="dialog">
    <div
        transition:scale={{ delay: 50, duration: 300 }}
        class="modal"
        bind:this={modalEle}
        role="document"
        aria-labelledby={titleID}
        aria-modal={true}
    >
        <div class="modal-head">
            <h3 class="modal-head__title" id={titleID}>{title}</h3>
            <button class="modal-head__close-btn" aria-label="Close Window" on:click={() => setClose()}>
                <span aria-hidden={true}>&#x2715</span>
            </button>
        </div>
        <slot>modal slot</slot>
    </div>
</div>

<style>
    /* global(): tell svelte not add hash */
    :global(.prevent-body-scroll) {
        overflow-y: hidden;
    }

    .modal-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(25, 25, 25, 0.6);
    }

    .modal {
        width: 55%;
        max-width: 300px;
        max-height: 75vh;
        margin: 10% auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 4px 10px rgba(25, 25, 25, 0.8);
        padding: 1rem 1.25rem;
        overflow-y: auto;
    }

    .modal-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .modal-head__title {
        margin: 0;
    }

    .modal-head__close-btn {
        appearance: none;
        border: 0;
        background-color: transparent;
        outline: 0;
        margin: 0;
        cursor: pointer;
    }

    .modal-head__close-btn:hover {
        font-weight: bold;
    }
</style>
