<script context="module">
    import type { IMeetup } from '../modals';

    let isLoadong: boolean = false;

    let id: string;
    let errorMessage: string = '';

    export function preload(page): Promise<any> {
        // console.log('page => ', page);

        return this.fetch('https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Fetching meetups failed, please try again later!');
                }
                return res.json();
            })
            .then((data) => {
                const fetchedMeetups: IMeetup.IMeetupItem[] = [];
                for (const key in data) {
                    fetchedMeetups.push({ ...data[key], id: key });
                }

                return { fetchedMeetups: fetchedMeetups };
            })
            .catch((err) => {
                isLoadong = false;
                errorMessage = err;
                errorMessage = err ?? errorMessage;
                console.error(err);
                this.error(500, 'Could not fetch meetups');
            });
    }

    // no use, for now  not know reason
    // export async function preload(page): Promise<any> {
    //     console.log('page => ', page);

    //     let res: any = await this.fetch('https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json').catch((err) => {
    //         isLoadong = false;
    //         errorMessage = err;
    //         errorMessage = err ?? errorMessage;
    //         console.error(err);
    //         this.error(500, 'Could not fetch meetups');
    //     });

    //     if (res) isLoadong = false;
    //     if (!res.ok) throw new Error('Fetch data error occured, please try again');
    //     let data: IMeetup.IMeetupItem = await res.json();
    //     const fetchedMeetups: IMeetup.IMeetupItem[] = [];
    //     for (const key in data) {
    //         fetchedMeetups.push({ ...data[key], id: key });
    //     }

    //     return fetchedMeetups;
    // }
</script>

<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    import { ESelectMeetup, EMeetupStatus } from '../enums/meetup';

    import meetups from '../stores/meetup';

    import MeetupItem from '../components/Meetups/MeetupItem.svelte';
    import MeetupFilter from '../components/Meetups/MeetupFilter.svelte';
    import EditMeetup from '../components/Meetups/EditMeetup.svelte';

    import Button from '../components/UI/Button.svelte';
    import Loading from '../components/UI/Loading.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    let isFavorite: boolean = false;

    let meetupStatus: EMeetupStatus;

    export let fetchedMeetups: IMeetup.IMeetupItem[] = [];
    let filteredMeetups: IMeetup.IMeetupItem[] = [];
    let loadedMeetups: IMeetup.IMeetupItem[] = [];

    $: filteredMeetups = isFavorite ? loadedMeetups.filter((x: IMeetup.IMeetupItem) => x.isFavorite) : loadedMeetups;

    let unsubscribe: Function;

    // fetch data in client side
    // onMount(
    //     async (): Promise<void> => {
    //         await getAPIData();
    //     },
    // );

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    });

    onMount(() => {
        unsubscribe = meetups.subscribe((item: IMeetup.IMeetupItem[]) => {
            loadedMeetups = item;
        });
        meetups.setMeetup(fetchedMeetups.reverse());
    });

    // async function getAPIData(): Promise<void> {
    //         isLoadong = true;
    //         unsubscribe = meetups.subscribe((items) => (fetchedMeetups = items));
    //         console.log(' => ', unsubscribe);
    //         let res: any = await fetch('https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json').catch((err) => {
    //             isLoadong = false;
    //             errorMessage = err;
    //             errorMessage = err ?? errorMessage;
    //             console.error(err);
    //         });

    //         if (res) isLoadong = false;
    //         if (!res.ok) throw new Error('Fetch data error occured, please try again');
    //         let data: IMeetup.IMeetupItem = await res.json();
    //         const loadMeetups: IMeetup.IMeetupItem[] = [];
    //         for (const key in data) {
    //             loadMeetups.push({ ...data[key], id: key });
    //         }

    //         meetups.setMeetup(loadMeetups.reverse());
    //     }

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

    function editMeetup(e): void {
        meetupStatus = EMeetupStatus.edit;
        id = e.detail;
    }

    function selectMeetup(e: any) {
        isFavorite = e.detail === ESelectMeetup.favorite;
    }
</script>

<svelte:head>
    <title>All Meetups</title>
</svelte:head>

{#if meetupStatus === EMeetupStatus.edit}
    <EditMeetup on:save-data={saveMeetup} on:close-modal={closeModal} {id} />
{/if}

{#if isLoadong}
    <Loading />
{:else}
    <section class="meetup-controls">
        <MeetupFilter on:select={selectMeetup} />

        <Button on:click={clickNewMeetup}>New Meetup</Button>
    </section>

    {#if filteredMeetups.length === 0}
        <p class="no-meetup">No meetups found, you can start adding some meetups</p>
    {/if}

    <section class="fetchedMeetups">
        {#each filteredMeetups as meetup (meetup.id)}
            <div transition:scale={{ duration: 800 }} animate:flip={{ duration: 800 }}>
                <MeetupItem {meetup} on:edit-meetup={editMeetup} />
            </div>
        {/each}
    </section>
{/if}

<style>
    .fetchedMeetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        .fetchedMeetups {
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
