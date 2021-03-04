<script context="module">
    import type { IMeetup } from '../modals';

    interface IPage {
        host: string;
        path: string;
        query: any;
        params: any;
    }

    export function preload(page: IPage): Promise<any> {
        // console.log('page => ', page);

        const meetupId: string = page.params.id;

        return this.fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${meetupId}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Fetching meetups failed, please try again later!');
                }
                return res.json();
            })
            .then((meetupData: IMeetup.IMeetupItem) => {
                meetupData.id = meetupId;
                return { meetupData: meetupData };
            })
            .catch((err) => {
                console.error(err);
                this.error(500, 'Could not fetch meetups');
            });
    }
</script>

<script>
    import { onDestroy, createEventDispatcher } from 'svelte';

    // import meetups from '../stores/meetup';

    import Button from '../components/UI/Button.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    export let meetupData: IMeetup.IMeetupItem;

    // let selectedMeetup: IMeetup.IMeetupItem;

    // const unsubscribe = meetups.subscribe((items) => {
    //     selectedMeetup = items.find((x) => x.id === id);
    // });

    let buttonCancel: IMeetup.IButton = {
        href: `/`,
    };

    let buttonALink: IMeetup.IButton = {
        href: `mailto:${meetupData.contactEmail}`,
    };

    function closeDetail(): void {
        dispatch('close');
    }

    // onDestroy(() => {
    //     unsubscribe();
    // });
</script>

<section>
    <div class="image">
        <img src={meetupData.imageUrl} alt={meetupData.title} />
    </div>

    <div class="content">
        <h1>{meetupData.subTitle}</h1>
        <h2>{meetupData.title} - {meetupData.address}</h2>
        <p>{meetupData.description}</p>
        <Button button={buttonALink} on:click>Contact</Button>
        <Button button={buttonCancel} on:click={closeDetail}>Close</Button>
    </div>
</section>

<style>
    section {
        margin-top: 4rem;
    }

    .image {
        width: 100%;
        height: 25rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image {
        background: #e7e7e7;
    }

    .content {
        text-align: center;
        width: 80%;
        margin: auto;
    }

    h1 {
        font-size: 2rem;
        font-family: 'Roboto Slab', sans-serif;
        margin: 0.5rem 0;
    }

    h2 {
        font-size: 1.25rem;
        color: #6b6b6b;
    }

    p {
        font-size: 1.5rem;
    }
</style>
