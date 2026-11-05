<script>
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    console.log($fridgeMessages)


</script>

<h3>$, sweet ~ $</h3>

{#each $fridgeMessages as {name, message} }
<p>{name}: {message}</p>

{/each}

<slot></slot>

<div id="welcome-mat">Welcome</div>

<style>
    #welcome-mat {
        width: 50vw;
        font-size: 2em;
        border: 2px solid goldenrod;
        height: 5em;
        padding: 2vw;
        margin: 0 auto;
    }

    
</style>
