<script>
  export let data;
  import Welcome from "$lib/comps/Welcome.svelte";

</script>
 

<h1>{data.pagedt.slug}</h1>

{#if data.pagedt.slug === "Welcome"}
  <Welcome/>
{/if}

