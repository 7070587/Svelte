<script lang="ts">
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';

    let year = tweened(1990, { duration: 3000 });
    console.log('year => ', year);

    onMount(() => {
        setTimeout(() => year.set(new Date().getFullYear()), 2000);
    });
</script>

<h1>Hello {Math.floor($year)}</h1>
