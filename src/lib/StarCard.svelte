<script>
  export let description
  export let images
</script>

<div class="star-card">
  <p>{description}</p>
  {#each images as image}
  <img src={image.url} alt="星星的图片" />
  {/each}
</div>

<style>
img {
  max-width: 100%;
  border-radius: 10px;
  display: block;
}
.star-card {
  border-style: dashed;
  border-color: slategray;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
}
p {
  text-align: left;
  white-space: pre-wrap;
  padding-left: 10px;
}
</style>
