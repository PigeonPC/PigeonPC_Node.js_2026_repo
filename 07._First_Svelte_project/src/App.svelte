<script>

  import Weapons from "../components/Weapons/Weapons.svelte";
  import Planets from "../components/Planets/Planets.svelte";

  const version = "First";

</script>


<h1>My {version} Svelte App</h1>

<h2>Under construction</h2>

<Weapons weapon={"Scimitar"} damage={4}></Weapons>

<style>
  h1 {
    color: blue;
  }


</style>