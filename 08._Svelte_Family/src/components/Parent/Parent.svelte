<script>
    import Child from "../Child/Child.svelte";

    const { name, children } = $props();

    function handleShowLove(name = "") {
        console.log(`${name}, loves me`);
    }

</script>

<h1>Hi, i am {name}</h1>

{#each children as child (child.id)}
    <Child {...child} onshowLove={handleShowLove}/>
{/each}
