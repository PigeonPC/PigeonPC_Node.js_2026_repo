<script>
    let {weapon, damage } = $props();
    console.log(weapon);

    function resetDamage() {
        damage = 0;
    }
</script>

<h4>Weapons</h4>

<p>{weapon}</p>
<p>{damage}</p>
<button onclick={() => damage++}>Increase Damage</button>
<button onClick={resetDamage()}>Reset Damage</button>

