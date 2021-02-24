<script>
    import type { IMeetup } from './../modals';
    import { ESelectMeetup } from './../enums/meetup';

    import MeetupItem from './MeetupItem.svelte';
    import MeetupFilter from './MeetupFilter.svelte';

    export let meetups: IMeetup.IMeetupItem[];

    let isFavorite: boolean = false;
    let filteredMeetups: IMeetup.IMeetupItem[] = [];

    $: filteredMeetups = isFavorite ? meetups.filter((x: IMeetup.IMeetupItem) => x.isFavorite) : meetups;

    function selectMeetup(e: any) {
        isFavorite = e.detail === ESelectMeetup.favorite;
    }
</script>

<section class="meetup-controls">
    <MeetupFilter on:select={selectMeetup} />
</section>

<section class="meetups">
    {#each filteredMeetups as meetup (meetup.id)}
        <MeetupItem {meetup} on:show-detail on:edit-meetup />
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
    }
</style>
