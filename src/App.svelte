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
    // import Transition from './Transition.svelte';
    import Crossfade from './Crossfade.svelte';

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
</script>

<!-- <Spring /> -->

<main>
    <Crossfade />

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
</style>
