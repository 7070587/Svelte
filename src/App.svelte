<script>
    import { onMount } from 'svelte';

    import type { IMeetup } from './modals';
    import meetups from './stores/meetup';

    import { EMeetupStatus, EPageAction } from './enums/meetup';

    import Header from './UI/Header.svelte';
    import Loading from './UI/Loading.svelte';
    import Errors from './UI/Errors.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';

    let meetupStatus: EMeetupStatus;
    let pageAction: EPageAction = EPageAction.overview;
    let id: string;
    let isLoadong: boolean = false;
    let errorMessage: string = '';

    // fetch data in App page

    onMount(
        async (): Promise<void> => {
            await getAPIData();
        },
    );

    async function getAPIData(): Promise<void> {
        isLoadong = true;
        let res: any = await fetch('https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json').catch((err) => {
            errorData = err;
            errorMessage = err ?? errorMessage;
            console.error(err);
        });

        isLoadong = false;
        if (!res.ok) throw new Error('Fetch data error occured, please try again');
        let data: IMeetup.IMeetupItem = await res.json();
        const loadMeetups: IMeetup.IMeetupItem[] = [];
        for (const key in data) {
            loadMeetups.push({ ...data[key], id: key });
        }

        setTimeout(() => {
            isLoadong = false;
            meetups.setMeetup(loadMeetups.reverse());
        }, 1000);
    }

    function saveMeetup(): void {
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

    function closeError(): void {
        errorMessage = null;
    }
</script>

<!-- <Errors message={errorMessage} on:close-modal={closeError} /> -->

{#if errorMessage}
    <Errors message={errorMessage} on:close-modal={closeError} />
{/if}

<Header />

<main>
    {#if pageAction === EPageAction.overview}
        {#if meetupStatus === EMeetupStatus.edit}
            <EditMeetup on:save-data={saveMeetup} on:close-modal={closeModal} {id} />
        {/if}

        {#if isLoadong}
            <Loading />
        {:else}
            <MeetupGrid meetups={$meetups} on:show-detail={showDetail} on:edit-meetup={editMeetup} on:create-meetup={clickNewMeetup} />
        {/if}
    {:else}
        <MeetupDetail {id} on:close={closeDetail} />
    {/if}
</main>

<style>
    main {
        margin-top: 6rem;
    }
</style>
