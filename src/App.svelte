<script>
    import { onMount } from 'svelte';

    import type { IMeetup } from './modals';
    import meetups from './stores/meetup';

    import { EMeetupStatus, EPageAction } from './enums/meetup';

    import Header from './UI/Header.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';
    import { xlink_attr } from 'svelte/internal';

    let meetupStatus: EMeetupStatus;
    let pageAction: EPageAction = EPageAction.overview;
    let id: string;

    // fetch data in App page

    onMount(
        async (): Promise<void> => {
            await getAPIData();
        },
    );

    async function getAPIData(): Promise<void> {
        let res: any = await fetch('https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json').catch((err) => console.error(err));
        if (!res.ok) throw new Error('Fetch data error occured, please try again');
        let data: IMeetup.IMeetupItem = await res.json();
        const loadMeetups: IMeetup.IMeetupItem[] = [];
        for (const key in data) {
            loadMeetups.push({ ...data[key], id: key });
        }

        meetups.setMeetup(loadMeetups);
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
</script>

<Header />

<main>
    {#if pageAction === EPageAction.overview}
        {#if meetupStatus === EMeetupStatus.edit}
            <EditMeetup on:save-data={saveMeetup} on:close-modal={closeModal} {id} />
        {/if}
        <MeetupGrid meetups={$meetups} on:show-detail={showDetail} on:edit-meetup={editMeetup} on:create-meetup={clickNewMeetup} />
    {:else}
        <MeetupDetail {id} on:close={closeDetail} />
    {/if}
</main>

<style>
    main {
        margin-top: 6rem;
    }
</style>
