<script>
    import { createEventDispatcher } from 'svelte';
    import { ESelectMeetup } from './../enums/meetup';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    let selectedButton: ESelectMeetup = ESelectMeetup.all;

    function selectAll(): void {
        selectedButton = ESelectMeetup.all;
        dispatch('select', ESelectMeetup.all);
    }

    function selectFavorites(): void {
        selectedButton = ESelectMeetup.favorite;
        dispatch('select', ESelectMeetup.favorite);
    }
</script>

<div>
    <button class:active={selectedButton === ESelectMeetup.all} on:click={selectAll}>All</button>
    <button class:active={selectedButton === ESelectMeetup.favorite} on:click={selectFavorites}>Favorites</button>
</div>

<style>
    div {
        font-size: 0px;
    }

    button {
        background: #aaaaaa;
        font: inherit;
        font-size: 1rem;
        cursor: pointer;
        border: 1px solid #aaaaaa;
        padding: 0.5rem 1rem;
    }

    button:focus {
        outline: none;
    }

    button:first-of-type {
        border-radius: 5px 0 0 5px;
    }

    button:last-of-type {
        border-radius: 0 5px 5px 0;
    }

    button:hover,
    button:active,
    .active {
        background: $colorMain;
        border-color: $colorMain;
        color: white;
    }
</style>
