<script>
    import type { IMeetup } from './../modals';

    export let button: IMeetup.IButton;
</script>

{#if button.href}
    <a href={button.href}>{button.label}</a>
{:else}
    <button type={button.type} class={button.mode}> {button.label} </button>
{/if}

<style>
    button,
    a {
        font: inherit;
        border: 1px solid #cf0056;
        background: #cf0056;
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
        cursor: pointer;
        text-decoration: none;
        margin-right: 1rem;

        &:focus {
            outline: none;
        }

        &:hover,
        &:active {
            background: #e40763;
            border-color: #e40763;
            box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
        }

        &:disabled {
            background: #ccc;
            border-color: #ccc;
            color: #959595;
            box-shadow: none;
            cursor: not-allowed;

            pointer-events: none;
        }
    }

    .success {
        background: #01a129;
        border-color: #01a129;
    }

    .success:hover,
    .success:active {
        background: #1ac745;
        border-color: #1ac745;
    }

    .outline {
        background: transparent;
        color: #cf0056;
        box-shadow: none;
    }

    .outline:hover,
    .outline:active {
        background: #ffc7de;
        box-shadow: none;
    }

    .outline:disabled,
    .outline:disabled:hover,
    .outline:disabled:active {
        background: transparent;
        color: #ccc;
    }

    .outline.success {
        border-color: #01a129;
        color: #01a129;
    }

    .outline.success:hover,
    .outline.success:active {
        background: #c2ffd1;
    }
</style>
