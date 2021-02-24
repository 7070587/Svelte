<script>
    import meetups from './stores/meetup';

    import { EMeetupStatus } from './enums/meetup';

    import Header from './UI/Header.svelte';
    import Button from './UI/Button.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';

    let meetupStatus: EMeetupStatus;
    let pageAction: EMeetupStatus = EMeetupStatus.overview;
    let id: string;

    function saveData(): void {
        closeModal();
    }

    function clickNewMeetup(): void {
        meetupStatus = EMeetupStatus.create;
    }

    function closeModal(): void {
        meetupStatus = EMeetupStatus.null;
    }

    function showDetail(e): void {
        pageAction = EMeetupStatus.detail;
        id = e.detail;
    }

    function closeDetail(): void {
        pageAction = EMeetupStatus.overview;
    }
</script>

<Header />

<main>
    {#if pageAction === EMeetupStatus.overview}
        <div class="meetup-controls">
            <Button on:click={clickNewMeetup}>New Meetup</Button>
        </div>

        {#if meetupStatus === EMeetupStatus.create}
            <EditMeetup on:save-data={saveData} on:close-modal={closeModal} />
        {/if}
        <MeetupGrid meetups={$meetups} on:show-detail={showDetail} />
    {:else}
        <MeetupDetail {id} on:close={closeDetail} />
    {/if}
</main>

<style>
    main {
        margin-top: 6rem;

        .meetup-controls {
            margin: 1rem;
        }
    }
</style>
