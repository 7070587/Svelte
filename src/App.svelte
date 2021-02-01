<script lang="ts">
    import { writable } from 'svelte/store';

    import CountDown from './CountDown.svelte';
    import CountDownWritable from './CountDownWritable.svelte';
    import Event from './Event.svelte';
    import Await from './Await.svelte';
    import Bind from './Bind.svelte';
    import Store from './Store.svelte';
    import Context from './Context.svelte';
    import Tweened from './Tweened.svelte';
    import Spring from './Spring.svelte';
    import CountDownTweened from './CountDownTweened.svelte';
    import Transition from './Transition.svelte';
    import CrossfadeAnimate from './CrossfadeAnimate.svelte';
    import Class from './Class.svelte';
    import Card from './Card.svelte';
    import Element from './Element.svelte';
    import Options from './Options.svelte';

    import { countdownTimer } from './CountDown';

    import { setContext } from 'svelte';

    const user: void = setContext('user', {
        name: 'sci',
        age: 199,
    });

    let isCompleted: boolean = false;

    function getCompleted(): void {
        isCompleted = true;
    }

    // console.log('counrdown => App', countdown);

    // countdown.subscribe((item: number) => console.log('subscribe => App', item));

    let title: string = '';
    let imageUrl: string = 'https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
</script>

<!-- <Spring /> -->

<main>
    <Options />

    <!-- <Element /> -->

    <!-- <Card {imageUrl}>
        <h2 slot="card-head" let:title>Title: Card {title}</h2>
        <img slot="card-image" let:imageUrl src={imageUrl} alt="" />
        <div slot="card-body"><button>Body: Card</button></div>
        <div slot="card-footer"><a href="/">Footer: Card</a></div>
    </Card> -->

    <!-- <Class /> -->

    <!-- <CrossfadeAnimate /> -->

    <!-- <Transition /> -->

    <!-- <CountDownTweened /> -->

    <!-- <Tweened /> -->

    <!-- <Context /> -->

    <!-- <CountDownWritable />
    <div>Second Count Down : {$countdownTimer}</div> -->

    <!-- <Store /> -->

    <!-- <Bind /> -->

    <!-- <Await /> -->

    <!-- <CountDown countDown={30} />
    <Event on:completed={getCompleted} />
    {#if isCompleted}
        <div>Completed</div>
    {/if} -->

    <div />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    div {
        color: tomato;
        font-weight: bold;
    }

    /* img {
        max-width: 100%;
    } */
</style>
