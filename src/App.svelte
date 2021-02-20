<script>
    import type { IMeetup } from './modals';
    import { EMeetupStatus } from './enums/meetup';

    import { ServiceGenerate } from './helper';

    import Header from './UI/Header.svelte';
    import Button from './UI/Button.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';

    let meetups: IMeetup.IMeetupItem[] = [
        {
            id: ServiceGenerate.randomId(),
            title: 'svelte_title',
            subTitle: 'svelte_subTitle',
            description: 'svelte_description',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg',
            address: 'svelte_address',
            contactEmail: 'svelte@svelte.svelte',
            isFavorite: true,
        },
        {
            id: ServiceGenerate.randomId(),
            title: 'svelte_title2',
            subTitle: 'svelte_subTitle2',
            description: 'svelte_description2',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_960_720.jpg',
            address: 'svelte_address2',
            contactEmail: 'svelte2@svelte.svelte',
            isFavorite: false,
        },
    ];

    let meetupStatus: EMeetupStatus;

    function saveData(e): void {
        const newMeetup: IMeetup.IMeetupItem = JSON.parse(JSON.stringify(e.detail));
        newMeetup.id = ServiceGenerate.randomId();

        // attention not work
        // meetups.push(newMeetup);

        meetups = [newMeetup, ...meetups];
        meetupStatus = EMeetupStatus.null;
    }

    function clickNewMeetup() {
        meetupStatus = EMeetupStatus.create;
    }

    function toggleFavorite(e) {
        const id: string = e.detail;
        const updatedMeetup: IMeetup.IMeetupItem = { ...meetups.find((x) => x.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex: number = meetups.findIndex((x) => x.id === id);
        const updatedMeetups: IMeetup.IMeetupItem[] = [...meetups];
        updatedMeetups[meetupIndex] = updatedMeetup;
        meetups = updatedMeetups;
    }
</script>

<Header />

<main>
    <div class="meetup-controls">
        <Button on:click={clickNewMeetup}>New Meetup</Button>
    </div>

    {#if meetupStatus === EMeetupStatus.create}
        <EditMeetup on:save-data={saveData} />
    {/if}
    <MeetupGrid {meetups} on:toggle-favorite={toggleFavorite} />
</main>

<style>
    main {
        margin-top: 6rem;

        .meetup-controls {
            margin: 1rem;
        }
    }
</style>
