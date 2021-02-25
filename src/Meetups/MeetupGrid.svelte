<script>
    import { createEventDispatcher } from 'svelte';
    import { scale, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    import type { IMeetup } from './../modals';
    import { ESelectMeetup } from './../enums/meetup';

    import MeetupItem from './MeetupItem.svelte';
    import MeetupFilter from './MeetupFilter.svelte';
    import Button from './../UI/Button.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    export let meetups: IMeetup.IMeetupItem[];

    let isFavorite: boolean = false;
    let filteredMeetups: IMeetup.IMeetupItem[] = [];

    $: filteredMeetups = isFavorite ? meetups.filter((x: IMeetup.IMeetupItem) => x.isFavorite) : meetups;

    function selectMeetup(e: any) {
        isFavorite = e.detail === ESelectMeetup.favorite;
    }

    function clickNewMeetup(): void {
        dispatch('create-meetup');
    }
</script>

<section class="meetup-controls">
    <MeetupFilter on:select={selectMeetup} />

    <Button on:click={clickNewMeetup}>New Meetup</Button>
</section>

{#if filteredMeetups.length === 0}
    <p class="no-meetup">No meetups found, you can start adding some meetups</p>
{/if}

<section class="meetups">
    {#each filteredMeetups as meetup (meetup.id)}
        <div transition:scale={{ duration: 800 }} animate:flip={{ duration: 800 }}>
            <MeetupItem {meetup} on:show-detail on:edit-meetup />
        </div>
    {/each}
</section>

<style>
    .meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        .meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .meetup-controls {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .no-meetup {
        margin: 1rem;
        font-weight: bold;
        font-size: 2rem;
    }
</style>
