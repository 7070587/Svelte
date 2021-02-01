<script lang="ts">
    import { getContext } from 'svelte';
    const user: {
        name: string;
        age: number;
    } = getContext('user');
</script>

<h2>{user.name}</h2>
<p>{user.age}</p>

<style>
</style>
