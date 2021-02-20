<script>
    import { createEventDispatcher } from 'svelte';

    import type { IMeetup } from './../modals';

    import Button from './../UI/Button.svelte';
    import Badge from './../UI/Badge.svelte';

    export let meetup: IMeetup.IMeetupItem;

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    let buttonALink: IMeetup.IButton = {
        href: `mailto:${meetup.contactEmail}`,
    };

    let buttonFavorite: IMeetup.IButton = {
        mode: 'outline',
        color: 'success',
    };

    let buttonUnfavorite: IMeetup.IButton = {
        mode: 'outline',
    };

    function clickFavorite() {
        dispatch('toggle-favorite', meetup.id);
    }
</script>

<article>
    <header>
        <h1>
            {meetup.title}
            {#if meetup.isFavorite}
                <Badge>❤ Favorite</Badge>
            {/if}
        </h1>
        <h2>{meetup.subTitle}</h2>
        <h1>{meetup.address}</h1>
    </header>

    <div class="image">
        <img src={meetup.imageUrl} alt={meetup.title} />
    </div>

    <div class="content">
        <p>{meetup.description}</p>
    </div>

    <footer>
        <Button button={buttonALink}>Contact</Button>

        <Button button={meetup.isFavorite ? buttonUnfavorite : buttonFavorite} on:click={clickFavorite}>
            {meetup.isFavorite ? 'Favorite' : 'Unfavorite'}
        </Button>
        <Button>Show Detail</Button>
    </footer>
</article>

<style>
    article {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background: white;
        margin: 1rem;

        header,
        .content,
        footer {
            padding: 1rem;
        }

        .image {
            width: 100%;
            height: 14rem;
        }

        .image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        h1 {
            font-size: 1.25rem;
            margin: 0.5rem 0;
            font-family: 'Roboto Slab', sans-serif;
        }

        h1.is-favorite {
            background: #01a129;
            color: white;
            padding: 0 0.5rem;
            border-radius: 5px;
        }

        h2 {
            font-size: 1rem;
            color: #808080;
            margin: 0.5rem 0;
        }

        p {
            font-size: 1.25rem;
            margin: 0;
        }

        div {
            text-align: right;
        }

        .content {
            height: 4rem;
        }
    }
</style>
