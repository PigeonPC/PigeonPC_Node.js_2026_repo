<script>
    import Child from "../Child/Child.svelte";

    const { name, children } = $props();

    function handleShowLove(name = "") {
        console.log(`${name}, loves me`);
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪", "🍪"]);
    function handleEatCookie() {
        cookieJar.pop;

        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪"];
        }
    }
</script>

<h1>Hi, i am {name}</h1>
<p>{cookieJar}</p>

{#each children as child (child.id)}
    <Child
        {...child}
        onShowLove={handleShowLove}
        onEatCookie={handleEatCookie}
        bind:cookieCount={cookieJar.length}
    />
{/each}

<style>
    button {
        background-color: rgb(2, 10, 80);
    }
</style>
