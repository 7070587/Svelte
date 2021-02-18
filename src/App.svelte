<script>
    import type { IMeetup } from './modals';

    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';

    let meetups: IMeetup.IMeetupItem[] = [
        {
            id: 'id_1',
            title: 'svelte_title',
            subTitle: 'svelte_subTitle',
            description: 'svelte_description',
            imageUrl: 'https://images.pexels.com/photos/5272937/pexels-photo-5272937.jpeg?cs=srgb&dl=pexels-julia-volk-5272937.jpg&fm=jpg',
            address: 'svelte_address',
            contactEmail: 'svelte@svelte.svelte',
        },
        {
            id: 'id_2',
            title: 'svelte_title2',
            subTitle: 'svelte_subTitle2',
            description: 'svelte_description2',
            imageUrl: 'https://images.pexels.com/photos/2447041/pexels-photo-2447041.jpeg?cs=srgb&dl=pexels-artem-beliaikin-2447041.jpg&fm=jpg',
            address: 'svelte_address2',
            contactEmail: 'svelte2@svelte.svelte',
        },
    ];
</script>

<Header />

<main>
    <MeetupGrid {meetups} />
</main>

<style>
    main {
        margin-top: 6rem;
    }
</style>
