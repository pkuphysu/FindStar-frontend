<script>
  export let description
  export let images
</script>

<div class="star-card">
  <p class="description">{description}</p>
  {#each images as image}
  <img src={image.url} alt="星星的图片" />
  {/each}
  <div class="footnote">
    <p>数据来源：北京大学青年天文学会（学生社团）</p>
    <p>图片来源：cseligman.com</p>
  </div>
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
}
.description {
  text-align: left;
  white-space: pre-wrap;
  padding-left: 10px;
  line-height: 1.5;
}
.footnote {
  font-size: small;
  text-align: left;
}
</style>
