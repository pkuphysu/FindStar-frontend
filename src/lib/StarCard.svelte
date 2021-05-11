<script>
  export let date
  export let name
  export let description
  export let images
</script>

<div class="star-card">
  <p>{date} 的星星是 <span class="star-name">{name}</span></p>
  <p>{description}</p>

  {#each images as image}
  <div><img src={image} alt={name} /></div>

  {/each}
</div>

<style>
img {
  max-width: 100%;
  border-radius: 10px;
}
.star-card {
  border-style: dashed;
  border-color: slategray;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
}
.star-name {
  color: darkcyan;
  font-weight: bold;
}
</style>
