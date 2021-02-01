<script lang="ts">
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';

    let positionX: number, positionY: number;
    let position = spring(
        {
            x: 0,
            y: 0,
        },
        {
            stiffness: 0.1,
            damping: 0.7,
        },
    );
    let image: HTMLImageElement;
    let imageUrl: string = 'https://images.pexels.com/photos/708215/pexels-photo-708215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

    onMount(() => {});

    function handleImageMove(e: MouseEvent): void {
        positionX = e.clientX - image.width / 2;
        positionY = e.clientY - image.height / 2;
    }

    function handleImageMoveSpring(e: MouseEvent): void {
        position.set({
            x: e.clientX - image.width / 2,
            y: e.clientY - image.height / 2,
        });
    }
</script>

<!-- <img
    bind:this={image}
    src={imageUrl}
    on:mousemove={handleImageMove}
    alt=""
    style={`transform:translate(${positionX}px,${positionY}px);`}
    draggable="true"
    class="img1"
/> -->

<img
    bind:this={image}
    src={imageUrl}
    on:mousemove={handleImageMoveSpring}
    alt=""
    style={`transform:translate(${$position.x}px,${$position.y}px);`}
    class="img1"
/>

<style>
    .img1 {
        width: 20rem;
        position: absolute;
        cursor: move;
    }
</style>
