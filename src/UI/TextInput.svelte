<script>
    import type { IMeetup } from './../modals';
    import { EFormType } from './../enums/meetup';

    export let textInput: IMeetup.ITextInput;
</script>

<div class="form-control">
    <label for={textInput.id}>{textInput.label}</label>
    {#if textInput.type === EFormType.textarea}
        <textarea rows={textInput.rows ? textInput.rows : 3} id={textInput.id} value={textInput.value} on:input />
    {:else}
        <input type={textInput.type} id={textInput.id} value={textInput.value} on:input />
    {/if}
</div>

<style>
    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        border: none;
        border-bottom: 2px solid #ccc;
        border-radius: 3px 3px 0 0;
        background: white;
        padding: 0.15rem 0.25rem;
        transition: border-color 0.1s ease-out;
    }

    input:focus,
    textarea:focus {
        border-color: #e40763;
        outline: none;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        width: 100%;
    }

    .form-control {
        padding: 0.5rem 0;
        width: 100%;
        margin: 0.25rem 0;
    }
</style>
