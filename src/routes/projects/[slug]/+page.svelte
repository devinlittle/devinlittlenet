<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p class="postDate">Wrote on {data.date}</p>
	<svelte:component this={data.content}/>
</article>

<style>
  .postDate {
    font-size: 85%;
    color: blueviolet;
  }
</style>
