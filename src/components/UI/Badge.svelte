<script>
    import { slide } from 'svelte/transition';
</script>

<span transition:slide>
    <slot />
</span>

<style>
    span {
        display: inline-block;
        margin: 0.25rem;
        border-radius: 4px;
        border: 1px solid $colorMain;
        background: $colorMain;
        color: #fff;
        padding: 0 0.5rem 0.15rem;
        font-family: 'Lato', sans-serif;
        font-size: 0.8rem;
    }
</style>
