<script lang="ts">
    export let imageUrl: string = '';
</script>

<div class="card">
    <slot name="card-head" title="show more...">
        <h2>card head</h2>
    </slot>

    <slot name="card-image" {imageUrl}>
        <!-- <img src={imageUrl} alt="" class="image" /> -->
        <!-- <img src={imageUrl} alt="" class="image" /> -->
        <div class="image" style="background-image: url({imageUrl});" />
    </slot>

    <slot name="card-body">
        <h2>card body</h2>
    </slot>

    <slot name="card-footer">
        <h2>card footer</h2>
    </slot>
</div>

<style>
    .card {
        width: 20rem;
        background-color: lightgray;
        padding: 1rem;
        border-radius: 8px;
    }

    .image {
        height: 10rem;
        background-position: center;
        background-size: cover;
        background-repeat: no;
        margin: 1rem;
    }
</style>
