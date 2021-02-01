<script lang="ts">
    /*
    1. props
    2. if block
    3. $
    */

    import { onMount } from 'svelte';
    import { countdownTimer, setCountdown } from './CountDown';
    import { from } from 'rxjs';

    onMount(() => {
        setCountdown(30);
        setTimeout(() => setCountdown(10), 2000);
    });

    const observable = from(['from rxjs']);
    observable.subscribe((x) => console.log('Message => ', x));
</script>

<h4>Observable: {$observable}</h4>

<div>Count Down: {$countdownTimer}</div>

<style>
    div {
        color: darkorchid;
        font-weight: bold;
        font-size: 1.5rem;
    }

    h4 {
        color: darkred;
    }
</style>
