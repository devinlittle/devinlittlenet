<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p class="postDate">Wrote on {data.date}</p>
  <a href="/projects">Back to Projects</a>
	<svelte:component this={data.content}/>
</article>

<style>
  .postDate {
    font-size: 85%;
    color: blueviolet;
  }
</style>
