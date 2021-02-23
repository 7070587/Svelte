<script>
    import meetups from './stores/meetup';

    import { EMeetupStatus } from './enums/meetup';

    import Header from './UI/Header.svelte';
    import Button from './UI/Button.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';

    let meetupStatus: EMeetupStatus;

    function saveData(): void {
        closeModal();
    }

    function clickNewMeetup(): void {
        meetupStatus = EMeetupStatus.create;
    }

    function closeModal(): void {
        meetupStatus = EMeetupStatus.null;
    }
</script>

<Header />

<main>
    <div class="meetup-controls">
        <Button on:click={clickNewMeetup}>New Meetup</Button>
    </div>

    {#if meetupStatus === EMeetupStatus.create}
        <EditMeetup on:save-data={saveData} on:close-modal={closeModal} />
    {/if}
    <MeetupGrid meetups={$meetups} />
</main>

<style>
    main {
        margin-top: 6rem;

        .meetup-controls {
            margin: 1rem;
        }
    }
</style>
