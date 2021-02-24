<script>
    import meetups from './stores/meetup';

    import { EMeetupStatus, EPageAction } from './enums/meetup';

    import Header from './UI/Header.svelte';
    import Button from './UI/Button.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';

    let meetupStatus: EMeetupStatus;
    let pageAction: EPageAction = EPageAction.overview;
    let id: string;

    function saveData(): void {
        closeModal();
    }

    function clickNewMeetup(): void {
        meetupStatus = EMeetupStatus.edit;
    }

    function closeModal(): void {
        meetupStatus = EMeetupStatus.null;
        id = '';
    }

    function showDetail(e): void {
        pageAction = EPageAction.detail;
        id = e.detail;
    }

    function closeDetail(): void {
        pageAction = EPageAction.overview;
        id = '';
    }

    function editMeetup(e): void {
        meetupStatus = EMeetupStatus.edit;
        id = e.detail;
    }
</script>

<Header />

<main>
    {#if pageAction === EPageAction.overview}
        <div class="meetup-controls">
            <Button on:click={clickNewMeetup}>New Meetup</Button>
        </div>

        {#if meetupStatus === EMeetupStatus.edit}
            <EditMeetup on:save-data={saveData} on:close-modal={closeModal} {id} />
        {/if}
        <MeetupGrid meetups={$meetups} on:show-detail={showDetail} on:edit-meetup={editMeetup} />
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
