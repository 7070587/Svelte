<script>
    import { createEventDispatcher } from 'svelte';

    import meetups from './../stores/meetup';

    import type { IMeetup } from './../modals';

    import Button from './../UI/Button.svelte';
    import Badge from './../UI/Badge.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    export let meetup: IMeetup.IMeetupItem;

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

    async function toggleFavorite(): Promise<void> {
        const id: string = meetup.id;

        // if (meetup.id) delete meetup.id;
        meetup.isFavorite = !meetup.isFavorite;
        const res: any = await fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(meetup),
            headers: { 'Content-Type': 'application/json' },
        }).catch((err) => console.error(err));

        if (!res.ok) throw new Error('An error occured, please try again');

        meetups.toggleFavorite(meetup);
    }

    function showDetail(): void {
        dispatch('show-detail', meetup.id);
    }

    function editMeetup(): void {
        dispatch('edit-meetup', meetup.id);
    }
</script>

<article>
    <header>
        <h1>
            {meetup.title}
            {#if meetup.isFavorite}
                {meetup.isFavorite}
                <Badge>❤ Favorite</Badge>
            {/if}
        </h1>
        <h2 class="text-overflow-ellipsis text-overflow-ellipsis-1">{meetup.subTitle}</h2>
        <h1 class="text-overflow-ellipsis text-overflow-ellipsis-1">{meetup.address}</h1>
    </header>

    <div class="image">
        <img src={meetup.imageUrl} alt={meetup.title} />
    </div>

    <div class="content">
        <p class="text-overflow-ellipsis text-overflow-ellipsis-2">{meetup.description}</p>
    </div>

    <footer>
        <Button button={buttonUnfavorite} on:click={editMeetup}>Edit</Button>

        <Button button={meetup.isFavorite ? buttonUnfavorite : buttonFavorite} on:click={toggleFavorite}>
            {meetup.isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>
        <Button on:click={showDetail}>Show Detail</Button>
    </footer>
</article>

<style>
    article {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background: white;
        margin: 1rem;

        .text-overflow-ellipsis {
            display: -webkit-box; /* 將對像作為彈性伸縮盒模型顯示 */
            -webkit-box-orient: vertical; /* 設置或檢查伸縮盒對像的子元素的排列方式 */
            text-overflow: ellipsis; /*  在多行文本的情況下，用...隱藏超出範圍的文本 */
            word-break: break-all;
            overflow: hidden;
        }

        .text-overflow-ellipsis-1 {
            -webkit-line-clamp: 1; /* 用來限制在一個塊元素顯示的文本的行數 */
        }

        .text-overflow-ellipsis-2 {
            -webkit-line-clamp: 2; /* 用來限制在一個塊元素顯示的文本的行數 */
        }

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
