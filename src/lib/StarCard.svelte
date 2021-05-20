<script>
  import CardFooter from './CardFooter.svelte'
  export let description
  export let images
</script>

<div class="star-card">
  <p class="description">{description}</p>
  {#each images as image}
    <img src={image.url} alt="星星的图片" />
  {/each}
  <CardFooter />
</div>

<style>
  img {
    max-width: 100%;
    border-radius: 10px;
    display: block;
    margin: 10px 0;
  }
  .star-card {
    border-style: dashed;
    border-color: slategray;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    background-color: #000005;
  }
  .description {
    text-align: left;
    white-space: pre-wrap;
    padding-left: 10px;
    line-height: 1.5;
  }
</style>
