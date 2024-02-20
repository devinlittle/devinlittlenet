<svelte:head>
 <title>DevinLittle.net - Projects</title> 
 <meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
  import Preview from "$lib/comps/Preview.svelte";
  export let data;
</script>

<h1>Projects</h1>

{#each data.posts as v}
  <div>
    <br>
      <Preview articleLink={v.path} articleTitle={v.meta.title} articleImage={v.meta.image}/>
    <br>
  </div>
{/each}

<!-->Content Here!</!-->
