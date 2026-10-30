<script>
    const { name, familySheep, isGirl, onShowLove } = $props();

</script>

<div class={familySheep || "not-a-sheep"} 
    class:is-girl={isGirl} 
    class:is-boy={!isGirl}
    >

    <h2>I am {name}</h2>

    <button onclick={() => onShowLove(name)}>Show loved</button>

</div>

<style>
    .black-sheep h2 {
        color: blueviolet;
    }
    .gray-sheep h2 {
        color: pink;
    }
    .not-a-sheep h2 {
        color: blue;
    }

    .is-girl {
        border: 1px dashed blue;
    }

    .is-boy {
        border: 1px dashed yellow;
    }

</style>
