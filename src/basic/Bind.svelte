<script lang="ts">
    import { onMount } from 'svelte';

    let keyword: string = 'keyword';

    let isChecked: boolean = false;
    let selected: number = 1;

    let canvas: HTMLCanvasElement;
    let clientWidth: number = null;
    let width: number = null;

    let time: number = 0;

    $: console.log('keyword => ', keyword);
    $: console.log('isChecked => ', isChecked);
    $: console.log('selected => ', selected);

    onMount(() => {
        setTimeout(() => (keyword += '^_^'), 2000);
        console.log('canvas => ', canvas);
        console.log('clientWidth => ', clientWidth);
        console.log('width => ', width);
        // console.log('canvas => ', canvas);
    });
</script>

<div>Input</div>
<input type="text" bind:value={keyword} />

<div>Checkbox</div>
<input type="checkbox" bind:checked={isChecked} />

<div>Radio: {selected}</div>
<input type="radio" bind:group={selected} value={1} />
<input type="radio" bind:group={selected} value={11} />
<input type="radio" bind:group={selected} value={111} />

<div>Bind DOM</div>

<canvas bind:this={canvas} bind:clientWidth />
<canvas bind:this={canvas} bind:clientWidth={width} />

<!-- <audio src="" bind:currentTime={time} /> -->
<style>
    input {
        font-size: 2rem;
    }
</style>
